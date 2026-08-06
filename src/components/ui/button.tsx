import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-heading font-extrabold text-sm transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        default: "bg-accent text-bg hover:bg-accent-600 active:bg-accent-700",
        secondary: "border border-divider text-ink hover:bg-black/5 active:bg-black/10",
        ghost: "px-2 text-accent hover:bg-accent-100 active:bg-accent-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        block: "h-11 w-full justify-start px-4",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
