import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"
import { Cookie, ShieldCheck, X } from "lucide-react"

export function CookieBanner() {
  const { t } = useLanguage()
  const [consent, setConsent] = useState<string | null>("pending")

  useEffect(() => {
    try {
      const stored = localStorage.getItem("excal_cookie_consent")
      setConsent(stored)
    } catch {
      setConsent(null)
    }
  }, [])

  const decide = (value: "accepted" | "essential" | "declined") => {
    setConsent(value)
    try {
      localStorage.setItem("excal_cookie_consent", value)
    } catch {}
  }

  return (
    <AnimatePresence>
      {consent === null && (
        <motion.aside
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-label={t.cookieBanner.title}
          className="fixed bottom-4 right-4 z-[100] w-[calc(100%-2rem)] sm:bottom-6 sm:right-6 sm:w-auto sm:max-w-[440px]"
        >
          <div className="relative border border-accent-300/30 bg-ink/95 p-5 text-bg shadow-2xl backdrop-blur-md">
            {/* Close button */}
            <button
              type="button"
              onClick={() => decide("essential")}
              className="absolute right-3.5 top-3.5 p-1 text-bg/60 transition-colors hover:text-bg"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header with Icon and Badge */}
            <div className="mb-3 flex items-start gap-3 pr-6">
              <div className="flex h-9 w-9 flex-none items-center justify-center border border-accent-300/40 bg-accent/20 text-accent-300">
                <Cookie className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-heading text-sm font-extrabold tracking-wide text-bg">
                    {t.cookieBanner.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 border border-accent-300/40 bg-accent/25 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-accent-300">
                    <ShieldCheck className="h-3 w-3" />
                    {t.cookieBanner.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Body */}
            <p className="mb-4 text-[12.5px] font-light leading-relaxed text-bg/80">
              {t.cookieBanner.text}{" "}
              <Link
                to="/cookies"
                className="font-medium text-accent-300 underline underline-offset-2 transition-colors hover:text-bg"
              >
                {t.legalNav.cookies}
              </Link>{" "}
              &{" "}
              <Link
                to="/privacy"
                className="font-medium text-accent-300 underline underline-offset-2 transition-colors hover:text-bg"
              >
                {t.legalNav.privacy}
              </Link>
              .
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                onClick={() => decide("accepted")}
                className="h-9 flex-1 bg-accent font-heading text-xs font-extrabold uppercase tracking-wider text-bg hover:bg-accent-600"
              >
                {t.cookieBanner.accept}
              </Button>
              <Button
                variant="secondary"
                onClick={() => decide("essential")}
                className="h-9 flex-1 border-bg/30 font-heading text-xs font-bold uppercase tracking-wider text-bg hover:bg-white/10"
              >
                {t.cookieBanner.essential}
              </Button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
