import React, { createContext, useContext, useEffect, useState } from "react"
import { T, Lang, SiteCopy } from "@/data/content"

interface Ctx { lang: Lang; setLang: (l: Lang) => void; t: SiteCopy }
const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    try {
      const saved = localStorage.getItem("excal_lang") as Lang | null
      if (saved && T[saved]) setLangState(saved)
    } catch {}
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem("excal_lang", l) } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: T[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}
