import { z } from 'zod'

export const contactSchema = z.object({
  nome: z
    .string()
    .min(2, 'Nome deve ter ao menos 2 caracteres')
    .max(100, 'Nome muito longo'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().optional(),
  interesse: z.string().min(1, 'Selecione um interesse'),
  mensagem: z.string().max(500, 'Mensagem muito longa').optional(),
})

export type ContactSchema = z.infer<typeof contactSchema>
