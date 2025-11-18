import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

function CTAForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(`היי, אני ${name || '—'} מ${company || '—'}. מעוניין/ת בשיחה עם הצוות שלכם.`)
    return `https://wa.me/972501234567?text=${text}`
  }, [name, company])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // No backend yet – simulate lead capture then redirect to WhatsApp
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
        <div className="mb-8 text-right">
          <h2 className="text-3xl font-black tracking-tight text-white">בואו נבדוק התאמה</h2>
          <p className="mt-2 text-slate-300">השאירו פרטים לשיחה קצרה – ואם יש התאמה, נבנה תוכנית עד לרמת KPI.</p>
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
              dir="rtl"
              type="text"
              placeholder="שם מלא"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-right text-slate-100 placeholder-slate-500 outline-none ring-0 focus:border-fuchsia-500"
            />
            <input
              dir="rtl"
              type="tel"
              placeholder="טלפון"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-right text-slate-100 placeholder-slate-500 outline-none ring-0 focus:border-fuchsia-500"
            />
            <input
              dir="rtl"
              type="text"
              placeholder="שם חברה"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-right text-slate-100 placeholder-slate-500 outline-none ring-0 focus:border-fuchsia-500"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <a
              href={whatsappUrl}
              className="rounded-xl bg-emerald-500/90 px-5 py-3 text-white hover:bg-emerald-500"
            >
              או כתבו לנו ב־WhatsApp
            </a>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-bold text-white disabled:opacity-70"
            >
              {loading ? 'שולח…' : sent ? 'נשלח!' : 'לקביעת שיחה'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default CTAForm
