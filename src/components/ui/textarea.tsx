import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[110px] w-full rounded-none border border-divider bg-surface px-3 py-2 text-sm text-ink placeholder:text-ink/50 focus-visible:border-accent focus-visible:outline-none",
      className
    )}
    {...props}
  />
))
Textarea.displayName = "Textarea"

export { Textarea }
