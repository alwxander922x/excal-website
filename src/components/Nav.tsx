import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { SERVICE_IDS, SVC, Lang } from "@/data/content"
import { ChevronDown } from "lucide-react"

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "ro", label: "RO" },
]

export function Nav() {
  const { lang, setLang, t } = useLanguage()
  const svc = SVC[lang]
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `nav-link text-sm font-semibold ${isActive ? "active text-accent" : "text-ink"}`

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center gap-x-7 gap-y-4 border-b-2 border-divider bg-bg px-5 py-3.5 sm:px-9 md:px-[72px]">
      <Link to="/" className="mr-auto flex items-center">
        <img src="/logo.png" alt="Excal Group" className="h-9" />
      </Link>
      <NavLink to="/" end className={linkCls}>{t.nav.home}</NavLink>
      <NavLink to="/about" className={linkCls}>{t.nav.about}</NavLink>
      <div className="relative" onMouseLeave={() => setOpen(false)}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="nav-link inline-flex items-center gap-1 text-sm font-semibold text-ink"
        >
          {t.nav.services}
          <ChevronDown size={13} strokeWidth={2.5} />
        </button>
        {open && (
          <div className="absolute left-0 top-full z-50 mt-0.5 min-w-[280px] border-2 border-divider bg-bg py-1.5 shadow-md">
            {SERVICE_IDS.map((id) => (
              <button
                key={id}
                onClick={() => { setOpen(false); navigate(`/services/${id}`) }}
                className="block w-full px-[18px] py-2.5 text-left text-sm text-ink hover:bg-surface hover:text-accent"
              >
                {svc[id].title}
              </button>
            ))}
          </div>
        )}
      </div>
      <NavLink to="/contact" className={linkCls}>{t.nav.contact}</NavLink>
      <div className="flex gap-1">
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`border border-divider px-2.5 py-1 font-heading text-xs font-extrabold ${
              l.code === lang ? "bg-accent text-bg" : "bg-transparent text-ink"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
