import DOMPurify from 'isomorphic-dompurify';
import validator from 'validator';
import { Resend } from 'resend';

// Rate limiting - simple in-memory store
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 newsletter subscriptions per window

function checkRateLimit(identifier) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(identifier) || [];

  // Clean old requests
  const validRequests = userRequests.filter((time) => now - time < RATE_LIMIT_WINDOW);

  if (validRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  validRequests.push(now);
  rateLimitMap.set(identifier, validRequests);
  return true;
}

// Exposed for tests to reset rate-limit state between cases
export function __resetRateLimit() {
  rateLimitMap.clear();
}

function welcomeEmailHtml() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0;">Bienvenue chez NETZ Informatique !</h1>
      </div>

      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
        <p style="font-size: 16px;">Bonjour,</p>

        <p style="font-size: 16px;">Merci de vous être inscrit à notre newsletter ! 🎉</p>

        <p style="font-size: 16px;">Vous recevrez désormais :</p>
        <ul style="font-size: 16px;">
          <li>Nos dernières actualités IT</li>
          <li>Des conseils et tutoriels exclusifs</li>
          <li>Des offres spéciales réservées à nos abonnés</li>
        </ul>

        <div style="text-align: center; margin: 30px 0;">
          <a href="https://www.netzinformatique.fr/blog" style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Découvrir notre blog</a>
        </div>

        <p style="font-size: 14px; color: #666; margin-top: 30px;">
          À très bientôt,<br>
          <strong>L'équipe NETZ Informatique</strong>
        </p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

        <p style="font-size: 12px; color: #999; text-align: center;">
          Vous recevez cet email car vous vous êtes inscrit à notre newsletter.<br>
          <a href="https://www.netzinformatique.fr" style="color: #4F46E5;">netzinformatique.fr</a>
        </p>
      </div>
    </body>
    </html>
  `;
}

export default async function handler(req, res) {
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

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
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

  const { email } = req.body;

  // Enhanced email validation
  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({
      error: 'Invalid email address',
      message: 'Adresse email invalide'
    });
  }

  // Sanitize email
  const sanitizedEmail = DOMPurify.sanitize(email.toLowerCase().trim());

  // Newsletter delivery via Resend (same provider as the contact form)
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ error: 'Newsletter service not configured' });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);

    // Add the subscriber to a Resend Audience when one is configured
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (audienceId) {
      await resend.contacts.create({
        email: sanitizedEmail,
        unsubscribed: false,
        audienceId
      });
    }

    // Send the welcome email
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    await resend.emails.send({
      from: fromEmail,
      to: sanitizedEmail,
      subject: 'Bienvenue dans notre newsletter ! 🎉',
      html: welcomeEmailHtml()
    });

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
}
