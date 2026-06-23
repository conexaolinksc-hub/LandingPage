'use client'

import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useContactForm } from '@/hooks/useContactForm'
import { cn } from '@/lib/utils'
import { INTEREST_OPTIONS } from '@/constants/content'

// focus-visible:ring-brand-blue/15 focus-visible:border-brand-blue h-11 rounded-sm
const field =
  'bg-white border border-black/20 text-foreground placeholder:text-foreground/35 ' +
  'focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 focus-visible:ring-2 ' +
  'focus-visible:ring-brand-blue/15 focus-visible:border-brand-blue h-11 rounded-sm'

const label = 'text-sm font-semibold text-foreground/75 tracking-wide'
const fieldError = 'border-destructive/70 focus:border-destructive focus:ring-destructive/15'

export function ContactForm() {
  const { form, onSubmit, serverMessage } = useContactForm()
  const {
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = form

  return (
    <form
      id="contact-form"
      onSubmit={onSubmit}
      className="bg-white border border-black/10 rounded-lg p-8 flex flex-col gap-5 shadow-lg shadow-black/5"
      noValidate
    >
      {/* Nome */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="nome" className={label}>Nome</Label>
        <Input
          id="nome"
          placeholder="Seu nome completo"
          className={cn(field, errors.nome && fieldError)}
          {...register('nome')}
        />
        {errors.nome && (
          <p className="text-xs text-destructive font-medium">{errors.nome.message}</p>
        )}
      </div>

      {/* Email + Telefone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email" className={label}>E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className={cn(field, errors.email && fieldError)}
            {...register('email')}
          />
          {errors.email && (
            <p className="text-xs text-destructive font-medium">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="telefone" className={label}>Telefone</Label>
          <Input
            id="telefone"
            type="tel"
            placeholder="(27) 99999-9999"
            className={field}
            {...register('telefone')}
          />
        </div>
      </div>

      {/* Interesse */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="interesse" className={label}>Interesse</Label>
        <Select
          onValueChange={(val) => setValue('interesse', val as string, { shouldValidate: true })}
        >
          <SelectTrigger
            id="interesse"
            className={cn(field, 'w-full', errors.interesse && fieldError)}
          >
            <SelectValue placeholder="Selecione um serviço" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-black/15 shadow-lg rounded-md">
            {INTEREST_OPTIONS.map((opt) => (
              <SelectItem
                key={opt.value}
                value={opt.value}
                className="text-foreground/85 focus:bg-brand-blue/8 focus:text-brand-blue cursor-pointer py-2.5"
              >
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.interesse && (
          <p className="text-xs text-destructive font-medium">{errors.interesse.message}</p>
        )}
      </div>

      {/* Mensagem */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="mensagem" className={label}>
          Mensagem <span className="font-normal text-foreground/45">(opcional)</span>
        </Label>
        <Textarea
          id="mensagem"
          placeholder="Descreva brevemente sua necessidade..."
          rows={3}
          className={cn(
            'bg-white border border-black/20 text-foreground placeholder:text-foreground/35',
            'focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15',
            'focus-visible:ring-2 focus-visible:ring-brand-blue/15 focus-visible:border-brand-blue',
            'rounded-sm resize-none'
          )}
          {...register('mensagem')}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        id="form-submit"
        disabled={isSubmitting}
        className="gradient-brand text-white font-semibold w-full shadow-md shadow-brand-blue/20 hover:opacity-90 border-0 transition-opacity h-11"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin mr-2" />
            Enviando...
          </>
        ) : (
          'Enviar Solicitação'
        )}
      </Button>

      {/* Feedback do servidor */}
      {serverMessage && (
        <div
          className={cn(
            'flex items-center gap-3 p-4 rounded-md text-sm font-medium',
            serverMessage.type === 'success'
              ? 'bg-brand-green/8 border border-brand-green/30 text-brand-green'
              : 'bg-destructive/8 border border-destructive/30 text-destructive'
          )}
        >
          {serverMessage.type === 'success' ? (
            <CheckCircle size={16} className="flex-shrink-0" />
          ) : (
            <AlertCircle size={16} className="flex-shrink-0" />
          )}
          {serverMessage.text}
        </div>
      )}
    </form>
  )
}
