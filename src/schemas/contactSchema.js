import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  
  email: z.string()
    .email('Veuillez entrer une adresse email valide')
    .min(5, 'L\'email doit contenir au moins 5 caractères')
    .max(100, 'L\'email ne peut pas dépasser 100 caractères'),
  
  phone: z.string()
    .optional()
    .refine(
      (val) => !val || /^(\+33|0)[1-9](\d{2}){4}$/.test(val.replace(/\s/g, '')),
      'Veuillez entrer un numéro de téléphone français valide'
    ),
  
  subject: z.string()
    .min(3, 'Le sujet doit contenir au moins 3 caractères')
    .max(200, 'Le sujet ne peut pas dépasser 200 caractères')
    .optional(),
  
  message: z.string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(2000, 'Le message ne peut pas dépasser 2000 caractères')
})

export const newsletterSchema = z.object({
  email: z.string()
    .email('Veuillez entrer une adresse email valide')
    .min(5, 'L\'email doit contenir au moins 5 caractères')
    .max(100, 'L\'email ne peut pas dépasser 100 caractères')
})
