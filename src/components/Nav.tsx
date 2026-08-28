import { useState } from "react"
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { useTheme } from "@/context/ThemeContext"
import { SERVICE_IDS, SVC, Lang } from "@/data/content"
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react"

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ro", label: "RO" },
]

export function Nav() {
  const { lang, setLang, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const svc = SVC[lang]
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `nav-link text-sm font-semibold ${isActive ? "active text-accent" : "text-ink"}`

  const mobileLinkCls = ({ isActive }: { isActive: boolean }) =>
    `block py-3 text-center text-base font-semibold ${isActive ? "text-accent" : "text-ink"}`

  const closeMobile = () => { setMobileOpen(false); setMobileServicesOpen(false) }

  // Always returns to the homepage top — even when already on "/" scrolled down,
  // where a plain <Link> click wouldn't trigger App's route-change scroll reset.
  const goHome = (e: React.MouseEvent) => {
    e.preventDefault()
    closeMobile()
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate("/")
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-divider bg-bg px-5 py-3.5 sm:px-9 md:px-[72px]">
      <div className="relative flex items-center gap-x-7">
        <Link
          to="/"
          onClick={goHome}
          className="flex items-center max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 md:mr-auto"
        >
          <img src="/logo.png" alt="Excal Group" className="h-12 dark:invert" />
        </Link>

        {/* Desktop nav — unchanged */}
        <div className="hidden items-center gap-x-7 md:flex">
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
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex items-center justify-center border border-divider p-1.5 text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {theme === "dark" ? <Sun size={15} strokeWidth={2.2} /> : <Moon size={15} strokeWidth={2.2} />}
          </button>
        </div>

        {/* Mobile burger toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="inline-flex items-center justify-center border border-divider p-2 text-ink max-md:ml-auto md:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="mt-3.5 border-t-2 border-divider pt-2 md:hidden">
          <NavLink to="/" end className={mobileLinkCls} onClick={closeMobile}>{t.nav.home}</NavLink>
          <NavLink to="/about" className={mobileLinkCls} onClick={closeMobile}>{t.nav.about}</NavLink>

          <button
            type="button"
            onClick={() => setMobileServicesOpen((o) => !o)}
            aria-expanded={mobileServicesOpen}
            className="flex w-full items-center justify-center gap-2 py-3 text-base font-semibold text-ink"
          >
            {t.nav.services}
            <ChevronDown size={16} strokeWidth={2.5} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="mb-1">
              {SERVICE_IDS.map((id) => (
                <button
                  key={id}
                  onClick={() => { closeMobile(); navigate(`/services/${id}`) }}
                  className="block w-full py-2.5 text-center text-sm text-ink/80 hover:text-accent"
                >
                  {svc[id].title}
                </button>
              ))}
            </div>
          )}

          <NavLink to="/contact" className={mobileLinkCls} onClick={closeMobile}>{t.nav.contact}</NavLink>

          <div className="mt-2 flex flex-col items-center justify-center gap-3 border-t-2 border-divider pt-3.5">
            <div className="flex gap-1.5">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`border border-divider px-3 py-1.5 font-heading text-xs font-extrabold ${
                    l.code === lang ? "bg-accent text-bg" : "bg-transparent text-ink"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              className="inline-flex items-center gap-1.5 border border-divider px-3 py-1.5 text-xs font-bold text-ink"
            >
              {theme === "dark" ? <Sun size={14} strokeWidth={2.2} /> : <Moon size={14} strokeWidth={2.2} />}
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
