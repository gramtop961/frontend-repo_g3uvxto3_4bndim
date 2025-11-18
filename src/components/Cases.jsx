import { motion } from 'framer-motion'

const cases = [
  {
    tag: 'eCommerce',
    title: 'חנות אופנה אונליין',
    kpi: '+286% ROAS',
    desc: 'הקמנו מבני קמפיינים דינמיים, קריאייטיב מבוסס UGC ואוטומציות אימייל שהחזירו לקוחות.',
  },
  {
    tag: 'B2B SaaS',
    title: 'פלטפורמת תוכנה לניהול צוותים',
    kpi: '-42% CPA',
    desc: 'פילוח מחדש, Value Props ברורים ודפי נחיתה מודולרים העלו יחס המרה ושמרו על איכות לידים.',
  },
  {
    tag: 'Local',
    title: 'מרפאת מומחים פרטית',
    kpi: '+173% לידים',
    desc: 'שילוב קמפיינים לוקאליים עם תוכן וידאו קצר יצר צמיחה עקבית בלידים חודשיים.',
  },
]

function Cases() {
  return (
    <section id="cases" className="relative bg-slate-950 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_350px_at_50%_-80px,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-right">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Case Studies</h2>
          <p className="mt-2 text-slate-300">מדברים במספרים – כמה דוגמאות טריות.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6 text-right text-slate-200 backdrop-blur"
            >
              <div className="mb-2 text-xs text-cyan-300">{c.tag}</div>
              <div className="text-xl font-extrabold text-white">{c.title}</div>
              <div className="mt-1 text-fuchsia-300">{c.kpi}</div>
              <p className="mt-3 text-sm leading-7 text-slate-300">{c.desc}</p>
              <div className="absolute -bottom-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases
