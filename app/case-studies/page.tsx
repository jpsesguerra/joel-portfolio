import Image from 'next/image'
import { SideNav } from '@/components/navigation/SideNav'
import { Header } from '@/components/navigation/Header'
import { MobileNav } from '@/components/navigation/MobileNav'
import { Footer } from '@/components/Footer'

// ─── Assets ──────────────────────────────────────────────────────────────────
const imgMmNavUpdate    = '/assets/0e0c89ee-ed21-4d15-8cc1-1f9a733d4a57.png'
const imgMooveUpdate    = '/assets/80616280-3e22-4ac5-b864-01766f1f5b7f.png'
const imgProcareEdtech  = '/assets/da1a594c-2c57-4150-85a7-6d298cc8e677.png'
const imgProcareChild   = '/assets/2e248fb2-6ab4-4870-9bb9-10c0b9da0912.png'
const imgMmLogo         = '/mm-logo.png'
const imgProcareLogoSrc = '/assets/28b77e71-a0e0-491e-bc0e-c6895048fec9.png'

// ─── Types ────────────────────────────────────────────────────────────────────
interface CaseStudyCardProps {
  logo: string
  logoAlt: string
  tags: string[]
  title: string
  description: string
  image: string
  imageAlt: string
  badges: string[]
  href?: string
  comingSoon?: boolean
}

// ─── Card component ───────────────────────────────────────────────────────────
function CaseStudyCard({ logo, logoAlt, tags, title, description, image, imageAlt, badges, href, comingSoon }: CaseStudyCardProps) {
  const inner = (
    <>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-[10px] flex-wrap">
          <Image src={logo} alt={logoAlt} width={24} height={24} loading="lazy" className="w-6 h-6 object-contain" />
          {tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-[10px]">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-50" />}
              <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)]">{tag}</p>
            </span>
          ))}
        </div>
        {comingSoon && (
          <span className="flex-shrink-0 font-mono text-[12px] leading-[18px] uppercase text-[var(--color-system-text-secondary)] bg-[#d9d9d9] px-2 py-1 rounded-[4px]">
            Coming Soon
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[18px] leading-[26px] font-bold text-[var(--color-text-primary)]">{title}</p>
        <p className="text-[14px] leading-[22px] text-[var(--color-text-primary)]">{description}</p>
      </div>
      <div className="aspect-[660/336] w-full overflow-hidden rounded-[4px]">
        <Image src={image} alt={imageAlt} width={660} height={336} loading="lazy" className="w-full h-full object-cover object-top" />
      </div>
      <div className="flex items-center gap-[10px] flex-wrap">
        {badges.map((badge) => (
          <div key={badge} className="bg-[rgba(0,163,246,0.12)] px-[6px] py-[2px] rounded-[4px]">
            <p className="font-mono text-[8px] leading-[16px] uppercase text-[#00a3f6] whitespace-nowrap">{badge}</p>
          </div>
        ))}
      </div>
    </>
  )

  const cardClass = `flex-1 min-w-0 bg-[var(--color-system-white)] rounded-[6px] border border-[var(--color-system-border)] p-5 flex flex-col gap-5 transition-shadow duration-[250ms]${comingSoon ? ' opacity-50 pointer-events-none' : ' hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)]'}`

  if (href && !comingSoon) {
    return <a href={href} className={cardClass}>{inner}</a>
  }
  return <div className={cardClass}>{inner}</div>
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const caseStudies: CaseStudyCardProps[] = [
  {
    logo: imgMmLogo,
    logoAlt: 'Milk Moovement',
    tags: ['Milk Moovement', 'B2B', 'Multi-User Workflows'],
    title: 'Turning Operational Chaos into Clear Workflows',
    description: 'Re-designed the Information Architecture for a multi-user and multi-permission operations platform.',
    image: imgMmNavUpdate,
    imageAlt: 'MM Navigation update',
    badges: ['90% Satisfaction Score', '50% Time Saved by Sales', '25% Productivity'],
    href: '/case-studies/mm-ia',
  },
  {
    logo: imgMmLogo,
    logoAlt: 'Milk Moovement',
    tags: ['Milk Moovement', 'B2B', 'AI Scheduling Feature'],
    title: 'Moove — Schedule Autopilot',
    description: 'Designing the AI scheduling interface that lets dairy cooperatives trust a machine learning engine with their most expensive weekly decision.',
    image: imgMooveUpdate,
    imageAlt: 'Moove Schedule Autopilot',
    badges: ['2% Transport Cost Reduction', '25% Schedule Efficiency', '850+ Loads/Week'],
    href: '/ai-projects/moove-schedule-autopilot',
  },
  {
    logo: imgProcareLogoSrc,
    logoAlt: 'Procare',
    tags: ['Procare', 'B2B', 'Curriculum Integration + Marketplace'],
    title: 'Designing a $20M Product Line from Zero',
    description: 'How Procare entered the EdTech Market through deep research, successful partnerships and clear design decisions.',
    image: imgProcareEdtech,
    imageAlt: 'Procare EdTech platform',
    badges: ['$20M New ARR Generated', '1600+ Schools Enrolled', '130K Teachers Reached'],
    href: '/case-studies/procare-curriculum',
  },
  {
    logo: imgProcareLogoSrc,
    logoAlt: 'Procare',
    tags: ['Procare', 'B2B2C', 'Activity Logging App'],
    title: 'From Paper to Playground: Daily Activity Logging for Teachers',
    description: "Designing Procare's Daily Activity Log that gave teachers back the time they were losing to paperwork — and returned it to the children who needed them.",
    image: imgProcareChild,
    imageAlt: 'Procare Daily Activity Log',
    badges: ['65% Parent Engagement', '4.9★ Apple Store', '4.8★ Play Store'],
    comingSoon: true,
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CaseStudies() {
  return (
    <div className="flex min-h-screen bg-[var(--color-system-background)]">
      <SideNav />
      <MobileNav />
      <div className="flex flex-col flex-1 min-w-0 pt-[60px] md:pt-0">
        <Header pageTitle="Case Studies" />
        <main className="flex-1 px-10 py-6">
          <div className="max-w-[960px] mx-auto">
            <div className="grid grid-cols-2 gap-6">
              {caseStudies.map((cs) => (
                <CaseStudyCard key={cs.title} {...cs} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
