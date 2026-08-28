import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const { t } = useLanguage()
  const [consent, setConsent] = useState<string | null>("pending")

  useEffect(() => {
    try { setConsent(localStorage.getItem("excal_cookie_consent")) } catch { setConsent(null) }
  }, [])

  const decide = (value: "accepted" | "declined") => {
    setConsent(value)
    try { localStorage.setItem("excal_cookie_consent", value) } catch {}
  }

  return (
    <AnimatePresence>
      {consent === null && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-[100] bg-ink px-5 py-5 text-bg sm:px-9 md:px-[72px]"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col flex-wrap items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="m-0 max-w-[70ch] text-[13.5px] leading-relaxed">
              {t.cookieBanner.text}{" "}
              <Link to="/cookies" className="text-accent-300 underline">{t.legalNav.cookies}</Link>
            </p>
            <div className="flex flex-none justify-center gap-2.5">
              <Button variant="secondary" className="border-bg text-bg" onClick={() => decide("declined")}>
                {t.cookieBanner.decline}
              </Button>
              <Button onClick={() => decide("accepted")}>{t.cookieBanner.accept}</Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
