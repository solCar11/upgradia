'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const SOCIAL_NETWORKS = ['Instagram', 'TikTok', 'Discord', 'YouTube', 'Twitter/X', 'Otro']

const SUBJECTS = [
  'Problema con mi pedido',
  'No he recibido mi producto',
  'Duda sobre un producto',
  'Solicitud de reembolso',
  'Error técnico',
  'Otro',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    socialNetwork: '',
    socialHandle: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 px-4 gap-6 text-center">
        <CheckCircle size={52} style={{ color: '#5FFA3B' }} />
        <h2 className="text-2xl font-black text-white">¡Mensaje enviado!</h2>
        <p className="text-sm max-w-xs" style={{ color: '#888' }}>
          Hemos recibido tu consulta. Nuestro equipo te responderá en el menor tiempo posible (normalmente en menos de 24h).
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-white mb-2">Contacto</h1>
      <p className="text-sm mb-8" style={{ color: '#888' }}>
        ¿Tienes alguna duda o incidencia? Rellena el formulario y te respondemos lo antes posible.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-white uppercase tracking-wide">Nombre *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-colors"
            style={{ background: '#111', border: '1px solid #2a2a2a' }}
          />
        </div>

        {/* Social network */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-white uppercase tracking-wide">Red social *</label>
          <div className="flex gap-2">
            <select
              name="socialNetwork"
              required
              value={form.socialNetwork}
              onChange={handleChange}
              className="px-3 py-3 rounded-xl text-sm text-white outline-none shrink-0"
              style={{ background: '#111', border: '1px solid #2a2a2a', minWidth: '130px' }}
            >
              <option value="" disabled>Seleccionar</option>
              {SOCIAL_NETWORKS.map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <input
              type="text"
              name="socialHandle"
              required
              value={form.socialHandle}
              onChange={handleChange}
              placeholder="@tu_usuario"
              className="flex-1 px-4 py-3 rounded-xl text-sm text-white outline-none"
              style={{ background: '#111', border: '1px solid #2a2a2a' }}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-white uppercase tracking-wide">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none"
            style={{ background: '#111', border: '1px solid #2a2a2a' }}
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-white uppercase tracking-wide">Asunto *</label>
          <select
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none"
            style={{ background: '#111', border: '1px solid #2a2a2a' }}
          >
            <option value="" disabled>Selecciona un asunto</option>
            {SUBJECTS.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-white uppercase tracking-wide">Mensaje *</label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Describe tu consulta o incidencia con el mayor detalle posible..."
            className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none resize-none"
            style={{ background: '#111', border: '1px solid #2a2a2a' }}
          />
        </div>

        <button type="submit" className="btn-green mt-2">
          ENVIAR MENSAJE
        </button>

        <p className="text-xs text-center" style={{ color: '#555' }}>
          También puedes escribirnos directamente a{' '}
          <a href="mailto:info@upgradia.store" className="underline" style={{ color: '#888' }}>
            info@upgradia.store
          </a>
        </p>
      </form>
    </div>
  )
}
