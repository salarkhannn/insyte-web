import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-signal disabled:pointer-events-none disabled:opacity-50 font-sans tracking-wide select-none relative overflow-hidden active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-signal text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_0_#9a3412,0_8px_10px_-2px_rgba(0,0,0,0.3)] hover:bg-orange-600 rounded-xl active:shadow-none active:translate-y-[4px] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.15)_0%,_transparent_60%)] before:pointer-events-none",
        secondary:
          "bg-white text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_0_#d4d4d8,0_8px_10px_-2px_rgba(0,0,0,0.1)] hover:bg-gray-50 rounded-xl border border-slate-200 active:shadow-none active:translate-y-[4px] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.02)_0%,_transparent_60%)] before:pointer-events-none",
        outline:
          "bg-transparent border-2 border-slate-300 text-slate-700 shadow-[0_4px_0_#cbd5e1] hover:bg-slate-100 rounded-xl active:shadow-none active:translate-y-[4px] active:bg-slate-200",
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
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }