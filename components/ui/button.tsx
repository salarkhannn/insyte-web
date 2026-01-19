import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-signal disabled:pointer-events-none disabled:opacity-50 font-sans tracking-wide select-none relative overflow-hidden active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-orange-400 via-signal to-orange-600 text-white rounded-xl shadow-[0_6px_12px_-2px_rgba(234,88,12,0.4),inset_0_1px_0_0_rgba(255,255,255,0.25)] hover:shadow-[0_8px_16px_-2px_rgba(234,88,12,0.5),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:brightness-105 active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)] border-t border-orange-300/40",
        secondary:
          "bg-white text-slate-800 hover:bg-gray-50 rounded-xl border border-slate-200",
        outline:
          "bg-transparent border-2 border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl",
        ghost: 
          "hover:bg-slate-100/50 text-slate-700 rounded-lg hover:text-slate-900",
        link: 
          "text-signal underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 px-4 text-xs rounded-lg",
        lg: "h-14 px-8 text-base rounded-2xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/noise.jpg')] bg-cover opacity-[0.2] mix-blend-overlay"
        />
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }