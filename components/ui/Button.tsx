import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link'
  icon?: React.ReactNode
  children: React.ReactNode
}

export function Button({ variant = 'primary', icon, children, className, ...props }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 rounded-md font-sans font-medium transition-colors duration-[150ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'h-9 px-4 bg-[var(--color-brand-primary)] text-[var(--color-text-on-dark)] hover:bg-[var(--color-brand-accent)] focus-visible:outline-white',
    secondary: 'h-[38px] px-4 bg-transparent border border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-surface)] focus-visible:outline-[var(--color-brand-primary)]',
    link: 'bg-transparent text-[var(--color-brand-primary)] underline underline-offset-2 hover:opacity-80 focus-visible:outline-[var(--color-brand-primary)]',
  }
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {icon && <span className="w-5 h-5 flex-shrink-0">{icon}</span>}
      {children}
    </button>
  )
}
