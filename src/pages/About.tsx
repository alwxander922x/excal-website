import { useNavigate } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder"

export function About() {
  const { t } = useLanguage()
  const navigate = useNavigate()

  return (
    <div>
      <section className="mx-auto max-w-[1200px] px-5 pb-10 pt-[72px] sm:px-9 md:px-[72px]">
        <h6 className="mb-2.5 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.nav.about}</h6>
        <h1 className="mb-5 font-heading text-4xl font-extrabold md:text-5xl">{t.about.title}</h1>
        <p className="m-0 max-w-[64ch] text-base leading-relaxed text-ink/80">{t.about.intro}</p>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-16 pt-2 sm:px-9 md:px-[72px]">
        {t.how.map((w, i) => (
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

      <Reveal as="section" className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 pb-[72px] pt-6 sm:px-9 md:grid-cols-[7fr_5fr] md:px-[72px]">
        <div>
          <h6 className="mb-2.5 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.labels.whatWeDoKicker}</h6>
          <h2 className="mb-4 font-heading text-[28px] font-extrabold">{t.labels.servicesTitle}</h2>
          <p className="mb-5 max-w-[56ch] text-[15.5px] leading-relaxed text-ink/80">{t.about.whatWeDo}</p>
          <Button variant="secondary" onClick={() => navigate("/")}>{t.nav.services}</Button>
        </div>
        <div className="grayscale contrast-[1.08]">
          <PhotoPlaceholder label={t.labels.photoPlaceholder} />
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
