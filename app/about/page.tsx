import Image from 'next/image'
import { SideNav } from '@/components/navigation/SideNav'
import { Header } from '@/components/navigation/Header'
import { MobileNav } from '@/components/navigation/MobileNav'
import { Footer } from '@/components/Footer'

const imgProfile = '/rec-joel.jpg'
const imgMilkMoovementLogo = '/mm-logo.png'
const imgProcareLogoLight = '/assets/ce7ad34a-290b-4e84-a7f8-d1e6e5438294.png'
const imgSandboxLogo = '/assets/01ee4d3b-c7d6-491c-b9c3-471d2446d449.png'
const imgKWLogo = '/assets/df5279f5-be71-4bfb-9dea-60e0eb648498.png'
const imgLinkedin = '/assets/b99100bf-4f36-4bcd-8a47-55c46a05e797.svg'
const imgWebflow = '/assets/e6c77fe7-ae58-4092-829f-0a4561b22a6c.svg'
const imgMail = '/assets/6403da35-1a6c-4951-b51c-a5ec4d9a7988.svg'
const imgLinkSquare = '/assets/aa06812d-ff47-4418-b7d3-b4a23f213491.svg'
const imgEllipseRec1 = '/rec-miles.jpg'
const imgEllipseRec2 = '/rec-kenny.jpg'
const imgEllipseRec3 = '/rec-stephen.jpg'
const imgFleetio1 = '/assets/0b96496c-35c8-4655-bd02-3a0f3a7f18f5.png'
const imgFleetio2 = '/assets/90abaedd-e76b-4630-ac8b-5f063ecad828.png'
const imgFleetio3 = '/assets/06c24fb7-f2ec-4e83-8247-d40dfdb20e2f.png'

const designSkills = [
  'Product Design', 'Design Systems', 'Native Mobile (iOS/Android)', 'Information Architecture',
  'Interaction Design', 'Visual Design', 'AI Prototyping', 'Accessibility (WCAG)',
]
const devSkills = ['Agentic AI Workflows', 'AI-Assisted Development', 'Front-End Development']
const strategySkills = [
  '0-1 Product Design', 'PRD Writing', 'Cross-Functional Collaboration',
  'Stakeholder Storytelling', 'User Research', 'Requirements Gathering',
]
const toolSkills = ['Figma', 'Claude Code', 'Storybook', 'Cursor', 'GitHub', 'Pendo', 'Datadog', 'Notion', 'Jira', 'Confluence']

