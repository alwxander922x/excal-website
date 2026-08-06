import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { SERVICE_IDS, SVC } from "@/data/content"
import { ICONS } from "@/data/icons"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { Marquee } from "@/components/Marquee"
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder"

export function Home() {
  const { lang, t } = useLanguage()
  const svc = SVC[lang]
  const navigate = useNavigate()

  return (
    <div>
      <section className="mx-auto max-w-[1200px] px-5 pb-14 pt-24 sm:px-9 md:px-[72px]">
        <motion.h1
          initial={{ opacity: 0.4, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="m-0 font-heading text-[38px] font-extrabold leading-[1.06] tracking-tight sm:text-[52px] md:text-[72px]"
        >
          <span className="block">{t.hero.line1}</span>
          <span className="block text-accent">{t.hero.line2}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.4, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="mt-7 max-w-[56ch] text-lg leading-relaxed text-ink/80"
        >
          {t.hero.subhead}
        </motion.p>
        <motion.div
          initial={{ opacity: 0.4, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Button onClick={() => navigate("/contact")}>{t.hero.ctaPrimary}</Button>
          <Button variant="secondary" onClick={() => navigate("/services/" + SERVICE_IDS[0])}>{t.hero.ctaSecondary}</Button>
        </motion.div>
      </section>

      <Marquee />

      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-9 md:px-[72px]">
        <h6 className="mb-2.5 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.labels.servicesKicker}</h6>
        <h2 className="mb-9 font-heading text-[34px] font-extrabold">{t.labels.servicesTitle}</h2>
        <div className="grid grid-cols-1 gap-[2px] border-2 border-divider bg-divider sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_IDS.map((id) => {
            const Icon = ICONS[id]
            return (
              <Link
                key={id}
                to={`/services/${id}`}
                className="group flex flex-col gap-3.5 bg-bg p-7 transition-colors hover:bg-surface"
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

      <section className="mx-auto max-w-[1200px] px-5 pb-16 pt-6 sm:px-9 md:px-[72px]">
        <h2 className="mb-7 font-heading text-3xl font-extrabold">{t.labels.whyTitle}</h2>
        {t.why.map((w, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="grid grid-cols-[minmax(56px,90px)_1fr] items-baseline gap-6 border-t-2 border-divider py-6">
              <p className="m-0 font-heading text-sm font-extrabold text-accent">{String(i + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="mb-2 text-xl font-bold">{w.title}</h3>
                <p className="m-0 max-w-[64ch] text-[15px] leading-relaxed text-ink/80">{w.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal as="section" className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 pb-[72px] pt-10 sm:px-9 md:grid-cols-[5fr_7fr] md:px-[72px]">
        <div className="grayscale contrast-[1.08]">
          <PhotoPlaceholder label={t.labels.photoPlaceholder} />
        </div>
        <div>
          <h6 className="mb-2.5 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.labels.aboutKicker}</h6>
          <h2 className="mb-4 font-heading text-[28px] font-extrabold">{t.about.title}</h2>
          <p className="mb-5 max-w-[56ch] text-[15.5px] leading-relaxed text-ink/80">{t.about.intro}</p>
          <Button variant="secondary" onClick={() => navigate("/about")}>{t.labels.moreAboutUs}</Button>
        </div>
      </Reveal>

      <section className="bg-accent px-5 py-14 text-bg sm:px-9 md:px-[72px]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6">
          <h2 className="m-0 max-w-[22ch] font-heading text-[26px] font-extrabold md:text-4xl">{t.cta.title}</h2>
          <Button variant="secondary" className="border-bg text-bg" onClick={() => navigate("/contact")}>{t.cta.button}</Button>
        </div>
      </section>
    </div>
  )
}
