import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { SERVICE_IDS, SVC } from "@/data/content"
import { ICONS } from "@/data/icons"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { Marquee } from "@/components/Marquee"
import { SEO } from "@/components/SEO"
import { Counter } from "@/components/Counter"
import { Globe } from "@/components/Globe"
import { Accordion } from "@/components/Accordion"
import { Testimonials } from "@/components/Testimonials"

export function Home() {
  const { lang, t } = useLanguage()
  const svc = SVC[lang]
  const navigate = useNavigate()

  return (
    <div>
      <SEO />
      <div className="relative overflow-hidden border-b-2 border-divider/40">
        {/* Aurora gradient background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ x: [0, 80, -40, 0], y: [0, -60, 80, 0], scale: [1, 1.2, 0.9, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[10%] top-[10%] -z-10 h-[450px] w-[450px] rounded-full bg-accent opacity-15 blur-[100px] mix-blend-multiply"
          />
          <motion.div
            animate={{ x: [0, -100, 60, 0], y: [0, 100, -60, 0], scale: [1, 0.9, 1.15, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[5%] bottom-[5%] -z-10 h-[550px] w-[550px] rounded-full bg-blue-400 opacity-[0.12] blur-[120px] mix-blend-multiply"
          />
          <motion.div
            animate={{ x: [0, 60, -80, 0], y: [0, -80, 60, 0], scale: [0.9, 1.1, 0.95, 0.9] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[40%] top-[30%] -z-10 h-[350px] w-[350px] rounded-full bg-purple-400 opacity-[0.12] blur-[100px] mix-blend-multiply"
          />
        </div>

        <section className="relative z-20 mx-auto max-w-[1200px] px-5 pb-14 pt-24 text-center sm:px-9 md:px-[72px] md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="m-0 font-heading text-[38px] font-extrabold leading-[1.06] tracking-tight sm:text-[52px] md:text-[72px]"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="block"
            >
              {t.hero.line1}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="block text-accent"
            >
              {t.hero.line2}
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="mx-auto mt-7 max-w-[56ch] text-lg leading-relaxed text-ink/80 md:mx-0"
          >
            {t.hero.subhead}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <Button onClick={() => navigate("/contact")}>{t.hero.ctaPrimary}</Button>
            <Button variant="secondary" onClick={() => navigate("/services/" + SERVICE_IDS[0])}>{t.hero.ctaSecondary}</Button>
          </motion.div>
        </section>
      </div>

      <Marquee />

      {/* Stats */}
      <section className="mx-auto max-w-[1200px] px-5 pb-4 pt-16 text-center sm:px-9 md:px-[72px] md:text-left">
        <Reveal>
          <h6 className="mb-8 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.stats.kicker}</h6>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t-2 border-divider pt-9 lg:grid-cols-4">
          {t.stats.items.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="mx-auto md:mx-0">
              <p className="m-0 font-heading text-[40px] font-extrabold leading-none text-accent md:text-[56px]">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="m-0 mx-auto mt-3 max-w-[18ch] text-[13.5px] leading-snug text-ink/70 md:mx-0">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Globe / global reach — dark, space-like in dark theme; clean and light in light theme */}
      <section className="relative overflow-hidden bg-bg transition-colors duration-300">
        <div className="absolute inset-y-0 right-0 w-full md:w-[62%]">
          <Globe />
        </div>
        <div className="relative mx-auto grid min-h-[560px] max-w-[1200px] grid-cols-1 items-center px-5 py-24 text-center sm:px-9 md:min-h-[680px] md:grid-cols-[6fr_5fr] md:px-[72px] md:text-left">
          <Reveal>
            <h6 className="mb-2.5 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.globe.kicker}</h6>
            <h2 className="mx-auto mb-5 max-w-[16ch] font-heading text-[32px] font-extrabold leading-[1.08] text-ink md:mx-0 md:text-[46px]">{t.globe.title}</h2>
            <p className="mx-auto max-w-[46ch] text-[15.5px] leading-relaxed text-ink/70 md:mx-0">{t.globe.body}</p>
            <div className="mt-8 flex justify-center md:justify-start">
              <Button onClick={() => navigate("/contact")}>{t.cta.button}</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16 text-center sm:px-9 md:px-[72px] md:text-left">
        <h6 className="mb-2.5 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.labels.servicesKicker}</h6>
        <h2 className="mb-9 font-heading text-[34px] font-extrabold">{t.labels.servicesTitle}</h2>
        <div className="grid grid-cols-1 gap-[2px] border-2 border-divider bg-divider sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_IDS.map((id) => {
            const Icon = ICONS[id]
            return (
              <Link
                key={id}
                to={`/services/${id}`}
                className="group flex flex-col items-center gap-3.5 bg-bg p-7 transition-colors hover:bg-surface md:items-start"
              >
                <motion.div whileHover={{ scale: 1.15, rotate: -4 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                  <Icon className="text-accent" size={28} strokeWidth={1.7} />
                </motion.div>
                <h3 className="m-0 text-lg font-bold">{svc[id].title}</h3>
                <p className="m-0 flex-1 text-sm leading-relaxed text-ink/75">{svc[id].summary}</p>
                <span className="inline-flex items-center gap-1 text-[13px] font-bold text-accent transition-transform group-hover:translate-x-1">
                  {t.labels.learnMore} <ArrowRight size={14} strokeWidth={2.2} />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-16 pt-6 text-center sm:px-9 md:px-[72px] md:text-left">
        <h2 className="mb-7 font-heading text-3xl font-extrabold">{t.labels.whyTitle}</h2>
        {t.why.map((w, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="grid grid-cols-1 items-center gap-2 border-t-2 border-divider py-6 md:grid-cols-[minmax(56px,90px)_1fr] md:items-baseline md:gap-6">
              <p className="m-0 font-heading text-sm font-extrabold text-accent">{String(i + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="mb-2 text-xl font-bold">{w.title}</h3>
                <p className="mx-auto max-w-[64ch] text-[15px] leading-relaxed text-ink/80 md:mx-0">{w.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal as="section" className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 pb-[72px] pt-10 sm:px-9 md:grid-cols-[5fr_7fr] md:px-[72px]">
        <div className="overflow-hidden shadow-xl rounded-sm">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            src="/company_photo.webp" 
            alt="Company Team" 
            className="w-full h-auto object-cover" 
          />
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h6 className="mb-2.5 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.labels.aboutKicker}</h6>
          <h2 className="mb-4 font-heading text-[28px] font-extrabold">{t.about.title}</h2>
          <p className="mb-5 max-w-[56ch] text-[15.5px] leading-relaxed text-ink/80">{t.about.intro}</p>
          <Button variant="secondary" onClick={() => navigate("/about")}>{t.labels.moreAboutUs}</Button>
        </div>
      </Reveal>

      {/* Testimonials */}
      <section className="border-y-2 border-divider bg-surface/40 px-5 py-20 text-center sm:px-9 md:px-[72px] md:text-left">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <h6 className="mb-2.5 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.testimonials.kicker}</h6>
            <h2 className="mx-auto mb-10 max-w-[24ch] font-heading text-[30px] font-extrabold leading-[1.12] md:mx-0 md:text-[42px]">{t.testimonials.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Testimonials items={t.testimonials.items} />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-20 text-center sm:px-9 md:grid-cols-[4fr_7fr] md:gap-16 md:px-[72px] md:text-left">
        <Reveal>
          <h6 className="mb-2.5 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.faq.kicker}</h6>
          <h2 className="mb-4 font-heading text-[30px] font-extrabold leading-[1.12] md:text-[38px]">{t.faq.title}</h2>
          <p className="mx-auto max-w-[38ch] text-[15px] leading-relaxed text-ink/70 md:mx-0">{t.faq.intro}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion items={t.faq.items} />
        </Reveal>
      </section>

      <section className="bg-accent px-5 py-14 text-bg sm:px-9 md:px-[72px]">
        <div className="mx-auto flex max-w-[1200px] flex-col flex-wrap items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <h2 className="m-0 max-w-[22ch] font-heading text-[26px] font-extrabold md:text-4xl">{t.cta.title}</h2>
          <Button variant="secondary" className="border-bg text-bg" onClick={() => navigate("/contact")}>{t.cta.button}</Button>
        </div>
      </section>
    </div>
  )
}
