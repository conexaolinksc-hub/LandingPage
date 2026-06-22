'use server'

import { contactSchema, type ContactSchema } from '@/validators/contactValidator'
import type { ContactApiResponse } from '@/types/contact'
import { resend, EMAIL_FROM, buildLeadEmail } from '@/lib/email'
import { SITE } from '@/constants/site'

export async function submitContactForm(
  data: ContactSchema
): Promise<ContactApiResponse> {
  try {
    const parsed = contactSchema.safeParse(data)
    if (!parsed.success) {
      return { success: false, message: 'Dados inválidos. Verifique os campos.' }
    }

    const { nome, email, telefone, interesse, mensagem } = parsed.data

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      // TODO: após verificar domínio em resend.com/domains, trocar para [...SITE.notifyEmails]
      // Enquanto o domínio não está verificado, o Resend só entrega para o e-mail da conta
      to: ['conexaolink.sc@gmail.com'],
      replyTo: email,
      subject: `[ConexãoLink] Nova proposta de ${nome}`,
      html: buildLeadEmail({ nome, email, telefone, interesse, mensagem }),
    })

    if (error) {
      console.error('[ContactService] Resend error:', error)
      return { success: false, message: 'Não foi possível enviar. Tente novamente.' }
    }

    return {
      success: true,
      message: 'Mensagem enviada! Entraremos em contato em breve.',
    }
  } catch (err) {
    console.error('[ContactService] Unexpected error:', err)
    return { success: false, message: 'Erro interno. Tente novamente.' }
  }
}
