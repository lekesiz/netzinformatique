// Rate limiting - simple in-memory store
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 contact submissions per window

function checkRateLimit(identifier) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(identifier) || [];
  const validRequests = userRequests.filter((time) => now - time < RATE_LIMIT_WINDOW);

  if (validRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  validRequests.push(now);
  rateLimitMap.set(identifier, validRequests);
  return true;
}

async function handler(req, res) {
  // CORS headers
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

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const identifier = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || 'unknown';
  if (!checkRateLimit(identifier)) {
    return res.status(429).json({
      error: 'Too many requests',
      message: 'Trop de demandes. Veuillez réessayer dans 15 minutes.'
    });
  }

  try {
    const { firstName, lastName, name, email, phone, subject, message } = req.body;

    // Support both formats
    const fullName = name || `${firstName || ''} ${lastName || ''}`.trim();

    // Basic validation
    if (!fullName || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Veuillez remplir tous les champs obligatoires'
      });
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email',
        message: 'Adresse email invalide'
      });
    }

    // Length validation
    if (fullName.length < 2) {
      return res.status(400).json({
        error: 'Invalid name',
        message: 'Le nom doit contenir au moins 2 caractères'
      });
    }

    if (message.length < 10) {
      return res.status(400).json({
        error: 'Invalid message',
        message: 'Le message doit contenir au moins 10 caractères'
      });
    }

    // Check if Resend is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.RESEND_TO_EMAIL || 'contact@netzinformatique.fr';

    if (!resendApiKey) {
      console.log('Contact form submission (Resend not configured):', {
        name: fullName,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString()
      });
      
      return res.status(200).json({
        success: true,
        message: 'Votre message a été reçu. Nous vous répondrons dans les plus brefs délais.'
      });
    }

    // Try to send email with Resend
    try {
      const { Resend } = require('resend');
      const resend = new Resend(resendApiKey);

      const emailHTML = `
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
                <div class="value">${fullName}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">📞 Téléphone</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              ${subject ? `
              <div class="field">
                <div class="label">📋 Sujet</div>
                <div class="value">${subject}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Reçu via le formulaire de contact de <strong>netzinformatique.fr</strong></p>
              <p>Date: ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</p>
            </div>
          </div>
        </body>
        </html>
      `;

      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `[NETZ Contact] ${subject || 'Nouveau message de ' + fullName}`,
        html: emailHTML,
      });

      return res.status(200).json({
        success: true,
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les 24 heures.'
      });

    } catch (emailError) {
      console.error('Email sending error:', emailError);
      
      // Log the submission even if email fails
      console.log('Contact form submission (email failed):', {
        name: fullName,
        email,
        phone,
        subject,
        message,
        error: emailError.message,
        timestamp: new Date().toISOString()
      });

      return res.status(200).json({
        success: true,
        message: 'Votre message a été reçu. Nous vous répondrons dans les plus brefs délais.'
      });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer ou nous contacter directement par téléphone.'
    });
  }
}

module.exports = handler;
// Exposed for tests to reset rate-limit state between cases
module.exports.__resetRateLimit = () => rateLimitMap.clear();
