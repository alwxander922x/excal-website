import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder"
import { Check, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { SEO } from "@/components/SEO"

export function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  return (
    <div>
      <SEO title={t.nav.contact} url="https://excal-group.com/contact" />
      <section className="mx-auto max-w-[1200px] px-5 pb-10 pt-[72px] text-center sm:px-9 md:px-[72px] md:text-left">
        <h6 className="mb-2.5 text-[13px] font-extrabold uppercase tracking-wider text-accent-700">{t.nav.contact}</h6>
        <h1 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">{t.contact.title}</h1>
        <p className="mx-auto max-w-[60ch] text-base leading-relaxed text-ink/80 md:mx-0">{t.contact.intro}</p>
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 pb-[72px] pt-2 sm:px-9 md:grid-cols-[5fr_7fr] md:px-[72px]">
        <div className="text-center md:text-left">
          <div className="flex flex-col items-center gap-2 border-t-2 border-divider py-4 md:flex-row md:items-start md:gap-3">
            <MapPin className="flex-none text-accent" size={20} strokeWidth={1.8} />
            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-ink/60">{t.contact.addressLabel}</p>
              <p className="m-0 text-[15px]">str. Eminescu 70, Chișinău, Moldova</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 border-t-2 border-divider py-4 md:flex-row md:items-start md:gap-3">
            <Phone className="flex-none text-accent" size={20} strokeWidth={1.8} />
            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-ink/60">{t.contact.phoneLabel}</p>
              <p className="m-0 text-[15px]"><a href="tel:+37369180475" className="text-ink hover:text-accent">+373 69 180 475</a></p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 border-y-2 border-divider py-4 md:flex-row md:items-start md:gap-3">
            <Mail className="flex-none text-accent" size={20} strokeWidth={1.8} />
            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-ink/60">{t.contact.emailLabel}</p>
              <p className="m-0 text-[15px]"><a href="mailto:office@excal-group.com" className="text-ink hover:text-accent">office@excal-group.com</a></p>
            </div>
          </div>
          <div className="mt-6 overflow-hidden shadow-xl rounded-sm">
            <iframe 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade" 
              src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=str.%20Eminescu%2070,%20Chi%C8%99in%C4%83u,%20Moldova&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Excal Group Office Location"
            ></iframe>
          </div>
        </div>

        <div>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center border-2 border-divider p-8 text-center md:items-start md:text-left"
            >
              <Check className="text-accent" size={28} strokeWidth={2} />
              <h3 className="mb-2 mt-3.5">{t.contact.sentTitle}</h3>
              <p className="m-0 text-[14.5px] text-ink/80">{t.contact.sentBody}</p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
              className="flex flex-col items-center gap-4 text-center md:items-stretch md:text-left"
            >
              <div className="w-full">
                <label className="mb-1.5 block text-xs text-ink/70 md:text-left">{t.contact.nameLabel}</label>
                <Input required />
              </div>
              <div className="w-full">
                <label className="mb-1.5 block text-xs text-ink/70 md:text-left">{t.contact.emailFieldLabel}</label>
                <Input type="email" required />
              </div>
              <div className="w-full">
                <label className="mb-1.5 block text-xs text-ink/70 md:text-left">{t.contact.messageLabel}</label>
                <Textarea rows={5} required />
              </div>
              <Button type="submit" size="block">{t.contact.submit}</Button>
              <p className="m-0 text-[12.5px] text-ink/60">{t.contact.formNote}</p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
