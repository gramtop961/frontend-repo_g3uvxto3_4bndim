import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero({ onCTAClick }) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950">
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_120%,rgba(99,102,241,0.18),transparent)]" />
      </div>

      {/* 3D Spline */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to enhance contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-24 pb-16 sm:pt-28 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-slate-900/60 px-4 py-2 text-fuchsia-300 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
            Futuristic Growth Agency for Ambitious Brands
          </div>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            We turn ad spend into predictable revenue with creative, media and AI
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            One integrated team across strategy, creative, media and analytics. We build high-converting systems that drive measurable growth.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-start gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCTAClick}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 text-base font-bold text-white shadow-[0_0_40px_rgba(168,85,247,0.35)]"
            >
              <span className="relative z-10">Talk to Growth Strategist</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0"/>
            </motion.button>

            <a href="#cases" className="rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-3 text-slate-200 backdrop-blur-md hover:border-slate-500/80">
              See real results
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-start gap-6 text-slate-400">
            <div className="text-left">
              <div className="text-2xl font-extrabold text-white">+412%</div>
              <div className="text-xs">Avg. lead growth in new campaigns</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-extrabold text-white"><span className="align-middle">4.9★</span></div>
              <div className="text-xs">Client rating on Google & Clutch</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
