import { Link } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/Reveal"
import { SEO } from "@/components/SEO"
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react"

export function Legal({ type }: { type: "terms" | "privacy" | "cookies" }) {
  const { t } = useLanguage()
  const doc = t.legal[type]

  const tabs: Array<{ id: "terms" | "privacy" | "cookies"; label: string }> = [
    { id: "terms", label: t.legalNav.terms },
    { id: "privacy", label: t.legalNav.privacy },
    { id: "cookies", label: t.legalNav.cookies },
  ]

  return (
    <section className="mx-auto max-w-[880px] px-5 pb-20 pt-[72px] sm:px-9 md:px-12">
      <SEO title={doc.title} url={`https://excal-group.com/${type}`} />

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap gap-2 pt-4">
        {tabs.map((tab) => {
          const isActive = tab.id === type
          return (
            <Link
              key={tab.id}
              to={`/${tab.id}`}
              className={`px-4 py-2 font-heading text-xs font-extrabold uppercase tracking-wider transition-colors ${
                isActive
                  ? "bg-accent text-bg"
                  : "border border-divider/60 text-ink/80 hover:border-accent hover:text-accent"
              }`}
            >
              {tab.label}
            </Link>
          )
        })}
      </div>

      {/* Compliance Badge */}
      <div className="mb-4 inline-flex items-center gap-1.5 border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-accent">
        <ShieldCheck className="h-3.5 w-3.5" />
        <span>GDPR (EU 2016/679) & RM Law No. 133/2011</span>
      </div>

      {/* Title & Metadata */}
      <h1 className="mb-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
        {doc.title}
      </h1>
      <p className="mb-6 font-mono text-xs uppercase tracking-wider text-ink/60">
        {doc.updated}
      </p>

      {/* Intro box */}
      <div className="mb-10 border-l-4 border-accent bg-accent/5 p-5 text-[15px] leading-relaxed text-ink/90">
        {doc.intro}
      </div>

      {/* Sections */}
      <div className="space-y-2">
        {doc.sections.map((sec, i) => (
          <Reveal key={i} delay={Math.min(i * 0.03, 0.25)}>
            <div className="border-t-2 border-divider py-6">
              <h2 className="mb-3 font-heading text-lg font-bold tracking-tight text-ink md:text-xl">
                {sec.h}
              </h2>
              <div className="whitespace-pre-line text-[14.5px] font-light leading-relaxed text-ink/85">
                {sec.body}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Official contact box */}
      <div className="mt-12 border-t-2 border-divider pt-8">
        <div className="border border-divider/60 bg-surface/50 p-6">
          <h3 className="mb-2 font-heading text-base font-extrabold uppercase tracking-wider text-ink">
            {t.contact.title} & Data Protection
          </h3>
          <p className="mb-4 text-xs leading-relaxed text-ink/70">
            Excal Group · Chișinău, Republic of Moldova
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="border border-divider/40 bg-bg p-3">
              <div className="mb-1 flex items-center gap-1.5 text-[11px] font-mono uppercase text-ink/60">
                <Mail className="h-3.5 w-3.5 text-accent" />
                <span>Email</span>
              </div>
              <a
                href="mailto:office@excal-group.com"
                className="font-heading text-xs font-bold text-ink hover:text-accent"
              >
                office@excal-group.com
              </a>
            </div>
            <div className="border border-divider/40 bg-bg p-3">
              <div className="mb-1 flex items-center gap-1.5 text-[11px] font-mono uppercase text-ink/60">
                <Phone className="h-3.5 w-3.5 text-accent" />
                <span>Phone</span>
              </div>
              <a
                href="tel:+37369180475"
                className="font-heading text-xs font-bold text-ink hover:text-accent"
              >
                +373 69 180 475
              </a>
            </div>
            <div className="border border-divider/40 bg-bg p-3">
              <div className="mb-1 flex items-center gap-1.5 text-[11px] font-mono uppercase text-ink/60">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                <span>Office</span>
              </div>
              <span className="font-heading text-xs font-bold text-ink">
                Chișinău, Moldova
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