function SkillChip({ label }: { label: string }) {
  return (
    <div className="bg-[var(--color-system-background-02)] px-2 py-1 rounded-[4px]">
      <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)] whitespace-nowrap">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <div className="flex min-h-screen bg-[var(--color-system-background)]">
      <SideNav />
      <MobileNav />
      <div className="flex flex-col flex-1 min-w-0 pt-[60px] md:pt-0">
        <Header pageTitle="About Me" />
        <main className="flex-1 px-10 py-6">
          <div className="max-w-[960px] mx-auto flex flex-col gap-0">

          {/* Profile section */}
          <div className="flex gap-6 items-start pb-10 border-b border-[rgba(0,0,0,0.08)]">
            <div className="w-[162px] h-[198px] rounded-[6px] overflow-hidden flex-shrink-0">
              <Image src={imgProfile} alt="Joel Esguerra" width={162} height={198} priority className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex-1 flex flex-col gap-4 justify-center">
              <h1 className="text-[40px] leading-[48px] font-bold text-[var(--color-text-primary)] tracking-[-0.4px]">Joel Esguerra</h1>
              <p className="text-[16px] leading-[24px] text-[var(--color-text-primary)]">
                Senior Product Designer with 10 years of experience building B2B SaaS products from 0 to 1 — twice contributing to acquisitions — and scaling them at enterprise level. Deep experience designing complex operational software across AgTech, ChildcareTech, EduTech, and Real Estate CRM.
              </p>
              <div className="flex items-center gap-5">
                <a href="#" className="flex items-center gap-3 border border-[rgba(0,0,0,0.08)] px-3 py-2 rounded-[4px]">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-text-primary)]">VIEW IN PDF</p>
                  <Image src={imgLinkSquare} alt="" width={20} height={20} loading="lazy" className="w-5 h-5 opacity-60" />
                </a>
                <div className="flex items-center gap-5">
                  <a href="https://www.linkedin.com/in/jpesguerra/" target="_blank" rel="noopener noreferrer" className="opacity-40">
                    <Image src={imgLinkedin} alt="LinkedIn" width={24} height={24} loading="lazy" className="w-6 h-6" />
                  </a>
                  <a href="https://webflow.com/@joelpaolo" target="_blank" rel="noopener noreferrer" className="opacity-40">
                    <Image src={imgWebflow} alt="Webflow" width={24} height={24} loading="lazy" className="w-6 h-6" />
                  </a>
                  <a href="mailto:jpsesguerra@gmail.com" className="opacity-40">
                    <Image src={imgMail} alt="Email" width={24} height={24} loading="lazy" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education + Skills + Experience */}
          <div className="flex gap-10 items-start py-6 border-b border-[rgba(0,0,0,0.08)]">

            {/* Left: Education + Skills */}
            <div className="flex flex-col gap-10 w-[320px] flex-shrink-0">

              {/* Education */}
              <div className="flex flex-col gap-6">
                <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-text-primary)] tracking-[-0.16px]">Education</h2>
                <div className="flex flex-col gap-2">
                  <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-primary)]">B.B.A. Information Systems</p>
                  <p className="text-[16px] leading-[24px] text-[var(--color-text-secondary)]">York University | Toronto, Ontario</p>
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-text-secondary)]">SEP 2007 - APR 2012</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-primary)]">UX Design Course, UX/UI</p>
                  <p className="text-[16px] leading-[24px] text-[var(--color-text-secondary)]">Springboard | springboard.com</p>
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-text-secondary)]">SEP 2016</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-primary)]">AI Design &amp; Design Systems</p>
                  <p className="text-[16px] leading-[24px] text-[var(--color-text-secondary)]">Memorisely | memorisely.com</p>
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-text-secondary)]">MAR 2026</p>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-6">
                <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-text-primary)] tracking-[-0.16px]">Skills</h2>

                <div className="flex flex-col gap-2">
                  <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-primary)]">Design</p>
                  <div className="flex flex-wrap gap-2">{designSkills.map(s => <SkillChip key={s} label={s} />)}</div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-primary)]">Development</p>
                  <div className="flex flex-wrap gap-2">{devSkills.map(s => <SkillChip key={s} label={s} />)}</div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-primary)]">Strategy</p>
                  <div className="flex flex-wrap gap-2">{strategySkills.map(s => <SkillChip key={s} label={s} />)}</div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-primary)]">Tools</p>
                  <div className="flex flex-wrap gap-2">{toolSkills.map(s => <SkillChip key={s} label={s} />)}</div>
                </div>
              </div>
            </div>

            {/* Right: Experience */}
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-text-primary)] tracking-[-0.16px]">Experience</h2>

              <ExperienceEntry
                logo={imgMilkMoovementLogo}
                logoBg="#00A3F6"
                linkedinHref="https://www.linkedin.com/company/milkmoovement/"
                title="Senior Product Designer"
                company="Milk Moovement"
                location="Halifax, NS — Remote"
                dates="Oct 2022 - Present"
                bullets={[
                  'Redesigned platform navigation across 20+ pages for 4 distinct user types — delivering a 40% NPS lift, 15-25% productivity gain per user, and a 50% reduction in sales demo time',
                  'Designed Moove an AI-driven scheduling optimization engine that reduced Coop transportation costs by 30%; built transparent criteria-setting UI to drive user trust in AI-generated outputs',
                  'Shipped MooRules, a conversational AI invoice builder that interprets plain-language input into configurable, rules-based billing logic for Coop finance teams',
                  'Designed Driver and Producer mobile apps for real-time load tracking, pickup logging, quality scores, and payment visibility — replacing manual and paper-based field workflows',
                  'Launched a Webflow-integrated Member Bulletin Board replacing physical newsletters; increased Coop member engagement by 80%+ and contributed to 3 new enterprise deals in year one',
                  'Conducted 170+ stakeholder interviews across Producers, Drivers, Coop Admins, and Finance teams to ground every major product decision in validated user research',
                ]}
              />

              <ExperienceEntry
                logo={imgProcareLogoLight}
                logoBg="#faf8f4"
                linkedinHref="https://www.linkedin.com/company/procaresolutions/"
                title="Senior Product Designer"
                company="Procare Solutions"
                location="Denver, CO. — Remote"
                dates="Jan 2020 - Oct 2022"
                bullets={[
                  "Led full redesign of Procare's parent-teacher communication mobile app — rebuilding age-specific child dashboards (Infants, Toddlers, Pre-K) and secure sign-in/out flows for iOS and Android",
                  'Designed 0-to-1 EduTech curriculum feature enabling childcare owners to source, license, and deploy 3rd-party lesson plans in-app, directly reducing teacher workload and staff turnover',
                  'Launched in-app content marketplace with Marco Polo and Learning Beyond — giving Procare a competitive differentiator no rival childcare platform had at the time',
                  "Contributed to Procare's design system component library; created brand illustration assets still active across marketing and product today",
                ]}
              />

              <ExperienceEntry
                logo={imgSandboxLogo}
                logoBg="#1d8ae8"
                title="Product Designer"
                company="Sandbox Software"
                location="Hamilton, ON."
                dates="Sep 2017 - Jan 2020"
                badge="Acquired by Procare - 2020"
                bullets={[
                  'Designed entire product from 0-to-1 as sole designer: child and staff CRM, payment processing, classroom scheduling, parent sign-in kiosks, and a teacher-to-parent communication app',
                  'Grew platform from 20 to 1,200 schools across North America in under 2 years, contributing to 94% YoY revenue growth and a $12M acquisition by Procare Solutions in 2020',
                  'Redesigned new-user onboarding flow — reduced support load by 40% and improved 30-day trial retention by guiding users to their first activated classroom and enrolled child',
                  'Rebuilt company website in Webflow, tripling inbound sales leads for the commercial team',
                  'Conducted 80+ school visits and interviews with owners, teachers, and parents to validate every major product release',
                ]}
              />

              <ExperienceEntry
                logo={imgKWLogo}
                logoBg="#f8fafd"
                linkedinHref="https://www.linkedin.com/company/keller-williams-realty-llc/"
                title="Product Designer"
                company="Team Leads - Keller Williams"
                location="Milton, ON."
                dates="Jul 2016 - Aug 2017"
                badge="Acquired by Keller Williams - 2017"
                bullets={[
                  'Designed a B2B real estate CRM platform from 0-to-1 as the sole designer alongside a 7-person engineering team, serving Keller Williams agents across North America',
                  'Platform contributed to a $6M acquisition by Keller Williams within 8 months of product launch',
                ]}
                isLast
              />
            </div>
          </div>

          {/* Recommendations */}
          <div className="py-6 flex flex-col gap-6">
            <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-text-primary)] tracking-[-0.16px]">Recommendations</h2>
            <div className="flex gap-[22px]">
              <RecommendationCard
                avatar={imgEllipseRec1}
                name="Miles Rand"
                role="Head of Product"
                logo={imgFleetio1}
                linkedinHref="https://www.linkedin.com/in/milesrand/"
                quote="Joel poses an incredible affinity for understanding problems. While Joel can output screens, mocks, and flows with the best of them - Joel's true value lies in his endless hunger to understand customers, problems, and why. This affinity for deeply researching (and understanding) users then translates into all his design work. Which in turn yields world class UX and UI. Joel would be an invaluable asset to any team. One of the skills Joel possesses that sets him apart from other design leaders I have worked with is his ability to seamlessly transition between Micro and Macro Context. Enabling him to work both at the IC and executive level flawlessly."
              />
              <RecommendationCard
                avatar={imgEllipseRec2}
                name="Kenny Harris"
                role="Sr. Enterprise Account Executive"
                logo={imgFleetio2}
                linkedinHref="https://www.linkedin.com/in/kenny-harris-50b664163/"
                quote="Joel is an exceptional product designer and was an absolute force at Milk Moovement. He was incredibly helpful when it came time to prototype thoughtful, credible solutions for marquee prospective customers, often on tight timelines and with real commercial stakes. Beyond pure design, Joel brought a strong go-to-market mindset. He was invaluable in creating sales enablement materials and collateral that actually reflected the product accurately while telling a compelling story for customers. Joel combines strong design taste with pragmatism and speed; a rare mix. Any team building and selling a serious product would be lucky to have him."
              />
              <RecommendationCard
                avatar={imgEllipseRec3}
                name="Stephen Anastasi"
                role="Dir. of Product Management"
                logo={imgFleetio3}
                linkedinHref="https://www.linkedin.com/in/stephenanastasi/"
                quote="What separates Joel is how he operates at the intersection of product and design. He doesn't wait to be handed a problem statement — he helps shape it. Joel consistently surfaces the actual problem underneath the one being debated, articulates it clearly enough that engineers and stakeholders align faster, and moves into execution without losing that clarity. Most designers translate requirements. Joel challenges them. His collaboration style creates alignment, not just agreement — and his work lands with less friction because the people who need to build it were part of understanding why it matters."
              />
            </div>
          </div>

          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

