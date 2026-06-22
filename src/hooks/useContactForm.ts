'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { contactSchema, type ContactSchema } from '@/validators/contactValidator'
import { submitContactForm } from '@/services/contactService'

export function useContactForm() {
  const [serverMessage, setServerMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      interesse: '',
      mensagem: '',
    },
  })

  const onSubmit = async (data: ContactSchema) => {
    setServerMessage(null)
    try {
      const result = await submitContactForm(data)
      if (result.success) {
        setServerMessage({ type: 'success', text: result.message })
        form.reset()
      } else {
        setServerMessage({ type: 'error', text: result.message })
      }
    } catch {
      setServerMessage({
        type: 'error',
        text: 'Erro de conexão. Tente novamente.',
      })
    }
  }

  return { form, onSubmit: form.handleSubmit(onSubmit), serverMessage }
}
