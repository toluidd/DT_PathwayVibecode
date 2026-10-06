import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { contactDetails } from '../data/site'
import Reveal from '../components/Reveal'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const services = [
  'Structural Engineering',
  'Infrastructure Development',
  'Project Management',
  'Civil Engineering',
  'Infrastructure Maintenance',
  'Compliance & Advisory',
  'General Enquiry',
]

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'General Enquiry',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const { error } = await supabase.from('contact_enquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        company: form.company || null,
        service: form.service,
        message: form.message,
      })

      if (error) throw error

      setStatus('success')
      setForm({ name: '', email: '', phone: '', company: '', service: 'General Enquiry', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or email us directly.'
      )
    }
  }

  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-steel-50 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="relative section-padding max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-5">
              <span className="text-primary-700 text-sm font-600 tracking-wide">Get In Touch</span>
            </div>
            <h1 className="font-display font-700 text-steel-900 text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
              Let's Build Something
              <span className="gradient-text"> That Lasts</span>
            </h1>
            <p className="text-steel-500 text-lg leading-relaxed max-w-2xl">
              Whether you have a project in mind or need expert engineering advice, our team
              is ready to help. Reach out and we'll respond within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 lg:py-28">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: info */}
            <Reveal direction="right" distance={40}>
              <h2 className="font-display font-700 text-2xl text-steel-900 mb-6">Contact Information</h2>
              <p className="text-steel-500 leading-relaxed mb-10">
                Reach us through any of the channels below. For project enquiries, the form on
                the right will get you the fastest response.
              </p>

              <div className="space-y-6">
                {/* Emails */}
                {contactDetails.emails.map((email) => (
                  <a key={email.href} href={email.href} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-accent-500 transition-all duration-300">
                      <Mail size={20} className="text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-steel-400 text-sm mb-1">{email.label}</div>
                      <div className="text-steel-900 font-500">{email.value}</div>
                    </div>
                  </a>
                ))}

                {/* Phone */}
                <a href={contactDetails.phoneHref} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-accent-500 transition-all duration-300">
                    <Phone size={20} className="text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-steel-400 text-sm mb-1">Phone</div>
                    <div className="text-steel-900 font-500">{contactDetails.phone}</div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                    <MapPin size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="text-steel-400 text-sm mb-1">Office</div>
                    <div className="text-steel-900 font-500">{contactDetails.address}</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal direction="left" distance={40} delay={100}>
              <div className="bg-white border border-steel-200 rounded-2xl p-7 sm:p-9 shadow-lg">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                      <CheckCircle2 size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-display font-700 text-xl text-steel-900 mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="text-steel-500 text-sm leading-relaxed max-w-sm">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-primary-600 font-600 text-sm hover:text-primary-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-steel-700 font-500 text-sm mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-steel-200 px-4 py-3 text-steel-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-steel-700 font-500 text-sm mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-steel-200 px-4 py-3 text-steel-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-steel-700 font-500 text-sm mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-steel-200 px-4 py-3 text-steel-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                          placeholder="+234 701 328 3647"
                        />
                      </div>
                      <div>
                        <label className="block text-steel-700 font-500 text-sm mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-steel-200 px-4 py-3 text-steel-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                          placeholder="Company Ltd."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-steel-700 font-500 text-sm mb-2">Service Required</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-steel-200 px-4 py-3 text-steel-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all bg-white"
                      >
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-steel-700 font-500 text-sm mb-2">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-steel-200 px-4 py-3 text-steel-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project, timeline, and requirements..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">{errorMsg}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-600 px-6 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
