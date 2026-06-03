'use client'
import Link from 'next/link'
import { SideNav } from '@/components/navigation/SideNav'
import { Header } from '@/components/navigation/Header'
import { MobileNav } from '@/components/navigation/MobileNav'
import { Footer } from '@/components/Footer'

const imgMoove = '/assets/a5342c4d-ace2-4294-82db-7d15f5cf8d84.png'
const imgMooRules = '/assets/0f7b837f-61d4-40fe-9e07-c782fad53bae.png'
const imgDriverAssist = '/assets/42c283d8-a491-4586-8c25-21d9f07234ae.png'

const projects = [
  {
    title: 'Moove - Schedule Autopilot',
    description: 'Moove uses the power of Machine Learning to streamline dairy transport scheduling, boosting efficiency and reducing transportation costs and increasing component profitability.',
    image: imgMoove,
    href: '/ai-projects/moove-schedule-autopilot',
  },
  {
    title: 'MooRules',
    description: 'MooRules builds complex dairy payments using contextual language to set premiums, deductions, and charges—ensuring accurate, timely payouts with less manual work.',
    image: imgMooRules,
    href: null,
  },
]

export default function AIProjects() {
  return (
    <div className="flex min-h-screen bg-[var(--color-system-background)]">
      <SideNav />
      <MobileNav />
      <div className="flex flex-col flex-1 min-w-0 pt-[60px] md:pt-0">
        <Header pageTitle="AI Projects" />
        <main className="flex-1 px-10 py-6">
          <div className="flex gap-6 items-stretch">
            {projects.map((project) => {
              const inner = (
                <div className="flex flex-col gap-2">
                  <p className="text-[18px] leading-[26px] font-bold text-[var(--color-text-primary)]">{project.title}</p>
                  <p className="text-[14px] leading-[22px] text-[var(--color-text-primary)]">{project.description}</p>
                </div>
              )
              const img = (
                <div className="h-[208px] w-full overflow-hidden rounded-[4px]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                </div>
              )
              const isComingSoon = !project.href
              const cardClass = `relative flex-1 min-w-0 bg-white rounded-[6px] border border-[rgba(0,0,0,0.08)] p-5 flex flex-col gap-5 transition-shadow duration-[250ms] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)]${isComingSoon ? ' opacity-60' : ''}`
              const badge = isComingSoon ? (
                <span className="absolute top-4 right-4 font-mono text-[10px] leading-[14px] uppercase tracking-wide text-[var(--color-system-text-secondary)] bg-[var(--color-system-background)] border border-[rgba(0,0,0,0.10)] px-2 py-1 rounded-full">
                  Coming soon
                </span>
              ) : null

              if (project.href) {
                return (
                  <Link key={project.title} href={project.href} className={cardClass}>
                    {badge}
                    {inner}
                    {img}
                  </Link>
                )
              }
              return (
                <div key={project.title} className={cardClass}>
                  {badge}
                  {inner}
                  {img}
                </div>
              )
            })}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