function ExperienceEntry({
  logo, logoBg, title, company, location, dates, badge, bullets, isLast, linkedinHref,
}: {
  logo: string
  logoBg: string
  title: string
  company: string
  location: string
  dates: string
  badge?: string
  bullets: string[]
  isLast?: boolean
  linkedinHref?: string
}) {
  const logoImg = <Image src={logo} alt={company} width={40} height={40} loading="lazy" className="w-[40px] h-[40px] object-contain" />
  return (
    <div className="flex gap-6 items-stretch">
      {/* Icon + line */}
      <div className="flex flex-col items-center flex-shrink-0 w-[54px]">
        <div className="w-[54px] h-[54px] rounded-[14.7px] overflow-hidden flex items-center justify-center flex-shrink-0" style={{ backgroundColor: logoBg }}>
          {linkedinHref
            ? <a href={linkedinHref} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">{logoImg}</a>
            : logoImg}
        </div>
        {!isLast && <div className="flex-1 w-px bg-[rgba(0,0,0,0.08)] mt-3" />}
      </div>
      {/* Content */}
      <div className="flex-1 pb-10 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-primary)] whitespace-nowrap">{title}</p>
            {badge && (
              <div className="bg-[#e5f8fb] px-2 py-[3px] rounded-[4px]">
                <p className="font-mono font-semibold text-[12px] leading-[18px] text-[#008394] whitespace-nowrap">{badge}</p>
              </div>
            )}
          </div>
          <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-tertiary)] whitespace-nowrap">{dates}</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[16px] leading-[24px] font-medium text-[var(--color-text-tertiary)]">{company}</p>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)] opacity-50 flex-shrink-0" />
          <p className="text-[16px] leading-[24px] font-medium text-[var(--color-text-tertiary)]">{location}</p>
        </div>
        <ul className="list-disc ml-5 text-[14px] leading-[22px] text-[var(--color-text-secondary)] flex flex-col gap-0">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </div>
  )
}

