import { motion } from 'framer-motion'
import { Rocket, Gauge, LineChart, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Accelerated Growth',
    desc: 'Full-funnel builds — media, landing systems, automation and CRO.',
  },
  {
    icon: Gauge,
    title: 'Live Measurement',
    desc: 'Realtime dashboards, continuous experimentation and A/B that turn data into action.',
  },
  {
    icon: LineChart,
    title: 'Paid Media That Wins',
    desc: 'Google, Meta, TikTok and LinkedIn powered by operational AI to reduce CPA and scale ROAS.',
  },
  {
    icon: Sparkles,
    title: 'Creative That Converts',
    desc: 'In‑house studio for video, UGC and short‑form content engineered to hit intent.',
  },
]

function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_-50px,rgba(34,211,238,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-left">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">What we do</h2>
          <p className="mt-2 text-slate-300">A tight integration of tech, media and creative that delivers measurable results.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6 text-left backdrop-blur-md"
            >
              <div className="mb-4 inline-flex rounded-xl border border-fuchsia-400/30 bg-slate-900/60 p-3 text-fuchsia-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{s.desc}</p>
              <div className="absolute -bottom-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
