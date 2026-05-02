import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

const AVATAR_URL = 'https://raw.githubusercontent.com/rajatgoel03/MyWebpage/main/Avatar.png'
const SCENE_URL = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

const researchAreas = [
  'Operations Management',
  'Operations Research',
  'Supply Chain Management',
  'Public System Modelling',
  'Decision Support Systems',
  'GenAI in Governance',
]

const stats = [
  { value: '3+', label: 'Publications' },
  { value: '5+', label: 'Courses' },
  { value: '6 Yrs', label: 'Research' },
  { value: 'IIT', label: 'Delhi Ph.D.' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.25, 0.46, 0.45, 0.94] } },
}

/**
 * HeroDemo – full-screen portfolio hero.
 * Left: personal photo + bio + stats + CTAs.
 * Right: interactive Spline 3D scene.
 */
export function HeroDemo() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#110506' }}
    >
      {/* ── Mesh background ─────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a84747' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-2-26V0h-2v8h-4v2h4v4h2v-4h4V8h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Spotlights ──────────────────────────────── */}
      <Spotlight uid="hero-l" className="-top-40 -left-10 md:left-20 md:-top-20" fill="#c96262" />
      <Spotlight uid="hero-r" className="top-0 right-0 md:right-10" fill="rgba(255,255,255,0.55)" />

      {/* ── Ambient glow blobs ──────────────────────── */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-80 h-80 bg-maroon-900/35 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-maroon-800/20 rounded-full blur-[60px] pointer-events-none" />

      {/* ── Bottom fade-out ──────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#110506] to-transparent pointer-events-none" />

      {/* ── Main layout ─────────────────────────────── */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-4">

        {/* ────────── LEFT: profile content ────────── */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl mx-auto lg:mx-0"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Role badge */}
          <motion.div variants={item} className="mb-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-maroon-300 border border-maroon-700/60 rounded-full px-4 py-1.5 bg-maroon-950/70 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-maroon-400 animate-pulse" />
              Professor · Researcher · Innovator
            </span>
          </motion.div>

          {/* ── Avatar with animated rings ── */}
          <motion.div variants={item} className="relative mb-7 flex-shrink-0">
            {/* Outer glow pulse */}
            <div className="absolute inset-[-18px] rounded-full bg-gradient-to-tr from-maroon-700/50 to-gold-500/15 blur-2xl" />
            {/* Spinning dashed ring */}
            <div
              className="absolute inset-[-13px] rounded-full border-2 border-dashed border-maroon-600/40"
              style={{ animation: 'spin 26s linear infinite' }}
            />
            {/* Gradient ring border */}
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-maroon-600 via-maroon-500 to-gold-500/80" />
            {/* Photo */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <img
                src={AVATAR_URL}
                alt="Rajat Goyal"
                className="w-full h-full object-cover"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src =
                    'https://placehold.co/160x160/8a3d3d/fff?text=RG'
                }}
              />
            </div>
            {/* IIT Delhi badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-2 -right-2 bg-gradient-to-br from-maroon-700 to-maroon-900 border border-maroon-500/70 rounded-full px-2.5 py-1 text-[10px] text-maroon-100 font-bold whitespace-nowrap shadow-lg"
            >
              IIT Delhi
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl font-bold tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-neutral-400"
          >
            Rajat Goyal
          </motion.h1>

          {/* Sub-title */}
          <motion.p variants={item} className="text-maroon-300 font-medium text-sm sm:text-base mb-4">
            Assistant Professor (Operations) &middot; UPES Dehradun
          </motion.p>

          {/* Bio */}
          <motion.p variants={item} className="text-neutral-400 text-sm leading-relaxed max-w-md mb-5">
            Passionate researcher focused on data-driven decision support systems for public
            administration and governance. Committed to{' '}
            <span className="text-maroon-300 font-medium">Viksit Bharat 2047</span> through
            technology, operations excellence, and policy innovation.
          </motion.p>

          {/* Research area pills */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-1.5 justify-center lg:justify-start mb-6"
          >
            {researchAreas.map((area, i) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.82 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 + i * 0.07, duration: 0.35 }}
                className="text-xs font-medium px-3 py-1 rounded-full bg-maroon-950/80 border border-maroon-700/50 text-maroon-200 backdrop-blur-sm"
              >
                {area}
              </motion.span>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="grid grid-cols-4 gap-3 mb-8 w-full max-w-xs mx-auto lg:mx-0"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:items-start">
                <span className="text-xl font-bold text-white leading-none">{s.value}</span>
                <span className="text-[11px] text-neutral-500 mt-0.5 leading-tight">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="flex gap-3 flex-wrap justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollTo('research')}
              className="bg-maroon-700 hover:bg-maroon-600 active:bg-maroon-800 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-maroon-900/60 text-sm"
            >
              Explore Research
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="border border-maroon-600/60 text-maroon-200 hover:bg-maroon-900/60 font-semibold px-6 py-2.5 rounded-full transition-all duration-200 text-sm backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        {/* ────────── RIGHT: Spline 3D scene ────────── */}
        <motion.div
          className="flex-1 relative w-full h-[360px] sm:h-[480px] lg:h-[620px]"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.45, ease: 'easeOut' }}
        >
          {/* Soft edge glow overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-maroon-950/30 via-transparent to-maroon-950/20 pointer-events-none z-10" />
          <SplineScene scene={SCENE_URL} className="w-full h-full" />
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────── */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/35"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-semibold">Scroll</span>
        <motion.svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.div>
    </section>
  )
}

// backward-compat alias kept so any existing import of SplineSceneBasic still works
export { HeroDemo as SplineSceneBasic }
