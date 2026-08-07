import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

export interface Testimonial { quote: string; name: string; role: string; company: string }

export function Testimonials({ items }: { items: Testimonial[] }) {
  const [[idx, dir], setState] = useState<[number, number]>([0, 0])
  const current = items[idx]

  const go = (step: number) => {
    setState(([i]) => [(i + step + items.length) % items.length, step])
  }

  return (
    <div>
      <div className="relative min-h-[260px] sm:min-h-[220px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.blockquote
            key={idx}
            custom={dir}
            initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="m-0"
          >
            <p className="m-0 mb-7 max-w-[64ch] text-[17px] leading-relaxed text-ink/85 md:text-[19px]">
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="text-[13px] uppercase tracking-wider">
              <span className="font-extrabold text-ink">{current.name}</span>
              <span className="text-ink/60"> &mdash; {current.role}, {current.company}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="border-2 border-divider p-2.5 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowLeft size={16} strokeWidth={2.2} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="border-2 border-divider p-2.5 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowRight size={16} strokeWidth={2.2} />
        </button>
        <span className="ml-2 text-[13px] tabular-nums text-ink/55">
          {String(idx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}
