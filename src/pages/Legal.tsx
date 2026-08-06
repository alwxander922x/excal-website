import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/Reveal"

export function Legal({ type }: { type: "terms" | "privacy" | "cookies" }) {
  const { t } = useLanguage()
  const doc = t.legal[type]

  return (
    <section className="mx-auto max-w-[840px] px-5 pb-16 pt-[72px] sm:px-9 md:px-[72px]">
      <h1 className="mb-2 font-heading text-[28px] font-extrabold md:text-4xl">{doc.title}</h1>
      <p className="mb-6 text-[13px] text-ink/60">{doc.updated}</p>
      <p className="mb-10 text-[15.5px] leading-relaxed text-ink/80">{doc.intro}</p>
      {doc.sections.map((sec, i) => (
        <Reveal key={i} delay={Math.min(i * 0.04, 0.3)}>
          <div className="border-t-2 border-divider py-5">
            <h3 className="mb-2.5 text-lg font-bold">{sec.h}</h3>
            <p className="m-0 text-[15px] leading-relaxed text-ink/80">{sec.body}</p>
          </div>
        </Reveal>
      ))}
    </section>
  )
}
