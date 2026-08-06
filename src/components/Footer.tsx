import { Link } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { SERVICE_IDS, SVC } from "@/data/content"

export function Footer() {
  const { lang, t } = useLanguage()
  const svc = SVC[lang]
  const year = new Date().getFullYear()

  return (
    <footer className="mt-6 border-t-2 border-divider">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-5 py-14 sm:px-9 md:grid-cols-4 md:px-[72px]">
        <div>
          <img src="/logo.png" alt="Excal Group" className="mb-3.5 h-8" />
          <p className="max-w-[30ch] text-[13.5px] leading-relaxed text-ink/70">{t.footer.blurb}</p>
        </div>
        <div>
          <h6 className="mb-3 text-[13px] font-extrabold uppercase tracking-wider">{t.footer.servicesLabel}</h6>
          {SERVICE_IDS.map((id) => (
            <Link key={id} to={`/services/${id}`} className="block py-1 text-[13.5px] text-ink/80 hover:text-accent">
              {svc[id].title}
            </Link>
          ))}
        </div>
        <div>
          <h6 className="mb-3 text-[13px] font-extrabold uppercase tracking-wider">{t.footer.quickLinks}</h6>
          <Link to="/" className="block py-1 text-[13.5px] text-ink/80 hover:text-accent">{t.nav.home}</Link>
          <Link to="/about" className="block py-1 text-[13.5px] text-ink/80 hover:text-accent">{t.nav.about}</Link>
          <Link to="/contact" className="block py-1 text-[13.5px] text-ink/80 hover:text-accent">{t.nav.contact}</Link>
        </div>
        <div>
          <h6 className="mb-3 text-[13px] font-extrabold uppercase tracking-wider">{t.footer.legalLabel}</h6>
          <Link to="/terms" className="block py-1 text-[13.5px] text-ink/80 hover:text-accent">{t.legalNav.terms}</Link>
          <Link to="/privacy" className="block py-1 text-[13.5px] text-ink/80 hover:text-accent">{t.legalNav.privacy}</Link>
          <Link to="/cookies" className="block py-1 text-[13.5px] text-ink/80 hover:text-accent">{t.legalNav.cookies}</Link>
        </div>
      </div>
      <div className="border-t-2 border-divider">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-2 px-5 py-[18px] text-xs text-ink/60 sm:px-9 md:px-[72px]">
          <span>© {year} Excal Group. {t.footer.rights}</span>
          <span>office@excal-group.com — +373 69 180 475</span>
        </div>
      </div>
    </footer>
  )
}
