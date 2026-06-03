import { SideNav } from '@/components/navigation/SideNav'
import { Header } from '@/components/navigation/Header'
import { MobileNav } from '@/components/navigation/MobileNav'
import { AnimatedStatCard } from '@/components/AnimatedStatCard'
import { AnimatedDSCard } from '@/components/AnimatedDSCard'
import { WorkExperienceCarousel } from '@/components/WorkExperienceCarousel'
import { Footer } from '@/components/Footer'

// Figma MCP assets — expires ~7 days from Jun 1 2026
const imgHeroBg = '/assets/92fc3f46-a33c-4bf0-bbad-27cabb0542b7.png'
const imgJoelPhoto = '/ID.png'
const imgJoelShadow = '/assets/4cfcfcb5-6f01-446d-9fc6-1e33f48a4b76.svg'
const imgLinkIcon = '/assets/64bf2a52-8204-47f1-b999-c1ed8d5ada72.svg'
const imgLine1 = '/assets/f46c8ab6-eb06-435c-877d-4c9b0f05eb90.svg'
const imgLine2 = '/assets/0e718a75-bb80-4adc-8577-d08fb0109ad5.svg'
const imgDsScreenshot = '/assets/43f00e13-2b60-4483-ac7c-4b3080226ada.png'
const imgMilkMoovementLogo = '/mm-logo.png'
const imgProcareCase = '/assets/bd6f6582-b52d-4352-8e16-001af738b391.png'
const imgFeaturedBg = '/assets/c6f583c7-151f-4435-af33-92c48e7eaf3d.png'

