import { useParams, Link, Navigate, useNavigate } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { SERVICE_IDS, SVC, ServiceId } from "@/data/content"
import { ICONS } from "@/data/icons"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { Check, ArrowRight } from "lucide-react"
import { SEO } from "@/components/SEO"

export function Service() {
  const { id } = useParams<{ id: string }>()
  const { lang, t } = useLanguage()
  const navigate = useNavigate()

  if (!id || !SERVICE_IDS.includes(id as ServiceId)) return <Navigate to="/" replace />

  const svc = SVC[lang]
  const current = svc[id as ServiceId]
  const Icon = ICONS[id as ServiceId]
  const others = SERVICE_IDS.filter((s) => s !== id)

  return (
    <div>
      <SEO
        title={current.title}
        description={current.summary}
        url={`https://excal-group.com/services/${id}`}
      />
      <section className="mx-auto max-w-[1200px] px-5 pb-10 pt-[72px] sm:px-9 md:px-[72px]">
        <p className="mb-5 text-[13px] text-ink/60">
          <Link to="/" className="text-inherit hover:text-accent">{t.nav.home}</Link> / {t.nav.services} / <span className="text-ink">{current.title}</span>
        </p>
        <div className="mb-5 flex items-center gap-4">
          <Icon className="text-accent" size={36} strokeWidth={1.6} />
          <h1 className="m-0 font-heading text-[28px] font-extrabold md:text-[44px]">{current.title}</h1>
        </div>
        <p className="mb-8 max-w-[64ch] text-[17px] leading-relaxed text-ink/80">{current.summary}</p>
      </section>

      <Reveal as="section" className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 pb-14 sm:px-9 md:grid-cols-[4fr_8fr] md:px-[72px]">
        <div>
          <h6 className="mb-3.5 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.labels.capabilitiesKicker}</h6>
          {current.bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-2.5 border-t border-divider py-2.5">
              <Check className="mt-0.5 flex-none text-accent" size={16} strokeWidth={2.4} />
              <span className="text-[14.5px]">{b}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="mb-[18px] text-[15.5px] leading-relaxed text-ink/80">{current.body1}</p>
          <p className="m-0 text-[15.5px] leading-relaxed text-ink/80">{current.body2}</p>
        </div>
      </Reveal>

      <section className="mx-auto max-w-[1200px] border-t-2 border-divider px-5 pb-16 pt-4 sm:px-9 md:px-[72px]">
        <h6 className="my-6 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.labels.otherServicesKicker}</h6>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((oid) => {
            const OtherIcon = ICONS[oid]
            return (
              <Link
                key={oid}
                to={`/services/${oid}`}
                className="group flex flex-col items-start gap-4 border-2 border-divider bg-bg px-6 py-5 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <div className="rounded-full bg-surface p-3 text-accent transition-transform group-hover:scale-110">
                  <OtherIcon size={24} strokeWidth={1.8} />
                </div>
                <span className="text-[16px] font-bold text-ink group-hover:text-accent">
                  {svc[oid].title}
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-bold text-accent opacity-80 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                  {t.labels.learnMore} <ArrowRight size={14} strokeWidth={2.2} />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-accent px-5 py-14 text-bg sm:px-9 md:px-[72px]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6">
          <h2 className="m-0 max-w-[22ch] font-heading text-[26px] font-extrabold md:text-4xl">{t.cta.title}</h2>
          <Button variant="secondary" className="border-bg text-bg" onClick={() => navigate("/contact")}>{t.cta.button}</Button>
        </div>
      </section>
    </div>
  )
}
