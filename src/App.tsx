import { Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { CookieBanner } from "@/components/CookieBanner"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Service } from "@/pages/Service"
import { Contact } from "@/pages/Contact"
import { Legal } from "@/pages/Legal"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-body text-ink">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/:id" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Legal type="terms" />} />
        <Route path="/privacy" element={<Legal type="privacy" />} />
        <Route path="/cookies" element={<Legal type="cookies" />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </div>
  )
}
