export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email',
        message: 'Adresse email invalide'
      })
    }

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
          .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #10B981; }
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
    `

    // Auto-reply HTML for customer
    const customerEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: #10B981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Merci pour votre message !</h1>
            <p>NETZ Informatique</p>
          </div>
          <div class="content">
            <p>Bonjour ${fName || fullName},</p>
            <p>Nous avons bien reçu votre demande et nous vous remercions de l'intérêt que vous portez à NETZ Informatique.</p>
            <p>Notre équipe va étudier votre demande et vous répondra dans les <strong>24 heures</strong>.</p>
            <p><strong>Votre message :</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #10B981; margin: 20px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <p>En attendant, n'hésitez pas à nous contacter directement :</p>
            <ul>
              <li>📞 Téléphone : <a href="tel:+33899250151">0 8 99 25 01 51</a></li>
              <li>📧 Email : <a href="mailto:contact@netzinformatique.fr">contact@netzinformatique.fr</a></li>
              <li>📍 Adresse : 1a Route de Schweighouse, 67500 Haguenau</li>
            </ul>
            <div style="text-align: center;">
              <a href="https://netzinformatique.fr" class="button">Visiter notre site</a>
            </div>
          </div>
          <div class="footer">
            <p><strong>NETZ Informatique</strong> - Votre expert IT depuis plus de 20 ans</p>
            <p>1a Route de Schweighouse, 67500 Haguenau</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Log the submission
    console.log('Contact form submission:', {
      name: fullName,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    // Send emails using SendGrid if API key is available
    if (process.env.SENDGRID_API_KEY) {
      try {
        // Send to admin
        await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            personalizations: [{ 
              to: [{ email: process.env.ADMIN_EMAIL || 'contact@netzinformatique.fr' }] 
            }],
            from: { 
              email: process.env.FROM_EMAIL || 'noreply@netzinformatique.fr', 
              name: 'NETZ Informatique' 
            },
            subject: `[NETZ Contact] ${subject || 'Nouvelle demande'}`,
            content: [{ type: 'text/html', value: adminEmailHTML }]
          })
        })

        // Send auto-reply to customer
        await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            personalizations: [{ to: [{ email }] }],
            from: { 
              email: process.env.FROM_EMAIL || 'contact@netzinformatique.fr', 
              name: 'NETZ Informatique' 
            },
            subject: 'Confirmation de votre demande - NETZ Informatique',
            content: [{ type: 'text/html', value: customerEmailHTML }]
          })
        })
      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Continue even if email fails
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les 24 heures.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer ou nous contacter directement par téléphone.'
    })
  }
}