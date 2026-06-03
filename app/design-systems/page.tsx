import { SideNav } from '@/components/navigation/SideNav'
import { Header } from '@/components/navigation/Header'
import { MobileNav } from '@/components/navigation/MobileNav'
import { Footer } from '@/components/Footer'

// ─── Icons (local — downloaded from Figma) ────────────────────────────────────
const imgTokenCircle  = '/design-systems/icon-token-circle.svg'
const imgBoundingBox  = '/design-systems/icon-bounding-box.svg'
const imgWebDesign    = '/design-systems/icon-web-design.svg'
const imgCourtLaw     = '/design-systems/icon-court-law.svg'
const imgLinkExternal = '/design-systems/icon-link-external.svg'

// ─── Feature box ─────────────────────────────────────────────────────────────
function FeatureBox({ iconSrc, title, description }: { iconSrc: string; title: string; description: string }) {
  return (
    <div className="flex-1 min-w-0 border border-[rgba(0,0,0,0.08)] rounded-[6px] p-3 flex flex-col gap-3 self-stretch">
      <div className="w-8 h-8 rounded-[6px] bg-[rgba(0,163,246,0.12)] flex items-center justify-center">
        <img src={iconSrc} alt="" className="w-6 h-6" />
      </div>
      <div className="flex flex-col gap-[2px]">
        <p className="text-[14px] leading-[20px] font-medium text-[var(--color-text-secondary)] whitespace-nowrap">{title}</p>
        <p className="text-[11px] leading-[16px] text-[var(--color-text-secondary)] opacity-60 tracking-[0.03px]">{description}</p>
      </div>
    </div>
  )
}

// ─── Shared features ──────────────────────────────────────────────────────────
const sharedFeatures = [
  {
    iconSrc: imgTokenCircle,
    title: 'Fondations',
    description: 'The Foundation layer is the lowest level of the Liquid system. It contains all raw and semantic design tokens',
  },
  {
    iconSrc: imgBoundingBox,
    title: 'Patterns',
    description: 'Patterns are compound UI solutions assembled from Liquid components. They solve recurring problems in the MM product.',
  },
  {
    iconSrc: imgWebDesign,
    title: 'Components',
    description: 'All components are built in Figma as published library components with token bindings, variant properties, and Dev Mode descriptions.',
  },
  {
    iconSrc: imgCourtLaw,
    title: 'Governance',
    description: 'Governance defines how Liquid grows, changes, and stays consistent over time.',
  },
]

// ─── Card ─────────────────────────────────────────────────────────────────────
interface DSCardProps {
  title: string
  description: string
  comingSoon?: boolean
  notionHref?: string
  caseStudyHref?: string
}

function DesignSystemCard({ title, description, comingSoon, notionHref, caseStudyHref }: DSCardProps) {
  return (
    <div className={`relative bg-white rounded-[6px] border border-[rgba(0,0,0,0.08)] p-5 w-full flex flex-col gap-5${comingSoon ? ' opacity-50' : ''}`}>
      {/* Header row */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-[18px] leading-[26px] font-bold text-[var(--color-text-primary)]">{title}</p>
        {comingSoon && (
          <span className="flex-shrink-0 font-mono text-[12px] leading-[18px] uppercase text-[var(--color-system-text-secondary)] bg-[#d9d9d9] px-2 py-1 rounded-[4px]">
            Coming Soon
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-[14px] leading-[22px] text-[var(--color-text-primary)]">{description}</p>

      {/* Features grid */}
      <div className="flex gap-2 items-stretch">
        {sharedFeatures.map((f) => (
          <FeatureBox key={f.title} {...f} />
        ))}
      </div>

      {/* Buttons */}
      {(notionHref || caseStudyHref) && (
        <div className="flex gap-5 items-center">
          {notionHref && (
            <a
              href={notionHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-[rgba(0,0,0,0.08)] px-4 py-2 rounded-[4px] font-mono text-[14px] leading-[22px] uppercase text-[var(--color-text-primary)] hover:bg-[var(--color-system-background)] transition-colors duration-[150ms] whitespace-nowrap"
            >
              View in Notion
              <span className="opacity-60 flex items-center">
                <img src={imgLinkExternal} alt="" className="w-5 h-5" />
              </span>
            </a>
          )}
          {caseStudyHref && (
            <a
              href={caseStudyHref}
              className="flex items-center gap-3 border border-[rgba(0,0,0,0.08)] px-4 py-2 rounded-[4px] font-mono text-[14px] leading-[22px] uppercase text-[var(--color-text-primary)] hover:bg-[var(--color-system-background)] transition-colors duration-[150ms] whitespace-nowrap"
            >
              Read case study
            </a>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DesignSystems() {
  return (
    <div className="flex min-h-screen bg-[var(--color-system-background)]">
      <SideNav />
      <MobileNav />
      <div className="flex flex-col flex-1 min-w-0 pt-[60px] md:pt-0">
        <Header pageTitle="Design Systems" />
        <main className="flex-1 px-10 py-6">
          <div className="max-w-[960px] mx-auto flex flex-col gap-6">
            <DesignSystemCard
              title="Liquid Design System"
              description="Liquid is the design system powering Milk Moovement's product suite — a set of shared tokens, components, and patterns that three React engineering teams use to build consistent, accessible, data-dense interfaces for dairy cooperative operations."
              notionHref="https://elfin-price-9c1.notion.site/Liquid-Design-System-Milk-Moovement-373b421354b981ddbe04f98cbfb150e8?source=copy_link"
              caseStudyHref="/case-studies/mm-ia"
            />
            <DesignSystemCard
              comingSoon
              title="Paper – Web Design System"
              description="A design system built around tangible texture as a base layered with technological elements—where surface, outline and interaction work together to create an experience that feels alive and human. Inspired by paper.design app that I use when visually working with designs while starting from code."
            />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
