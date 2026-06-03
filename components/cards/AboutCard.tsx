import { cn } from '@/lib/utils'

interface AboutCardDefaultProps {
  variant: 'default'
  title: string
  body: string
  className?: string
}

interface AboutCardRecommendationProps {
  variant: 'recommendation'
  quote: string
  name: string
  role: string
  className?: string
}

type AboutCardProps = AboutCardDefaultProps | AboutCardRecommendationProps

export function AboutCard(props: AboutCardProps) {
  if (props.variant === 'recommendation') {
    return (
      <div className={cn('w-[367px] h-[268px] bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md p-5 flex flex-col justify-between', props.className)}>
        <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)] italic">&ldquo;{props.quote}&rdquo;</p>
        <div>
          <p className="text-[14px] leading-[20px] font-semibold text-[var(--color-system-text-primary)]">{props.name}</p>
          <p className="text-[12px] leading-[18px] text-[var(--color-system-text-tertiary)]">{props.role}</p>
        </div>
      </div>
    )
  }
  return (
    <div className={cn('w-[367px] h-[284px] bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md p-5 flex flex-col gap-3', props.className)}>
      <h3 className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">{props.title}</h3>
      <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">{props.body}</p>
    </div>
  )
}
