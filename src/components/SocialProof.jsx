import { motion } from 'framer-motion'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
]

const reviews = [
  {
    name: 'Tal, SaaS Founder',
    text: 'In 90 days we doubled qualified pipeline with full visibility across the funnel.',
  },
  {
    name: 'Noa, VP Marketing',
    text: 'Sharp creative + precise targeting + measurement discipline turned media profitable.',
  },
  {
    name: 'David, eCom Owner',
    text: 'ROAS up, CAC down. They think like an in‑house team and move faster.',
  },
]

function SocialProof() {
  return (
    <section className="relative bg-slate-950 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_-80px,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-black tracking-tight text-white">Trusted by modern brands</h2>
          <p className="mt-2 text-slate-300">Plus dozens of top SMBs growing each quarter.</p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
          {logos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center"
            >
              <img src={src} alt="logo" className="max-h-10 opacity-80 invert" />
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-left text-slate-200 backdrop-blur"
            >
              <p className="text-sm leading-7">“{r.text}”</p>
              <div className="mt-4 text-xs text-slate-400">{r.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
