import * as React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none'
    const variants = {
      default: 'bg-[#223059] text-white hover:bg-[#1b2749]',
      outline: 'bg-transparent border border-white/30 text-white hover:bg-white/10',
    } as const
    const classes = `${base} ${variants[variant]} ${className}`
    return <button ref={ref} className={classes} {...props} />
  }
)

Button.displayName = 'Button'