function RecommendationCard({
  avatar, name, role, logo, quote, linkedinHref,
}: {
  avatar: string
  name: string
  role: string
  logo: string
  quote: string
  linkedinHref?: string
}) {
  const person = (
    <div className="flex items-center gap-3">
      <Image src={avatar} alt={name} width={40} height={40} loading="lazy" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
      <div>
        <p className="text-[14px] leading-[20px] font-bold text-[var(--color-text-primary)]">{name}</p>
        <p className="text-[12px] leading-[18px] text-[var(--color-text-primary)]">{role}</p>
      </div>
    </div>
  )
  return (
    <div className="flex-1 min-w-0 bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-[6px] px-4 py-5 flex flex-col gap-5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-[150ms]">
      <div className="bg-[var(--color-system-background-02)] rounded-[8px] px-4 py-2 flex flex-col gap-2">
        <p className="text-[14px] leading-[22px] text-[var(--color-text-primary)]">★★★★★</p>
        <p className="text-[11px] leading-[18px] text-[var(--color-text-primary)]">{quote}</p>
      </div>
      <div className="flex items-start justify-between">
        {linkedinHref
          ? <a href={linkedinHref} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">{person}</a>
          : person}
        <Image src={logo} alt="" width={77} height={40} loading="lazy" className="h-10 w-[77px] object-contain" />
      </div>
    </div>
  )
}
