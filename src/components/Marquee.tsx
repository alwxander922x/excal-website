import { SERVICE_IDS } from "@/data/content"
import { useLanguage } from "@/context/LanguageContext"
import { SVC } from "@/data/content"

export function Marquee() {
  const { lang } = useLanguage()
  const svc = SVC[lang]
  const items = [...SERVICE_IDS, ...SERVICE_IDS]
  return (
    <div className="overflow-hidden border-y-2 border-divider py-4">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((id, i) => (
          <span key={i} className="text-[13px] font-semibold uppercase tracking-wider text-ink/55">
            {svc[id].title}
          </span>
        ))}
      </div>
    </div>
  )
}
