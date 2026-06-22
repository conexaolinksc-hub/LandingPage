import { Resend } from 'resend'

/** Singleton — reutiliza a mesma instância em todo o app */
export const resend = new Resend(process.env.RESEND_API_KEY)

/** Remetente exibido nos e-mails enviados */
export const EMAIL_FROM = 'ConexãoLink <onboarding@resend.dev>'

/** Gera o HTML do e-mail de nova proposta */
export function buildLeadEmail(data: {
  nome: string
  email: string
  telefone?: string
  interesse: string
  mensagem?: string
}): string {
  const interestMap: Record<string, string> = {
    empresarial: '📶 Plano Empresarial',
    dedicado: '⚡ Link Dedicado',
    outro: '💬 Outro',
  }

  const interest = interestMap[data.interesse] ?? data.interesse

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nova Solicitação de Proposta</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1d4ed8,#16a34a);padding:28px 32px;">
              <p style="margin:0;color:#ffffff;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">
                ConexãoLink
              </p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:700;">
                🎯 Nova Solicitação de Proposta
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.6;">
                Uma nova solicitação foi recebida pelo site. Confira os dados abaixo:
              </p>

              <!-- Data table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;">
                ${row('👤 Nome', data.nome)}
                ${row('📧 E-mail', `<a href="mailto:${data.email}" style="color:#1d4ed8;">${data.email}</a>`)}
                ${data.telefone ? row('📱 Telefone', `<a href="tel:${data.telefone}" style="color:#1d4ed8;">${data.telefone}</a>`) : ''}
                ${row('🎯 Interesse', interest)}
                ${data.mensagem ? row('💬 Mensagem', data.mensagem) : ''}
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td>
                    <a href="mailto:${data.email}?subject=Proposta ConexãoLink - ${interest}"
                       style="display:inline-block;background:linear-gradient(135deg,#1d4ed8,#16a34a);color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 24px;border-radius:8px;">
                      ✉️ Responder ao cliente
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 32px;">
              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">
                E-mail enviado automaticamente pelo site ConexãoLink
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

function row(label: string, value: string): string {
  return `
    <tr style="border-bottom:1px solid #e5e7eb;">
      <td style="padding:12px 16px;background:#f9fafb;font-size:13px;font-weight:600;color:#6b7280;white-space:nowrap;width:140px;">
        ${label}
      </td>
      <td style="padding:12px 16px;font-size:14px;color:#111827;line-height:1.5;">
        ${value}
      </td>
    </tr>
  `
}
