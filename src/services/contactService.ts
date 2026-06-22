'use server'

import { contactSchema, type ContactSchema } from '@/validators/contactValidator'
import type { ContactApiResponse } from '@/types/contact'

export async function submitContactForm(
  data: ContactSchema
): Promise<ContactApiResponse> {
  try {
    const parsed = contactSchema.safeParse(data)
    if (!parsed.success) {
      return { success: false, message: 'Dados inválidos. Verifique os campos.' }
    }

    // TODO: Integrar com provedor de e-mail (Resend, SendGrid, etc.)
    // TODO: Integrar com CRM (HubSpot, RD Station, etc.)

    return {
      success: true,
      message: 'Mensagem enviada! Entraremos em contato em breve.',
    }
  } catch (error) {
    console.error('[ContactService] Error:', error)
    return { success: false, message: 'Erro interno. Tente novamente.' }
  }
}
