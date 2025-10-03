// SendGrid integration for email sending
import sgMail from '@sendgrid/mail';

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
    const { name, email, phone, subject, message } = req.body

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Initialize SendGrid
    const sendgridApiKey = process.env.SENDGRID_API_KEY
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'contact@netzinformatique.fr'
    const toEmail = process.env.SENDGRID_TO_EMAIL || 'contact@netzinformatique.fr'

    if (!sendgridApiKey) {
      console.error('SENDGRID_API_KEY is not configured')
      // Fallback to logging if SendGrid is not configured
      console.log('Contact form submission:', {
        name,
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

    sgMail.setApiKey(sendgridApiKey)

    // Email to admin
    const adminMsg = {
      to: toEmail,
      from: fromEmail,
      subject: `[NETZ Contact] ${subject || 'Nouveau message de ' + name}`,
      text: `
Nouveau message reçu via le formulaire de contact:

Nom: ${name}
Email: ${email}
Téléphone: ${phone || 'Non fourni'}
Sujet: ${subject || 'Non spécifié'}

Message:
${message}

---
Envoyé le: ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}
      `,
      html: `
<h2>Nouveau message reçu via le formulaire de contact</h2>
<table style="width: 100%; border-collapse: collapse;">
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Nom:</strong></td>
    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
  </tr>
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Téléphone:</strong></td>
    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone || 'Non fourni'}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Sujet:</strong></td>
    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${subject || 'Non spécifié'}</td>
  </tr>
</table>
<h3>Message:</h3>
<p style="white-space: pre-wrap;">${message}</p>
<hr>
<p style="font-size: 12px; color: #666;">
  Envoyé le: ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}
</p>
      `,
    }

    // Confirmation email to user
    const userMsg = {
      to: email,
      from: fromEmail,
      subject: 'Confirmation - Votre message a bien été reçu',
      text: `
Bonjour ${name},

Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.

Notre équipe reviendra vers vous dans les plus brefs délais.

Voici un récapitulatif de votre message:
${message}

Cordialement,
L'équipe NETZ Informatique

---
NETZ Informatique
1a Route de Schweighouse
67500 Haguenau, France
Tél: +(33) 0 8 99 25 01 51
Email: contact@netzinformatique.fr
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #8b5cf6;">Bonjour ${name},</h2>
  
  <p>Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.</p>
  
  <p>Notre équipe reviendra vers vous dans les plus brefs délais.</p>
  
  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3>Voici un récapitulatif de votre message:</h3>
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
  
  <p>Cordialement,<br>
  <strong>L'équipe NETZ Informatique</strong></p>
  
  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
  
  <div style="font-size: 12px; color: #666;">
    <p><strong>NETZ Informatique</strong><br>
    1a Route de Schweighouse<br>
    67500 Haguenau, France<br>
    Tél: +(33) 0 8 99 25 01 51<br>
    Email: <a href="mailto:contact@netzinformatique.fr">contact@netzinformatique.fr</a></p>
  </div>
</div>
      `,
    }

    // Send emails
    await sgMail.send(adminMsg)
    await sgMail.send(userMsg)

    return res.status(200).json({
      success: true,
      message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({
      error: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.'
    })
  }
}