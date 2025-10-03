export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  // Validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    // Option 1: SendGrid Marketing Contacts API
    // https://docs.sendgrid.com/api-reference/contacts/add-or-update-a-contact
    
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    
    if (!SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY not configured');
      return res.status(500).json({ error: 'Newsletter service not configured' });
    }

    const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contacts: [
          {
            email: email,
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('SendGrid error:', errorData);
      return res.status(500).json({ error: 'Failed to subscribe to newsletter' });
    }

    // Send welcome email
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(SENDGRID_API_KEY);

    const welcomeEmail = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL || 'contact@netzinformatique.fr',
      subject: 'Bienvenue dans notre newsletter ! 🎉',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">Bienvenue chez NETZ Informatique !</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px;">Bonjour,</p>
            
            <p style="font-size: 16px;">Merci de vous être inscrit à notre newsletter ! 🎉</p>
            
            <p style="font-size: 16px;">Vous recevrez désormais :</p>
            <ul style="font-size: 16px;">
              <li>Nos dernières actualités IT</li>
              <li>Des conseils et tutoriels exclusifs</li>
              <li>Des offres spéciales réservées à nos abonnés</li>
            </ul>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://netzinformatique.fr/blog" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Découvrir notre blog</a>
            </div>
            
            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              À très bientôt,<br>
              <strong>L'équipe NETZ Informatique</strong>
            </p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            
            <p style="font-size: 12px; color: #999; text-align: center;">
              Vous recevez cet email car vous vous êtes inscrit à notre newsletter.<br>
              <a href="https://netzinformatique.fr" style="color: #667eea;">netzinformatique.fr</a>
            </p>
          </div>
        </body>
        </html>
      `,
    };

    await sgMail.send(welcomeEmail);

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