// Tech stack logos
const techLogos = [
  '/assets/4b86dc58-8bba-4900-bab1-059beff8ef49.png', // figma
  '/assets/88dc0f15-2081-4e74-894e-3a1cf703a4af.png', // claude
  '/assets/dec2b3bc-c4e3-4007-a228-1236f04d9616.png', // storybook
  '/assets/bd4356b0-8297-44d0-9b14-7173de708a87.png', // cursor
  '/assets/8d824ac7-35ae-4d9f-99cf-edece3ca5c6a.png', // pendo
  '/assets/982433ed-d67d-4139-8bf1-bca0e1111ea5.png', // datadog
  '/assets/e97a6037-c272-4425-886e-79d19c997c81.png', // fullstory
  '/assets/36a9e9e4-e119-4be0-974d-b167bebd42e5.png', // notion
  '/assets/aa4e2d11-969e-42fa-b3db-845fa4432d54.png', // github
  '/assets/882f3f4d-c363-47cf-9ba5-ce35c2295942.png', // webflow
]

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[var(--color-system-background)]">
      <SideNav />
      <MobileNav />
      <div className="flex flex-col flex-1 min-w-0 pt-[60px] md:pt-0">
        <Header pageTitle="Hi there, it's nice to meet you!" />
        <main className="flex-1 px-4 md:px-6 lg:px-10 py-4 md:py-6 flex flex-col gap-3">

          {/* Top row: Hero card (2/3) + right column (1/3) — same grid as case study row below */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

            {/* Hero card — spans 2 columns on desktop */}
            <div className="lg:col-span-2 rounded-[6px] border border-[rgba(0,0,0,0.08)] overflow-hidden flex flex-col justify-between relative">
              <img
                src={imgHeroBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              {/* Lanyard + ID card — hidden below lg so text stays readable */}
              <img
                src={imgJoelPhoto}
                alt="Joel Esguerra"
                className="absolute top-0 right-0 pointer-events-none hidden lg:block"
                style={{ width: '200px', height: 'auto', top: '-40px', right: '20px' }}
              />
              <div className="relative z-20 flex flex-col gap-[10px] p-6 md:p-10 lg:w-[72%]">
                <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-text-primary)]">MY NAME IS JOEL,</p>
                <h2 className="text-[40px] leading-[48px] font-bold text-[var(--color-text-primary)] tracking-[-0.4px]">
                  I turn operationally complex<br />
                  platforms into something<br />
                  people want to use.
                </h2>
                <p className="text-[14px] leading-[22px] text-[var(--color-text-primary)]">
                  Ten years designing B2B platforms where the workflows are messy, the user types are many, and the margin for confusion is zero. I&apos;ve shipped products used by farmers, daycare owners, truck drivers, and finance teams — and they all had to work on day one.
                </p>
                <div className="flex items-center gap-[10px] mt-1">
                  <a
                    href="/case-studies"
                    className="flex items-center justify-center px-3 py-[7px] rounded-[4px] bg-[var(--color-brand-primary)] border border-[rgba(0,0,0,0.08)] font-mono text-[14px] leading-[22px] uppercase text-white whitespace-nowrap"
                  >
                    Case Studies
                  </a>
                  <a
                    href="mailto:jpsesguerra@gmail.com"
                    className="flex items-center gap-3 px-4 py-2 rounded-[4px] border border-[rgba(0,0,0,0.08)] font-mono text-[14px] leading-[22px] uppercase text-[var(--color-text-primary)] whitespace-nowrap"
                  >
                    Let&apos;s Connect
                    <img src={imgLinkIcon} alt="" className="w-5 h-5 opacity-60" />
                  </a>
                </div>
              </div>
              {/* Tech stack scrolling ticker */}
              <div className="relative z-20 border-t border-[rgba(0,0,0,0.08)] px-8 pt-4 pb-6 overflow-hidden">
                <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-tertiary)] mb-1">TECH STACK:</p>
                <div className="overflow-hidden">
                  <div
                    className="flex items-center gap-8"
                    style={{
                      animation: 'ticker 20s linear infinite',
                      width: 'max-content',
                    }}
                  >
                    {[...techLogos, ...techLogos].map((src, i) => (
                      <img key={i} src={src} alt="" className="h-8 object-contain flex-shrink-0" style={{ maxWidth: '57px' }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Work Experience + DS Card — stacked on desktop, side-by-side on tablet */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 h-full">

              {/* Work Experience carousel */}
              <div className="flex flex-col h-full min-h-[200px]">
                <WorkExperienceCarousel />
              </div>

              {/* DS Card */}
              <a href="/design-systems" className="flex flex-col h-full min-h-[200px]">
                <AnimatedDSCard />
              </a>
            </div>
          </div>

          {/* Case study cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {/* Card 1 — Stats-based (Milk Moovement) */}
            <a href="/case-studies/mm-ia" className="flex-1 min-w-0 bg-white rounded-[6px] border border-[rgba(0,0,0,0.08)] p-5 flex flex-col gap-5 transition-shadow duration-[250ms] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
              <div className="bg-[#e5f8fb] px-2 py-[3px] rounded-[4px] self-start">
                <p className="font-mono font-semibold text-[12px] leading-[18px] text-[#008394] uppercase">CASE STUDY</p>
              </div>
              <AnimatedStatCard stats={[
                {
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#36CBC6" strokeWidth="1.5"><path d="M16 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></svg>,
                  label: 'User satisfactory score', value: 92, color: '#36CBC6', maxWidth: 196,
                },
                {
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B96A3" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                  label: 'Sales engineer time saved', value: 50, color: '#0B96A3', maxWidth: 113,
                },
                {
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F7255" strokeWidth="1.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
                  label: 'Power user productivity increase', value: 24, color: '#2F7255', maxWidth: 48,
                },
              ]} />
              <div className="flex flex-col gap-3">
                <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-primary)]">Turning Operational Chaos into Clear Workflows</p>
                <div className="flex items-center gap-[10px]">
                  <img src={imgMilkMoovementLogo} alt="Milk Moovement" className="w-6 h-6 object-contain" />
                  <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)]">MILK MOOVEMENT</p>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-50" />
                  <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)]">B2B</p>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-50" />
                  <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)]">AGRITECH</p>
                </div>
              </div>
            </a>

            {/* Card 2 — Procare case study image */}
            <a href="/case-studies/procare-curriculum" className="flex-1 min-w-0 bg-white rounded-[6px] border border-[rgba(0,0,0,0.08)] p-5 flex flex-col gap-5 transition-shadow duration-[250ms] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
              <div className="bg-[#e5f8fb] px-2 py-[3px] rounded-[4px] self-start">
                <p className="font-mono font-semibold text-[12px] leading-[18px] text-[#008394] uppercase">CASE STUDY</p>
              </div>
              <div className="flex items-center justify-center overflow-hidden rounded-[6px] bg-[#f8fafd] h-[184px]">
                <img src="https://res.cloudinary.com/du0witbcr/image/upload/v1780436157/01_PC-Header_fz46uj.png" alt="Procare case study" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-primary)]">Designing Procare&apos;s First EdTech Product Line</p>
                <div className="flex items-center gap-[10px]">
                  <div className="w-6 h-6 rounded-full bg-[#e3f9fb] flex items-center justify-center">
                    <img src="/assets/7d9bc9e1-da37-473f-9614-aa3a5400ec0f.png" alt="Procare" className="w-[18px] h-[18px] object-contain" />
                  </div>
                  <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)]">PROCARE</p>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-50" />
                  <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)]">B2B</p>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-50" />
                  <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)]">EDTECH</p>
                </div>
              </div>
            </a>

            {/* Card 3 — Third case study */}
            <div className="flex-1 min-w-0 bg-white rounded-[6px] border border-[rgba(0,0,0,0.08)] p-5 flex flex-col gap-5">
              <div className="bg-[#e5f8fb] px-2 py-[3px] rounded-[4px] self-start">
                <p className="font-mono font-semibold text-[12px] leading-[18px] text-[#008394] uppercase">CASE STUDY</p>
              </div>
              <div className="flex items-center justify-center h-[184px] overflow-hidden rounded-[6px] bg-[#f8fafd]">
                <video autoPlay muted loop playsInline className="w-full h-full object-contain">
                  <source src="https://res.cloudinary.com/du0witbcr/video/upload/v1780439788/617076a6ef5d8c80966934a6_Engagement_Video_xnnyrt.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-primary)]">From Paper to Playground: Daily Activity Logging for Teachers</p>
                <div className="flex items-center gap-[10px]">
                  <div className="w-6 h-6 rounded-full bg-[#e3f9fb] flex items-center justify-center">
                    <img src="/assets/7d9bc9e1-da37-473f-9614-aa3a5400ec0f.png" alt="Procare" className="w-[18px] h-[18px] object-contain" />
                  </div>
                  <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)]">PROCARE</p>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-50" />
                  <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)]">B2B2C</p>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-50" />
                  <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)]">CHILDCARETECH</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured case study — full width */}
          <div className="relative rounded-[6px] overflow-hidden" style={{ minHeight: '312px' }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ objectPosition: 'center bottom' }}
            >
              <source src="https://res.cloudinary.com/du0witbcr/video/upload/v1780440213/tanker-truck-moving-along-highway-near-canal-and-residential-area-SBV-352206914-HD_icv10m.mp4" type="video/mp4" />
            </video>
            {/* Blue gradient: solid on mobile, fades right on desktop */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #00A3F6 0%, #00A3F6 35%, rgba(0,163,246,0.85) 65%, rgba(0,163,246,0.55) 100%)' }}
            />
            {/* Extra bottom-to-top fade so text is legible on mobile */}
            <div
              className="absolute inset-0 pointer-events-none lg:hidden"
              style={{ background: 'rgba(0,163,246,0.35)' }}
            />
            <div className="relative z-10 p-6 md:p-10 flex flex-col gap-3 w-full lg:max-w-[515px]">
              <div className="flex items-center gap-1 border border-white px-2 py-2 rounded-[4px] self-start">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M9 21h6M12 17v4"/><path d="M9 8l2 2 4-4"/></svg>
                <p className="font-mono font-semibold text-[12px] leading-[18px] text-white uppercase">AI FEATURE</p>
              </div>
              <p className="text-[24px] leading-[32px] font-bold text-white">Moove - Schedule Autopilot</p>
              <p className="text-[18px] leading-[28px] text-white">
                Designing the interface that lets dairy cooperatives trust a machine learning engine with their most expensive weekly decision — where to send hundreds of loads of raw milk
              </p>
              <a
                href="/ai-projects/moove-schedule-autopilot"
                className="self-start mt-1 flex items-center justify-center px-4 py-2 rounded-[4px] border border-white font-mono text-[14px] leading-[22px] uppercase text-white whitespace-nowrap"
              >
                Read Case Study
              </a>
            </div>
          </div>

        </main>
        <Footer />
      </div>
    </div>
  )
}
