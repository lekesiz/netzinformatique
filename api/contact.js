// Resend integration for email sending - CommonJS format for Vercel
const { Resend } = require('resend');
const DOMPurify = require('isomorphic-dompurify');
const validator = require('validator');

// Rate limiting - simple in-memory store (use Redis for production)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 requests per window

function checkRateLimit(identifier) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(identifier) || [];

  // Clean old requests
  const validRequests = userRequests.filter(time => now - time < RATE_LIMIT_WINDOW);

  if (validRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  validRequests.push(now);
  rateLimitMap.set(identifier, validRequests);
  return true;
}

module.exports = async function handler(req, res) {
  // CORS - Whitelist allowed origins
  const allowedOrigins = [
    'https://netzinformatique.fr',
    'https://www.netzinformatique.fr',
    'https://netzinformatique.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000'
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Rate limiting
  const identifier = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  if (!checkRateLimit(identifier)) {
    return res.status(429).json({
      error: 'Too many requests',
      message: 'Trop de demandes. Veuillez réessayer dans 15 minutes.'
    });
  }

  try {
    const { firstName, lastName, name, email, phone, subject, message } = req.body

    // Support both formats (firstName/lastName or name)
    const fullName = name || `${firstName || ''} ${lastName || ''}`.trim()
    const [fName, lName] = fullName.split(' ')

    // Basic validation
    if (!fullName || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Veuillez remplir tous les champs obligatoires'
      })
    }

    // Validate name length
    if (fullName.length < 2 || fullName.length > 100) {
      return res.status(400).json({
        error: 'Invalid name',
        message: 'Le nom doit contenir entre 2 et 100 caractères'
      });
    }

    // Email validation - Enhanced with validator
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        error: 'Invalid email',
        message: 'Adresse email invalide'
      })
    }

    // Validate message length
    if (message.length < 10 || message.length > 5000) {
      return res.status(400).json({
        error: 'Invalid message',
        message: 'Le message doit contenir entre 10 et 5000 caractères'
      });
    }

    // Phone validation (optional field)
    if (phone && !validator.isMobilePhone(phone, 'any', { strictMode: false })) {
      return res.status(400).json({
        error: 'Invalid phone',
        message: 'Numéro de téléphone invalide'
      });
    }

    // Initialize Resend
    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'contact@netzinformatique.fr'
    const toEmail = process.env.RESEND_TO_EMAIL || 'contact@netzinformatique.fr'

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured')
      // Fallback to logging if Resend is not configured
      console.log('Contact form submission:', {
        name: fullName,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString()
      })
      
      return res.status(200).json({
        success: true,
        message: 'Votre message a été reçu. Nous vous répondrons dans les plus brefs délais.'
      })
    }

    const resend = new Resend(resendApiKey);

    // Sanitize all user inputs to prevent XSS
    const sanitizedFullName = DOMPurify.sanitize(fullName);
    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedPhone = phone ? DOMPurify.sanitize(phone) : '';
    const sanitizedSubject = subject ? DOMPurify.sanitize(subject) : '';
    const sanitizedMessage = DOMPurify.sanitize(message);

    // Prepare email HTML content for admin
    const adminEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #4F46E5; margin-bottom: 5px; }
          .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #10B981; word-break: break-word; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 Nouvelle Demande de Contact</h1>
            <p>NETZ Informatique</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Nom Complet</div>
              <div class="value">${sanitizedFullName}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email</div>
              <div class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
            </div>
            ${sanitizedPhone ? `
            <div class="field">
              <div class="label">📞 Téléphone</div>
              <div class="value"><a href="tel:${sanitizedPhone}">${sanitizedPhone}</a></div>
            </div>
            ` : ''}
            ${sanitizedSubject ? `
            <div class="field">
              <div class="label">📋 Sujet</div>
              <div class="value">${sanitizedSubject}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="value">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>Reçu via le formulaire de contact de <strong>netzinformatique.fr</strong></p>
            <p>Date: ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send emails using Resend
    try {
      // Email to admin
      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `[NETZ Contact] ${sanitizedSubject || 'Nouveau message de ' + sanitizedFullName}`,
        html: adminEmailHTML,
      });

      // Confirmation email to user - DISABLED until domain is verified
      // await resend.emails.send({
      //   from: fromEmail,
      //   to: sanitizedEmail,
      //   subject: 'Confirmation - Votre message a bien été reçu',
      //   html: customerEmailHTML,
      // });

      return res.status(200).json({
        success: true,
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les 24 heures.'
      })
    } catch (emailError) {
      console.error('Resend email error:', emailError);
      throw emailError;
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer ou nous contacter directement par téléphone.'
    })
  }
}
