import { z } from 'zod'

const trimmedString = (minimum, maximum, requiredMessage, minimumMessage, maximumMessage) => (
  z.string({ required_error: requiredMessage, invalid_type_error: requiredMessage })
    .trim()
    .min(minimum, minimumMessage)
    .max(maximum, maximumMessage)
)

const optionalTrimmedString = (schema) => z.preprocess(
  (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
  schema.optional(),
)

const phoneSchema = optionalTrimmedString(
  z.string()
    .trim()
    .max(30, 'Le numéro de téléphone est trop long')
    .refine(
      (value) => /^(\+33|0)[1-9](\d{2}){4}$/.test(value.replace(/[\s().-]/g, '')),
      'Veuillez entrer un numéro de téléphone français valide',
    ),
)

export const contactFieldsSchema = z.object({
  name: trimmedString(2, 100, 'Le nom est requis', 'Le nom doit contenir au moins 2 caractères', 'Le nom ne peut pas dépasser 100 caractères'),
  email: z.string({ required_error: "L'adresse email est requise" })
    .trim()
    .toLowerCase()
    .min(5, "L'email doit contenir au moins 5 caractères")
    .max(100, "L'email ne peut pas dépasser 100 caractères")
    .email('Veuillez entrer une adresse email valide'),
  phone: phoneSchema,
  subject: optionalTrimmedString(
    z.string().trim().min(3, 'Le sujet doit contenir au moins 3 caractères').max(200, 'Le sujet ne peut pas dépasser 200 caractères'),
  ),
  message: trimmedString(10, 2000, 'Le message est requis', 'Le message doit contenir au moins 10 caractères', 'Le message ne peut pas dépasser 2000 caractères'),
})

const contactIntentFields = {
  audience: z.enum(['particulier', 'entreprise']).optional(),
  service: z.enum(['depannage', 'maintenance', 'cybersecurite', 'cloud-reseau', 'ia-offline', 'web-digital', 'formation', 'materiel', 'autre']).optional(),
  source: z.enum(['home', 'services', 'tarifs', 'secteur', 'faq', 'blog', 'contact', 'direct']).optional(),
  offer: z.string().trim().regex(/^[a-z0-9-]{1,80}$/).optional(),
  sector: z.string().trim().regex(/^[a-z0-9-]{1,80}$/).optional(),
  company: optionalTrimmedString(z.string().trim().max(120, "Le nom de l'entreprise est trop long")),
  scale: z.enum(['1-5', '6-20', '21-50', '51-200', '200-plus']).optional(),
  urgency: z.enum(['standard', '48h', 'urgent']).optional(),
  contactPreference: z.enum(['email', 'telephone', 'whatsapp']).optional(),
  device: optionalTrimmedString(z.string().trim().max(120, 'La description de l’appareil est trop longue')),
  intervention: z.enum(['atelier', 'sur-site', 'distance', 'a-definir']).optional(),
  availability: optionalTrimmedString(z.string().trim().max(160, 'La disponibilité est trop longue')),
}

export const contactRequestSchema = contactFieldsSchema.extend({
  ...contactIntentFields,
  website: z.string().max(200).optional().default(''),
  startedAt: z.number().int().positive().optional(),
}).strict()

export const newsletterFieldsSchema = z.object({
  email: z.string({ required_error: "L'adresse email est requise" })
    .trim()
    .toLowerCase()
    .min(5, "L'email doit contenir au moins 5 caractères")
    .max(100, "L'email ne peut pas dépasser 100 caractères")
    .email('Veuillez entrer une adresse email valide'),
  consent: z.literal(true, { errorMap: () => ({ message: 'Votre accord est requis pour vous inscrire' }) }),
})

export const newsletterRequestSchema = newsletterFieldsSchema.extend({
  consentVersion: z.string().trim().max(30).optional(),
  website: z.string().max(200).optional().default(''),
  startedAt: z.number().int().positive().optional(),
}).strict()

export const webVitalSchema = z.object({
  metric: z.enum(['LCP', 'INP', 'CLS', 'FCP', 'TTFB']),
  value: z.number().finite().nonnegative().max(120000),
  rating: z.enum(['good', 'needs-improvement', 'poor']),
  route: z.string().regex(/^\/[a-zA-Z0-9/_-]*$/).max(160),
  device: z.enum(['mobile', 'desktop']),
  connection: z.enum(['slow-2g', '2g', '3g', '4g', 'unknown']),
  timestamp: z.number().int().positive(),
}).strict()
