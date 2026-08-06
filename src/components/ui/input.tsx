import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex h-10 w-full rounded-none border border-divider bg-surface px-3 py-2 text-sm text-ink placeholder:text-ink/50 focus-visible:border-accent focus-visible:outline-none",
      className
    )}
    {...props}
  />
))
Input.displayName = "Input"

export { Input }
