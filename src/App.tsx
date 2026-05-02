import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HeroDemo } from '@/components/ui/demo'
import {
  Mail,
  Link,
  BookOpen,
  GraduationCap,
  FlaskConical,
  Presentation,
  Award,
  Rss,
  Phone,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react'

/* ─── helpers ─────────────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-12">
      <h2 className="inline-block text-3xl sm:text-4xl font-bold text-slate-800 relative pb-4">
        {children}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-maroon-600 to-gold-500 rounded-full" />
      </h2>
    </div>
  )
}

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Header ──────────────────────────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  const navItems = ['home', 'profile', 'research', 'teaching', 'certifications', 'blog', 'contact']

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      let current = 'home'
      navItems.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-maroon-950/90 backdrop-blur-md shadow-lg' : ''
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <button onClick={() => scrollTo('home')} className="text-2xl font-bold text-white">
          Rajat Goyal
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`capitalize text-slate-200 hover:text-white border-b-2 transition duration-300 ${
                active === id ? 'border-white' : 'border-transparent'
              }`}
            >
              {id}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-maroon-950/95 z-40 flex flex-col items-center justify-center space-y-6 text-2xl"
        >
          {navItems.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="capitalize text-slate-200 hover:text-white"
            >
              {id}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  )
}

/* ─── Profile Section ────────────────────── */

const educationItems = [
  {
    degree: 'Doctor of Philosophy (Ph.D.)',
    period: '2019 – 2025',
    institution: 'Industrial Engineering – Indian Institute of Technology Delhi',
  },
  {
    degree: 'Master of Technology (M.Tech)',
    period: '2017 – 2019',
    institution: 'Industrial and Production Engineering – National Institute of Technology, Kurukshetra',
  },
  {
    degree: 'Bachelor of Technology (B.Tech)',
    period: '2012 – 2016',
    institution: 'Mechanical Engineering – Maharishi Markandeshwar Engineering College, MMDU Mullana',
  },
]

const profileImages = [
  {
    src: 'https://raw.githubusercontent.com/rajatgoel03/MyWebpage/main/upes.jpg',
    alt: 'UPES Dehradun',
  },
  {
    src: 'https://raw.githubusercontent.com/rajatgoel03/MyWebpage/main/iima.jpg',
    alt: 'IIM Ahmedabad',
  },
  {
    src: '/Images/logos/With Gurus.jpg',
    alt: 'With Gurus',
  },
  {
    src: 'https://raw.githubusercontent.com/rajatgoel03/MyWebpage/main/iitd.jpg',
    alt: 'IIT Delhi',
  },
  {
    src: 'https://raw.githubusercontent.com/rajatgoel03/MyWebpage/main/Class%2019-23.jpg',
    alt: 'Class of 19-23',
  },
  {
    src: '/Images/logos/SCM class.jpg',
    alt: 'SCM Class',
  },
]

const featureQuickFacts = [
  { icon: '🎓', label: 'IIT Delhi Ph.D.' },
  { icon: '🏫', label: 'UPES Faculty' },
  { icon: '📚', label: '3+ Publications' },
  { icon: '🌏', label: "Int'l Researcher" },
]

function ProfileFeatureCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="w-full mb-12 rounded-2xl overflow-hidden shadow-xl"
      style={{
        background: 'linear-gradient(135deg, #4b1d1d 0%, #1e293b 60%, #0f172a 100%)',
      }}
    >
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-[-6px] rounded-full bg-gradient-to-tr from-maroon-500 to-gold-500/60 opacity-70 blur-sm" />
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-maroon-400 shadow-lg">
            <img
              src="https://raw.githubusercontent.com/rajatgoel03/MyWebpage/main/Avatar.png"
              alt="Rajat Goyal"
              className="w-full h-full object-cover"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                  'https://placehold.co/100x100/8a3d3d/fff?text=RG'
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 text-center sm:text-left">
          <p className="text-xs font-semibold tracking-widest uppercase text-maroon-300 mb-1">
            Operations &amp; Supply Chain
          </p>
          <h3 className="text-xl font-bold text-white mb-1">Rajat Goyal</h3>
          <p className="text-slate-300 text-sm italic leading-relaxed max-w-lg">
            "Bridging operations science and public governance through data-driven innovation —
            building systems that serve billions."
          </p>
        </div>

        {/* Quick-fact chips */}
        <div className="flex sm:flex-col gap-2 flex-wrap justify-center">
          {featureQuickFacts.map((f) => (
            <span
              key={f.label}
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-slate-200 whitespace-nowrap"
            >
              <span>{f.icon}</span>
              {f.label}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ProfileSection() {
  return (
    <section id="profile" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading>Profile Summary</SectionHeading>
        </FadeIn>

        {/* Feature bento card */}
        <ProfileFeatureCard />

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left – bio + education */}
          <FadeIn delay={0.1} className="lg:w-3/5">
            <h3 className="text-2xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-maroon-600" /> About Me
            </h3>
            <p className="mb-4 text-slate-600 leading-relaxed">
              I am an Assistant Professor in Operations at UPES Dehradun with a deep interest in
              Operations Management and Operations Research. My doctoral research at IIT Delhi
              focused on developing a Decision Support System (DSS) to strengthen district
              administration in India. This work involved creating data-driven tools to improve
              efficiency in meeting management, compliance tracking, and law and order.
            </p>
            <p className="text-slate-600 leading-relaxed">
              My goal is to contribute to impactful governance reforms that align with the national
              vision of Viksit Bharat 2047 through technological innovation and robust policy
              support.
            </p>

            <h3 className="text-2xl font-semibold text-slate-700 mt-10 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-maroon-600" /> Education
            </h3>

            <div className="relative border-l-4 border-maroon-200">
              {educationItems.map((item, i) => (
                <FadeIn key={i} delay={0.15 * (i + 1)}>
                  <div className="mb-8 ml-6 group">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-maroon-100 rounded-full -left-4 ring-8 ring-slate-50">
                      <GraduationCap className="w-4 h-4 text-maroon-700" />
                    </span>
                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm ml-4 transition-all duration-300 hover:border-maroon-400 hover:shadow-md hover:-translate-y-0.5">
                      <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                        <h4 className="font-bold text-slate-800">{item.degree}</h4>
                        <time className="text-sm text-slate-500">{item.period}</time>
                      </div>
                      <p className="text-slate-600 text-sm">{item.institution}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Right – photo mosaic */}
          <FadeIn delay={0.3} className="lg:w-2/5 w-full">
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-3">
                {profileImages.slice(0, 3).map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-xl shadow-md">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-auto w-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src =
                          'https://placehold.co/400x400/E2E8F0/4A5568?text=Image'
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="grid gap-3 mt-6">
                {profileImages.slice(3).map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-xl shadow-md">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-auto w-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src =
                          'https://placehold.co/400x400/E2E8F0/4A5568?text=Image'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─── Research Section ───────────────────── */

const researchAreas = [
  'Operations Management',
  'Operations Research',
  'Supply Chain Management',
  'Public System Modelling',
]

const publications = [
  {
    href: 'https://doi.org/10.1016/j.seps.2026.102461',
    title:
      'Navigating barriers to GenAI adoption in public administration: A systematic evaluation and policy roadmap',
    authors: 'Goyal, R., Deshmukh, S. G., & Bolia, N. (2026).',
    journal: 'Socio-Economic Planning Sciences, Volume 105, 102461. ISSN 0038-0121.',
  },
  {
    href: 'https://doi.org/10.1108/JAMR-01-2025-0040',
    title:
      'Impact of decision support systems on public administration: A systematic literature review and future research agenda',
    authors: 'Goyal, R., Deshmukh, S. G., & Bolia, N. (2025).',
    journal: 'Journal of Advances in Management Research. Emerald Publishing.',
  },
  {
    href: 'https://doi.org/10.1177/00195561251406778',
    title:
      'Decision Support System for Strengthening District Administration in India: A Study of the Current Situation and Future Prospects',
    authors: 'Goyal, R., Deshmukh, S. G., & Bolia, N. (2025).',
    journal: 'Indian Journal of Public Administration (Published)',
  },
]

const conferences = [
  {
    href: 'https://doi.org/10.46254/SA6.20250112',
    title:
      'A Structured Framework for Decision Support System Implementation: A Case of Digital Transformation for District Administration in India',
    authors: 'Goyal, R., Deshmukh, S., & Bolia, N. (2025, May)',
    venue: '6th South American Conference on Industrial Engineering and Operations Management',
  },
  {
    href: null,
    title: 'Decision support system for District Magistrate',
    authors: 'Goyal, R., Deshmukh, S. G., & Bolia, N. (July 2024)',
    venue: 'EURO 24, DTU Copenhagen, Denmark',
  },
]

const researchProfiles = [
  {
    href: 'https://scholar.google.com/citations?user=qa3dVBQAAAAJ&hl=en',
    src: '/Images/logos/google_scholar_icon_130918.png',
    alt: 'Google Scholar',
  },
  {
    href: 'https://www.researchgate.net/profile/Rajat-Goyal-12',
    src: '/Images/logos/ResearchGate_icon_SVG.svg.png',
    alt: 'ResearchGate',
  },
  {
    href: 'https://www.webofscience.com/wos/author/record/HHC-4898-2022',
    src: '/Images/logos/wos.png',
    alt: 'Web of Science',
  },
  {
    href: 'https://orcid.org/0000-0002-5470-9029',
    src: '/Images/logos/ORCID_iD.svg.png',
    alt: 'ORCID',
  },
]

function PublicationCard({
  href,
  title,
  authors,
  secondary,
}: {
  href: string | null
  title: string
  authors: string
  secondary: string
}) {
  return (
    <div className="p-5 bg-slate-50 rounded-xl shadow-sm border-2 border-transparent hover:border-maroon-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      <h4 className="font-bold text-slate-800 mb-1">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-maroon-700 hover:underline inline-flex items-start gap-1"
          >
            {title} <ExternalLink className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-70" />
          </a>
        ) : (
          title
        )}
      </h4>
      <p className="text-slate-600 text-sm">{authors}</p>
      <p className="italic text-slate-500 text-sm">{secondary}</p>
    </div>
  )
}

function ResearchSection() {
  return (
    <section id="research" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading>Research</SectionHeading>
        </FadeIn>

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Areas */}
          <FadeIn delay={0.1}>
            <h3 className="text-2xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-maroon-600" /> Areas of Interest
            </h3>
            <div className="flex flex-wrap gap-3">
              {researchAreas.map((area) => (
                <span
                  key={area}
                  className="bg-maroon-100 text-maroon-800 text-sm font-medium px-4 py-1.5 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Researcher Profiles */}
          <FadeIn delay={0.15}>
            <h3 className="text-2xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-maroon-600" /> Researcher Profiles
            </h3>
            <div className="flex items-center gap-6 flex-wrap">
              {researchProfiles.map((p) => (
                <a
                  key={p.alt}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={p.alt}
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <img src={p.src} alt={`${p.alt} Logo`} className="h-8 object-contain" />
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Publications */}
          <FadeIn delay={0.2}>
            <h3 className="text-2xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-maroon-600" /> Publications
            </h3>
            <div className="space-y-4">
              {publications.map((pub, i) => (
                <PublicationCard
                  key={i}
                  href={pub.href}
                  title={pub.title}
                  authors={pub.authors}
                  secondary={pub.journal}
                />
              ))}
            </div>
          </FadeIn>

          {/* Conferences */}
          <FadeIn delay={0.25}>
            <h3 className="text-2xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Presentation className="w-5 h-5 text-maroon-600" /> Conference Presentations
            </h3>
            <div className="space-y-4">
              {conferences.map((conf, i) => (
                <PublicationCard
                  key={i}
                  href={conf.href}
                  title={conf.title}
                  authors={conf.authors}
                  secondary={conf.venue}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─── Teaching Section ───────────────────── */

const upesCourses = [
  { name: 'Operations Management', detail: 'MBA (Semester 1) & BBA (Semester 2)' },
  { name: 'Business Optimization', detail: 'MBA (Semester 3)' },
  { name: 'Service Operation Management', detail: 'BBA (Semester 4)' },
  { name: 'Operations Management (International)', detail: 'MBA Batch, Guyana' },
  { name: 'Project Management', detail: 'BBA (Semester 4)' },
]

const iitdCourses = [
  {
    name: 'Supply Chain Management (MCL756)',
    detail: 'Assisted in course delivery, case studies, grading, and student mentorship (2022–2024).',
  },
  {
    name: 'Operations Research (MCL765)',
    detail: 'Assisted in course delivery, grading, and student support (2021–2022).',
  },
]

function CourseCard({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="bg-slate-50 p-4 rounded-xl border-2 border-transparent hover:border-maroon-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      <h4 className="font-bold text-slate-800">{name}</h4>
      <p className="text-slate-600 text-sm">{detail}</p>
    </div>
  )
}

function TeachingSection() {
  return (
    <section id="teaching" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading>Teaching</SectionHeading>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <p className="text-center text-lg text-slate-600 mb-10">
              I am passionate about mentoring students and fostering a deep understanding of
              operations and supply chain principles.
            </p>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.15}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-slate-700 mb-6 border-b pb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-maroon-600" /> Courses Taught at UPES
                  Dehradun
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {upesCourses.map((c, i) => (
                    <CourseCard key={i} {...c} />
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-slate-700 mb-6 border-b pb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-maroon-600" /> Teaching Assistantship at
                  IIT Delhi
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {iitdCourses.map((c, i) => (
                    <CourseCard key={i} {...c} />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Certifications Section ──────────────── */

const globalCerts = [
  {
    title: 'Data-Driven Supply Chain Transformation (2024)',
    desc: 'Global online certification by IIM Mumbai (PM Gati Shakti Scheme) with Prof. David Simchi-Levi (MIT).',
  },
  {
    title: 'Reinventing Business Operations with Data Analytics (2023)',
    desc: 'Global certification by IIM Mumbai (PM Gati Shakti Scheme) with Prof. David Simchi-Levi (MIT).',
  },
]

const fdps = [
  {
    title: 'Nurturing Future Leadership Programme (NFLP)',
    desc: 'Five-Day Residential Programme hosted by IIM Bodh Gaya, supported by Ministry of Education under the Malaviya Mission (Jan 19-23, 2026).',
  },
  {
    title: 'Workshop on Advanced Teaching and Research Methods for Transportation and Logistics',
    desc: 'Month-long Online FDP by Centre for Transportation and Logistics, IIM Ahmedabad (Sep 2025)',
  },
  {
    title: 'AI for Teaching and Learning',
    desc: 'Two-week FDP by E&ICT Academy, IIT Guwahati (Aug 2025).',
  },
  {
    title: 'IndoML 2022',
    desc: '3rd Indian Symposium on Machine Learning at IIT Gandhinagar (Dec 2022).',
  },
  {
    title: 'FDP Chair Professor Workshop',
    desc: '2-day faculty development program at IIT Delhi (July 2022).',
  },
  {
    title: 'Large-Scale Optimization',
    desc: 'Summer School at IIM Ahmedabad (May 2022).',
  },
]

function CertCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-slate-50 p-4 rounded-xl flex items-start gap-3 border-2 border-transparent hover:border-maroon-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      <span className="text-maroon-600 mt-0.5 shrink-0">
        <Award className="w-4 h-4" />
      </span>
      <div>
        <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  )
}

function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading>Certifications &amp; FDPs</SectionHeading>
        </FadeIn>

        <div className="max-w-4xl mx-auto space-y-8">
          <FadeIn delay={0.1}>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-700 mb-5 border-b pb-4">
                Global Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {globalCerts.map((c, i) => (
                  <CertCard key={i} {...c} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-700 mb-5 border-b pb-4">
                Workshops &amp; FDPs
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {fdps.map((c, i) => (
                  <CertCard key={i} {...c} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─── Blog Section ───────────────────────── */

const blogPosts = [
  {
    img: 'https://raw.githubusercontent.com/rajatgoel03/MyWebpage/main/public/articles/Future%20of%20supplchain.jpg',
    alt: 'Future of Supply Chain',
    title: 'The Future of Supply Chains',
    excerpt:
      'A look at the emerging trends shaping the future of global supply chains in response to geopolitical and technological shifts.',
    href: 'articles/article-1.html',
  },
  {
    img: 'https://raw.githubusercontent.com/rajatgoel03/MyWebpage/main/public/articles/scm.jpg',
    alt: 'Supply Chain Management',
    title: 'Why Supply Chain Management has Drawn Attention Post-Covid',
    excerpt:
      'At the outset of Covid-19, when trade and travel were restricted due to lockdowns, demand spiked sharply for some goods while dropping dramatically for others...',
    href: 'articles/article-2.html',
  },
  {
    img: 'https://raw.githubusercontent.com/rajatgoel03/MyWebpage/main/public/articles/it.jpg',
    alt: 'IT in Supply Chain',
    title: 'Role of IT in Mitigating the Bullwhip Effect',
    excerpt:
      'When distorted information is transmitted up the supply chain, the cost from fluctuations can outweigh the cost of holding inventory...',
    href: 'articles/article-3.html',
  },
]

function BlogSection() {
  return (
    <section id="blog" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading>Blog</SectionHeading>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-center text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
            Thoughts and articles on Operations Management, Supply Chain Management, Public Policy,
            and the intersection of technology and governance.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group border-2 border-transparent hover:border-maroon-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="overflow-hidden h-44">
                  <img
                    src={post.img}
                    alt={post.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src =
                        'https://placehold.co/600x400/A3BFFA/FFFFFF?text=Article'
                    }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-slate-800 mb-2 flex items-start gap-1">
                    <Rss className="w-4 h-4 text-maroon-500 mt-0.5 shrink-0" />
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">{post.excerpt}</p>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-maroon-700 hover:underline font-semibold mt-auto inline-flex items-center gap-1"
                  >
                    Read More <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Section ────────────────────── */

function ContactSection() {
  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading>Get In Touch</SectionHeading>
        </FadeIn>

        <FadeIn delay={0.1} className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-slate-100">
            <p className="text-lg font-semibold text-slate-800 mb-1">Rajat Goyal</p>
            <p className="text-slate-500 mb-6">Assistant Professor (Operations), UPES Dehradun</p>

            <div className="space-y-3 text-slate-700">
              <button
                onClick={() => handleEmailClick('rajat.goyal@ddn.upes.ac.in')}
                className="flex items-center justify-center gap-2 w-full p-3 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Mail className="w-5 h-5 text-maroon-600 shrink-0" />
                <span className="text-sm group-hover:text-maroon-700">
                  <span className="font-semibold">Official:</span>{' '}
                  rajat.goyal [at] ddn [dot] upes [dot] ac [dot] in
                </span>
              </button>

              <button
                onClick={() => handleEmailClick('rajatiitd@gmail.com')}
                className="flex items-center justify-center gap-2 w-full p-3 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Mail className="w-5 h-5 text-maroon-600 shrink-0" />
                <span className="text-sm group-hover:text-maroon-700">
                  <span className="font-semibold">Personal:</span> rajatiitd [at] gmail [dot] com
                </span>
              </button>
            </div>

            <div className="flex justify-center mt-6 gap-4">
              <a
                href="https://www.linkedin.com/in/rajatiitd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#0a66c2] hover:opacity-80 transition-opacity"
              >
                <Link className="w-10 h-10" />
              </a>
              <a
                href="mailto:rajat.goyal@ddn.upes.ac.in"
                aria-label="Email"
                className="text-maroon-600 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-10 h-10" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── Footer ──────────────────────────────── */

function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-maroon-950 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <h3 className="text-lg font-bold">Rajat Goyal</h3>
            <p className="text-slate-400 text-sm">
              Operations Management &amp; Supply Chain Researcher
            </p>
          </div>
          <div className="flex space-x-6">
            {['profile', 'research', 'blog', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="capitalize text-slate-300 hover:text-white transition duration-300 text-sm"
              >
                {id}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-6 text-center text-slate-500 text-sm">
          <p>&copy; 2025 Rajat Goyal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ──────────────────────────────────── */

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <Header />
      <main>
        <HeroDemo />
        <ProfileSection />
        <ResearchSection />
        <TeachingSection />
        <CertificationsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
