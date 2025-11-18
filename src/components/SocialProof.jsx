import { motion } from 'framer-motion'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
]

const reviews = [
  {
    name: 'טל, מנכ"ל חברת SaaS',
    text: 'בתוך 90 יום הכפלנו את קצב הלידים ושמרנו על איכות. סוף סוף יש לנו שליטה מלאה בנתונים.',
  },
  {
    name: 'נועה, סמנכ"לית שיווק',
    text: 'השילוב של קריאייטיב חד עם טירגוט מדויק וניתוח נתונים הפך את המדיה שלנו לרווחית.',
  },
  {
    name: 'דוד, בעל חנות איקומרס',
    text: 'ה־ROAS זינק והפאנל נמכר. קיבלנו צוות שחושב ומבצע כמו שלנו – רק יותר מהר.',
  },
]

function SocialProof() {
  return (
    <section className="relative bg-slate-950 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_-80px,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-right">
          <h2 className="text-3xl font-black tracking-tight text-white">מותגים שבוטחים בנו</h2>
          <p className="mt-2 text-slate-300">ועשרות SMBs מצוינים שמתרחבים איתנו מדי רבעון.</p>
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
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-right text-slate-200 backdrop-blur"
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
