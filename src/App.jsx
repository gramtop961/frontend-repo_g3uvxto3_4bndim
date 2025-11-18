import { useEffect } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import SocialProof from './components/SocialProof'
import Cases from './components/Cases'
import CTAForm from './components/CTAForm'

function App() {
  useEffect(() => {
    document.documentElement.dir = 'rtl'
    document.title = 'סוכנות דיגיטל עתידנית – Israel Growth Agency'
  }, [])

  const scrollToForm = () => {
    const el = document.getElementById('contact')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#top" className="text-lg font-black tracking-tight text-white">NEON.GROW</a>
          <nav className="hidden gap-6 sm:flex">
            <a href="#services" className="text-sm text-slate-300 hover:text-white">שירותים</a>
            <a href="#cases" className="text-sm text-slate-300 hover:text-white">תוצאות</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white">צור קשר</a>
          </nav>
          <a href="#contact" className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white">שיחת התאמה</a>
        </div>
      </header>

      <main className="pt-16" id="top">
        <Hero onCTAClick={scrollToForm} />
        <Services />
        <SocialProof />
        <Cases />
        <CTAForm />
      </main>

      <footer className="border-t border-white/5 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} NEON.GROW — כל הזכויות שמורות
      </footer>
    </div>
  )
}

export default App
