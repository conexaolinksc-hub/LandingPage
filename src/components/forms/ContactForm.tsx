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
      className="bg-white border border-border rounded-2xl p-8 flex flex-col gap-5 shadow-lg shadow-black/5"
      noValidate
    >
      {/* Nome */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="nome" className="text-xs font-semibold text-foreground/55 uppercase tracking-wider">
          Nome
        </Label>
        <Input
          id="nome"
          placeholder="Seu nome completo"
          className={cn(
            'bg-bg-base border-border text-foreground placeholder:text-muted-foreground/60 focus:border-brand-blue focus:ring-brand-blue/20',
            errors.nome && 'border-destructive/60'
          )}
          {...register('nome')}
        />
        {errors.nome && (
          <p className="text-xs text-destructive">{errors.nome.message}</p>
        )}
      </div>

      {/* Email + Telefone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-xs font-semibold text-foreground/55 uppercase tracking-wider">
            E-mail
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className={cn(
              'bg-bg-base border-border text-foreground placeholder:text-muted-foreground/60 focus:border-brand-blue',
              errors.email && 'border-destructive/60'
            )}
            {...register('email')}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="telefone" className="text-xs font-semibold text-foreground/55 uppercase tracking-wider">
            Telefone
          </Label>
          <Input
            id="telefone"
            type="tel"
            placeholder="(00) 00000-0000"
            className="bg-bg-base border-border text-foreground placeholder:text-muted-foreground/60 focus:border-brand-blue"
            {...register('telefone')}
          />
        </div>
      </div>

      {/* Interesse */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="interesse" className="text-xs font-semibold text-foreground/55 uppercase tracking-wider">
          Interesse
        </Label>
        <Select
          onValueChange={(val) => setValue('interesse', val as string, { shouldValidate: true })}
        >
          <SelectTrigger
            className={cn(
              'bg-bg-base border-border text-foreground focus:border-brand-blue w-full',
              errors.interesse && 'border-destructive/60'
            )}
            id="interesse"
          >
            <SelectValue placeholder="Selecione um serviço" />
          </SelectTrigger>
          <SelectContent className="bg-white border-border shadow-lg">
            {INTEREST_OPTIONS.map((opt) => (
              <SelectItem
                key={opt.value}
                value={opt.value}
                className="text-foreground focus:bg-brand-blue/8 focus:text-brand-blue cursor-pointer"
              >
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.interesse && (
          <p className="text-xs text-destructive">{errors.interesse.message}</p>
        )}
      </div>

      {/* Mensagem */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="mensagem" className="text-xs font-semibold text-foreground/55 uppercase tracking-wider">
          Mensagem <span className="normal-case font-normal">(opcional)</span>
        </Label>
        <Textarea
          id="mensagem"
          placeholder="Descreva brevemente sua necessidade..."
          rows={3}
          className="bg-bg-base border-border text-foreground placeholder:text-muted-foreground/60 focus:border-brand-blue resize-none"
          {...register('mensagem')}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        id="form-submit"
        disabled={isSubmitting}
        className="gradient-brand text-white font-semibold w-full shadow-md shadow-brand-blue/20 hover:opacity-90 border-0 transition-opacity"
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

      {/* Server feedback */}
      {serverMessage && (
        <div
          className={cn(
            'flex items-center gap-3 p-4 rounded-xl text-sm font-medium',
            serverMessage.type === 'success'
              ? 'bg-brand-green/8 border border-brand-green/25 text-brand-green'
              : 'bg-destructive/8 border border-destructive/25 text-destructive'
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
