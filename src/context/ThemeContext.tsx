import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"
interface Ctx { theme: Theme; toggleTheme: () => void }
const ThemeContext = createContext<Ctx | null>(null)

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [stored, setStored] = useState<Theme | null>(() => {
    try { return localStorage.getItem("excal_theme") as Theme | null } catch { return null }
  })
  const [system, setSystem] = useState<Theme>(() => (typeof window !== "undefined" ? systemTheme() : "light"))
  const theme = stored ?? system

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => setSystem(mq.matches ? "dark" : "light")
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark"
    setStored(next)
    try { localStorage.setItem("excal_theme", next) } catch {}
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider")
  return ctx
}
