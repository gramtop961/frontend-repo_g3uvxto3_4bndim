import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

function CTAForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(`Hey, I'm ${name || '—'} from ${company || '—'}. I'd love to chat about growth.`)
    return `https://wa.me/972501234567?text=${text}`
  }, [name, company])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate lead capture then redirect to WhatsApp
    setTimeout(() => {
      setSent(true)
      setLoading(false)
      window.location.href = whatsappUrl
    }, 600)
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_-50px,rgba(168,85,247,0.14),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-black tracking-tight text-white">Let’s check fit</h2>
          <p className="mt-2 text-slate-300">Leave details for a quick intro — if there’s a fit, we’ll build an action plan to KPIs.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none ring-0 focus:border-fuchsia-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none ring-0 focus:border-fuchsia-500"
            />
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none ring-0 focus:border-fuchsia-500"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <a
              href={whatsappUrl}
              className="rounded-xl bg-emerald-500/90 px-5 py-3 text-white hover:bg-emerald-500"
            >
              Or ping us on WhatsApp
            </a>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-bold text-white disabled:opacity-70"
            >
              {loading ? 'Sending…' : sent ? 'Sent!' : 'Book a call'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default CTAForm
