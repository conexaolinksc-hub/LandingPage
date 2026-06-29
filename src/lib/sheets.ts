'use server'

/**
 * Google Sheets integration via Apps Script.
 * Sends lead data to a deployed Apps Script web app
 * which appends it as a new row in the spreadsheet.
 *
 * Security: A shared secret token is validated on the
 * Apps Script side to prevent unauthorized writes.
 */

interface LeadData {
  nome: string
  email: string
  telefone?: string
  interesse: string
  mensagem?: string
}

export async function appendLeadToSheet(lead: LeadData): Promise<void> {
  const url = process.env.GOOGLE_SHEETS_URL
  const token = process.env.GOOGLE_SHEETS_TOKEN

  if (!url || !token) {
    console.warn('[Sheets] GOOGLE_SHEETS_URL or GOOGLE_SHEETS_TOKEN not configured. Skipping.')
    return
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...lead,
        _token: token,
      }),
    })

    if (!res.ok) {
      console.error('[Sheets] HTTP error:', res.status, res.statusText)
      return
    }

    const result = await res.json()
    if (!result.success) {
      console.error('[Sheets] Apps Script error:', result.error)
    }
  } catch (err) {
    // Silently fail — email was already sent, sheet is a bonus
    console.error('[Sheets] Network error:', err)
  }
}
