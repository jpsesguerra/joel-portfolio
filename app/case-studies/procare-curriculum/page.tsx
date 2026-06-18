'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { SideNav } from '@/components/navigation/SideNav'
import { Header } from '@/components/navigation/Header'
import { MobileNav } from '@/components/navigation/MobileNav'
import { Chapters } from '@/components/navigation/Chapters'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { Footer } from '@/components/Footer'
import { ResultCard } from '@/components/case-study/ResultCard'
import { LearningRow } from '@/components/case-study/LearningRow'
import { DesignChapterBlock } from '@/components/case-study/DesignChapterBlock'

// ─── Assets (Cloudinary CDN) ──────────────────────────────────────────────────
const imgProcareLogo   = '/procare-logo.png'
const imgHero          = 'https://res.cloudinary.com/du0witbcr/image/upload/v1780436157/01_PC-Header_fz46uj.png'
const imgProblems      = 'https://res.cloudinary.com/du0witbcr/image/upload/v1780436157/02_PC-Problems_bc1c5v.png'
const imgDiscovery1    = 'https://res.cloudinary.com/du0witbcr/image/upload/v1780436158/03_Research_1_j7slif.png'
const imgDiscovery2    = 'https://res.cloudinary.com/du0witbcr/image/upload/v1780436158/04_Research_2_idoo3x.png'
const imgDataArch      = 'https://res.cloudinary.com/du0witbcr/image/upload/v1780436158/05_Design_1_ejjiia.png'
const imgLessons       = 'https://res.cloudinary.com/du0witbcr/image/upload/v1780436159/06_Design_2_wc5e9j.png'
const imgLessonDetail  = 'https://res.cloudinary.com/du0witbcr/image/upload/v1780436160/07_Design_3_rdxezl.png'
const imgAssessment    = 'https://res.cloudinary.com/du0witbcr/image/upload/v1780436160/08_Design_4.1_ocv8cy.png'
const imgTeacherFlow   = 'https://res.cloudinary.com/du0witbcr/image/upload/v1780436161/09_Design_4.2_qlakyl.png'
const imgPortfolioSend = 'https://res.cloudinary.com/du0witbcr/image/upload/v1780436162/10_Design_5_ocpfdh.png'
const imgLbpMarketing  = 'https://res.cloudinary.com/du0witbcr/image/upload/v1780436163/11_Design_6_okpzh9.png'
const imgConference    = '/case-studies/procare-curriculum/screenshot-1.png'
const imgResults       = '/case-studies/procare-curriculum/screenshot-2.png'

// ─── Click-to-play video component ───────────────────────────────────────────
function ClickToPlayVideo({ thumbnailSrc, embedSrc }: { thumbnailSrc: string; embedSrc: string }) {
  const [playing, setPlaying] = useState(false)
  const wrapStyle: React.CSSProperties = {
    position: 'relative', paddingBottom: '56.25%', height: 0,
    overflow: 'hidden', borderRadius: '20px', boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
  }
  if (playing) {
    return (
      <div style={wrapStyle}>
        <iframe
          src={`${embedSrc}?autoplay=1`}
          allow="autoplay; fullscreen"
          frameBorder={0}
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '20px' }}
        />
      </div>
    )
  }
  return (
    <div style={{ ...wrapStyle, cursor: 'pointer' }} onClick={() => setPlaying(true)}>
      <Image src={thumbnailSrc} alt="Video thumbnail" fill style={{ objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 80, height: 80, background: 'rgba(0,0,0,0.6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 0, height: 0, borderLeft: '22px solid white', borderTop: '14px solid transparent', borderBottom: '14px solid transparent', marginLeft: 6 }} />
        </div>
      </div>
    </div>
  )
}

// ─── Animation helpers ────────────────────────────────────────────────────────
const viewOpts = { once: true, margin: '-80px' } as const

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewOpts}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Page chapters ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: 'overview',   label: 'Overview' },
  { id: 'problem',    label: 'Problem' },
  { id: 'discovery',  label: 'Discovery & Research' },
  { id: 'design',     label: 'Design' },
  { id: 'conference', label: 'Conference Moment' },
  { id: 'results',    label: 'Results' },
  { id: 'learnings',  label: 'Learnings' },
]

// ─── Image caption helper ─────────────────────────────────────────────────────
function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] leading-[18px] text-[var(--color-system-text-secondary)] mt-3">{children}</p>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProcareCurriculumCaseStudy() {
  return (
    <div className="flex min-h-screen bg-[var(--color-system-background)]">
      <SideNav />
      <MobileNav />

      <div className="flex flex-col flex-1 min-w-0 pt-[60px] md:pt-0">
        <Header pageTitle="Case Studies" />

        <main className="flex-1">

          {/* ── Breadcrumb ───────────────────────────────────────────────── */}
          <div className="px-10 py-4 border-b border-[var(--color-system-border)]">
            <Breadcrumb
              items={[
                { label: 'Case Studies', href: '/case-studies' },
                { label: "Designing Procare's First EdTech Product Line" },
              ]}
            />
          </div>

          {/* ── Body: Chapters + Sections ─────────────────────────────────── */}
          <div className="pl-[40px] pt-[40px]">
            <div className="flex gap-[40px] items-start">
            <Chapters items={CHAPTERS} />

            <div className="flex-1 min-w-0 max-w-[842px] flex flex-col divide-y divide-[var(--color-system-border)]">

              {/* ══ HERO ════════════════════════════════════════════════════ */}
              <section className="pb-10">
                {/* Meta chips */}
                <FadeUp className="flex items-center gap-3 mb-6">
                  <Image src={imgProcareLogo} alt="Procare" width={20} height={20} className="object-contain opacity-70" />
                  <span className="font-mono text-[11px] leading-[16px] uppercase text-[var(--color-system-text-tertiary)]">Procare</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-system-text-tertiary)] opacity-40" />
                  <span className="font-mono text-[11px] leading-[16px] uppercase text-[var(--color-system-text-tertiary)]">B2B</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-system-text-tertiary)] opacity-40" />
                  <span className="font-mono text-[11px] leading-[16px] uppercase text-[var(--color-system-text-tertiary)]">EdTech</span>
                </FadeUp>

                {/* Title */}
                <FadeUp delay={0.05} className="mb-6">
                  <h1 className="text-[40px] leading-[48px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.4px]">
                    Designing Procare&apos;s First EdTech Product Line
                  </h1>
                </FadeUp>

                {/* Hero image */}
                <FadeUp delay={0.1} className="mb-6">
                  <div className="rounded-[12px] overflow-hidden w-full">
                    <Image src={imgHero} alt="Procare curriculum platform" width={1600} height={900} className="w-full h-auto object-cover" />
                  </div>
                </FadeUp>

                {/* Meta row */}
                <FadeUp delay={0.15} className="mb-6">
                  <div className="border-t border-[var(--color-system-border)] pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'ROLE',     value: 'Senior Product Designer' },
                      { label: 'TIMELINE', value: 'Sep 2021 – Oct 2022' },
                      { label: 'PLATFORM', value: 'Web, iOS, Android' },
                      { label: 'TOOLS',    value: 'Figma, Pendo, UserTesting, Intercom' },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex-1 min-w-0 bg-[var(--color-system-background-02)] border border-[var(--color-system-border)] rounded-[8px] px-5 py-4 flex flex-col gap-1">
                        <p className="font-mono text-[10px] leading-[16px] uppercase text-[var(--color-system-text-secondary)]">{label}</p>
                        <p className="text-[14px] leading-[20px] font-medium text-[var(--color-system-text-primary)]">{value}</p>
                      </div>
                    ))}
                  </div>
                </FadeUp>

                {/* 3 KPI Result Cards */}
                <FadeUp delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <ResultCard metric="$20M"   label="ARR Pipeline Generated" subLabel="New revenue directly attributed to the curriculum and assessment product line" />
                    <ResultCard metric="1,600+" label="Schools Enrolled"        subLabel="In the first year post-launch, across Procare's SMB customer base" />
                    <ResultCard metric="130K+"  label="Teachers Reached"        subLabel="Already using Procare daily — curriculum added value without adding friction" />
                  </div>
                </FadeUp>
              </section>

              {/* ══ 00 / OVERVIEW ═══════════════════════════════════════════ */}
              <section id="overview" className="py-10">
                <FadeUp className="mb-8">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">00 / OVERVIEW</p>
                  <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.16px] mb-3">
                    End-to-End, From Strategy to Shipped
                  </h2>
                  <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)]">
                    Procare Solutions was the largest childcare software company in North America — but they had no EdTech product. I was brought in to help design a pioneering curriculum and assessment platform from scratch: a new product line that needed to earn its place inside a tool 130K+ teachers relied on every day.
                  </p>
                </FadeUp>

                {/* My Role */}
                <FadeUp className="mb-6">
                  <p className="text-[20px] leading-[28px] font-bold text-[var(--color-system-text-primary)] mb-3">My Role</p>
                  <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)]">
                    I was part of the early strategy sessions where these market opportunities were framed and evaluated. My contribution spanned the full product lifecycle — from the first customer interviews to standing in front of thousands of childcare operators co-presenting the finished product.
                  </p>
                </FadeUp>

                {/* 6 contribution tiles */}
                <FadeUp>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: 'Discovery & Research',       body: 'Customer interviews, pain point synthesis, partnership evaluation' },
                      { title: 'Partnership Design',          body: 'Direct collaboration with LBP to map their content structure into Procare\'s platform' },
                      { title: 'Curriculum Data Architecture',body: 'Defining the tag and keyword structure that made 4,000+ lessons searchable' },
                      { title: 'Go-to-Market Design',         body: 'In-product upsell flows, marketing landing pages, and onboarding materials' },
                      { title: 'Product Design',              body: 'End-to-end ownership of lesson planner, observation tool, assessments, and portfolio reports' },
                      { title: 'External Representation',     body: "Featured as co-presenter in LBP's industry webinar series, demoing the product live to childcare operators nationwide" },
                    ].map((card) => (
                      <div key={card.title} className="bg-[var(--color-system-background-02)] border border-[var(--color-system-border)] rounded-[8px] p-5 flex flex-col gap-1">
                        <p className="text-[14px] leading-[20px] font-semibold text-[var(--color-system-text-primary)]">{card.title}</p>
                        <p className="text-[13px] leading-[20px] text-[var(--color-system-text-secondary)]">{card.body}</p>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </section>

              {/* ══ 01 / PROBLEM ════════════════════════════════════════════ */}
              <section id="problem" className="py-10">
                <FadeUp className="mb-6">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">01 / PROBLEM</p>
                  <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.16px]">
                    Three Broken Systems, One Platform to Fix Them
                  </h2>
                </FadeUp>

                <FadeUp className="mb-8">
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1 min-w-0 flex flex-col gap-3">
                      <p className="text-[20px] leading-[28px] font-bold text-[var(--color-system-text-primary)]">The Business Opportunity</p>
                      <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)]">
                        Procare&apos;s internal analysis identified an ~$85M addressable market for curriculum and student assessments — the #1 ranked growth opportunity ahead of payroll services and CRM. With 130K+ teachers already using the platform daily, Procare had a delivery channel no curriculum company could replicate. The question wasn&apos;t whether to build this. It was how.
                      </p>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col gap-3">
                      <p className="text-[20px] leading-[28px] font-bold text-[var(--color-system-text-primary)]">The Strategic Decision</p>
                      <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)]">
                        Rather than build curriculum content from scratch, I helped evaluate a partnership-first approach. After assessing 7+ curriculum providers against economics, integration willingness, and content quality, Learning Beyond Paper (LBP) emerged as the right launch partner — research-backed, willing to integrate fully, and eager to sign an exclusivity window for Procare&apos;s SMB market.
                      </p>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp>
                  <div className="w-full overflow-hidden rounded-[8px]">
                    <Image src={imgProblems} alt="Three broken systems" width={1600} height={900} className="w-full h-auto object-cover" />
                  </div>
                </FadeUp>
              </section>

              {/* ══ 03 / DISCOVERY & RESEARCH ═══════════════════════════════ */}
              <section id="discovery" className="py-10">
                <FadeUp className="mb-6">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">02 / Discovery & Research</p>
                  <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.16px] mb-3">
                    Talk to the Schools First, Design Second
                  </h2>
                  <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)]">
                    Before any design work started, I participated in stakeholder interviews, competitive research, and curriculum partner evaluations alongside the Senior PM and Product Ops team. We weren&apos;t validating a feature — we were deciding what category Procare should compete in, and how.
                  </p>
                </FadeUp>

                <FadeUp className="mb-4">
                  <div className="w-full overflow-hidden rounded-[8px]">
                    <Image src={imgDiscovery1} alt="Discovery research" width={1600} height={900} className="w-full h-auto object-cover" />
                  </div>
                </FadeUp>

                <FadeUp>
                  <div className="w-full overflow-hidden rounded-[8px]">
                    <Image src={imgDiscovery2} alt="Assumptions mapping" width={1600} height={900} className="w-full h-auto object-cover" />
                  </div>
                </FadeUp>
              </section>

              {/* ══ 03 / DESIGN ═════════════════════════════════════════════ */}
              <section id="design" className="py-10">
                <FadeUp className="mb-8">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">03 / DESIGN</p>
                  <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.16px]">
                    Six Interconnected Systems, One Cohesive Experience
                  </h2>
                </FadeUp>

                <div className="flex flex-col gap-6">

                  {/* Design 01 — Curriculum Data Architecture */}
                  <FadeUp>
                    <DesignChapterBlock badgeNumber="Design 01" title="Curriculum Data Architecture — Making 4,000 Lessons Useful">
                      <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] mb-6">
                        Before any UI could be designed, the LBP lesson catalog needed structure.
                      </p>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 min-w-0 text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] flex flex-col gap-4">
                          <p>I worked with engineering and LBP to define a tagging system organized around age group (Infants through Pre-K 4), activity category (STEAM, Language &amp; Literacy, etc.), week numbers, and teacher-attached milestones.</p>
                          <p>Each lesson also carried two PDF attachments: a Home Connection doc for parents and a Teacher&apos;s Lesson Guide with step-by-step classroom instructions. Getting this right meant teachers could filter to exactly what they needed — instead of scrolling through 4,000 cards.</p>
                        </div>
                        <div className="w-full md:w-[45%]">
                          <Image src={imgDataArch} alt="Curriculum data architecture" width={1600} height={900} className="w-full h-auto object-cover rounded-[8px]" />
                        </div>
                      </div>
                    </DesignChapterBlock>
                  </FadeUp>

                  {/* Design 02 — Weekly Lesson Planner */}
                  <FadeUp>
                    <DesignChapterBlock badgeNumber="Design 02" title="Weekly Lesson Planner">
                      <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] mb-6">
                        The lesson planning calendar was the center of the daily teacher experience.
                      </p>
                      <div className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] flex flex-col gap-4 mb-6">
                        <p>The design needed to communicate a lot at once — which rooms were planned, what lesson types were covered, and where the gaps were — without overwhelming anyone.</p>
                        <p>Color-coded STEAM badges, room filtering, and a persistent &quot;+ Add Lesson&quot; affordance let teachers and directors plan a full week&apos;s curriculum in under two minutes. A director could see all rooms at once; a teacher could focus only on their classroom.</p>
                      </div>
                      <div className="border border-[var(--color-system-border)] rounded-[6px] overflow-hidden">
                        <Image src={imgLessons} alt="Weekly lesson planner" width={1600} height={900} className="w-full h-auto object-cover" />
                      </div>
                      <Caption>
                        <strong>Final lesson planner</strong> — Color-coded activity categories (STEAM, Cognitive, Interactive Reading, Language &amp; Literacy) let teachers instantly scan for coverage gaps across the week.
                      </Caption>
                    </DesignChapterBlock>
                  </FadeUp>

                  {/* Design 03 — Lesson Detail & Custom Builder */}
                  <FadeUp>
                    <DesignChapterBlock badgeNumber="Design 03" title="Lesson Detail & Custom Builder">
                      <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] mb-6">
                        Every lesson was accessible at a glance through a detail modal.
                      </p>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 min-w-0 text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] flex flex-col gap-4">
                          <p>Every lesson was accessible at a glance through a detail modal: title, full description, learning outcome, age label, and PDF attachments — everything needed to prepare or share. Teachers could also create and edit their own lessons from scratch, attaching custom guides and milestone tags.</p>
                          <p>This became the critical bridge between LBP&apos;s third-party content and each school&apos;s own assessment framework. A teacher could take any LBP lesson and tie it to the milestones they needed to track for compliance.</p>
                        </div>
                        <div className="w-full md:w-[38%]">
                          <Image src={imgLessonDetail} alt="Lesson detail and custom builder" width={1600} height={900} className="w-full h-auto object-cover rounded-[8px]" />
                        </div>
                      </div>
                    </DesignChapterBlock>
                  </FadeUp>

                  {/* Design 05 — Observation & Assessment */}
                  <FadeUp>
                    <DesignChapterBlock badgeNumber="Design 05" title="Observation & Assessment Workflow Built from Scratch">
                      <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] mb-6">
                        Procare had no assessment tool before this initiative. I designed it from the ground up.
                      </p>
                      <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] mb-6">
                        I designed it from the ground up — and the research we&apos;d done before touching a single frame made sure it was built around how teachers actually worked, not how we imagined they might.
                      </p>
                      <div className="w-full overflow-hidden rounded-[8px] mb-3">
                        <Image src={imgAssessment} alt="Assessment workflow" width={1600} height={900} className="w-full h-auto object-cover" />
                      </div>
                      <Caption>
                        <strong>Assessment workflow</strong> — Observation counts, progress ratings, and category filters designed to match how teachers actually logged classroom data during the day.
                      </Caption>
                      <div className="w-full overflow-hidden rounded-[8px] mt-6">
                        <Image src={imgTeacherFlow} alt="Teacher observation flow" width={1600} height={900} className="w-full h-auto object-cover" />
                      </div>
                    </DesignChapterBlock>
                  </FadeUp>

                  {/* Design 05 — Portfolio Generation */}
                  <FadeUp>
                    <DesignChapterBlock badgeNumber="Design 05" title="Portfolio Generation & Parent Communication">
                      <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] mb-6">
                        The end of the assessment cycle needed to be actionable.
                      </p>
                      <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] mb-6">
                        The end of the assessment cycle needed to be actionable — not just a record, but something a school could put directly in a parent&apos;s hands. I designed the full flow: from selecting students, to writing a message, to sending via push notification through the parent&apos;s existing app.
                      </p>
                      <div className="w-full overflow-hidden rounded-[8px] mb-3">
                        <Image src={imgPortfolioSend} alt="Portfolio sending flow" width={1600} height={900} className="w-full h-auto object-cover" />
                      </div>
                      <Caption>
                        Portfolio flow — Teachers select students, write a personal note, and send comprehensive developmental reports directly to parents in one flow.
                      </Caption>
                    </DesignChapterBlock>
                  </FadeUp>

                  {/* Design 06 — In-Product Upsell */}
                  <FadeUp>
                    <DesignChapterBlock badgeNumber="Design 06" title="In-Product Upsell & LBP Landing Page">
                      <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] mb-6">
                        Getting existing Procare customers to adopt the add-on required designing the discovery and conversion experience from scratch.
                      </p>
                      <div className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] flex flex-col gap-4 mb-6">
                        <p>I designed the in-product upsell modal (surfaced inside Lesson Plans for non-subscribers), empty state marketing for the All Lessons tab, and an external landing page for the Procare + LBP integration.</p>
                        <p>The landing page drove the initial pilot signups and served as the primary conversion tool for the $50/month promotional launch pricing — which was later grandfathered in for early adopters at 50% off the standard rate.</p>
                      </div>
                      <div className="w-full overflow-hidden rounded-[8px]">
                        <Image src={imgLbpMarketing} alt="LBP marketing landing page" width={1600} height={900} className="w-full h-auto object-cover" />
                      </div>
                    </DesignChapterBlock>
                  </FadeUp>

                </div>
              </section>

              {/* ══ THE CONFERENCE MOMENT ════════════════════════════════════ */}
              <section id="conference" className="py-10">
                <FadeUp className="mb-6">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">04 / THE CONFERENCE MOMENT</p>
                  <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.16px] mb-6">
                    When the Partner Trusts You to Represent Both Brands
                  </h2>
                  <div className="mb-6">
                    <ClickToPlayVideo
                      thumbnailSrc="https://res.cloudinary.com/du0witbcr/image/upload/v1775758811/Screenshot_2026-04-09_at_2.18.06_PM_bms8gm.png"
                      embedSrc="https://fast.wistia.net/embed/iframe/sk9ph8l8qa"
                    />
                  </div>
                  <div className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)] flex flex-col gap-4">
                    <p>One thing that doesn&apos;t often show up in case studies: I became a named co-presenter for Learning Beyond Paper&apos;s industry webinar series — &quot;What a 100% Digital Curriculum Can Do for Your Child Care Center.&quot;</p>
                    <p>Alongside LBP&apos;s COO and VP of Curriculum, I conducted the live product demo for an audience of childcare directors and owners. I walked them through the lesson catalog, weekly planner, mobile teacher experience, parent sharing flow, and resource library — then fielded live Q&amp;A about the integration.</p>
                    <p>Getting credited as &quot;Joel Esguerra, Sr. Product Designer, Procare Solutions&quot; in that webinar wasn&apos;t just a nice moment. It reflected how deeply I&apos;d built both the product knowledge and the cross-company relationship. When the people who built the curriculum wanted someone from Procare to explain how it worked in front of thousands of customers — they called the designer.</p>
                  </div>
                </FadeUp>
              </section>

              {/* ══ 05 / RESULTS ════════════════════════════════════════════ */}
              <section id="results" className="py-10">
                <FadeUp className="mb-6">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">05 / RESULTS</p>
                  <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.16px]">
                    From Zero to a Product Line That Changed the Business
                  </h2>
                </FadeUp>

                {/* Results row 1 */}
                <FadeUp className="flex flex-col sm:flex-row gap-4 mb-4">
                  <ResultCard metric="60"   label="Schools Enrolled"    subLabel="in the LBP pilot in the first 30 days of launch" />
                  <ResultCard metric="154"  label="Schools Onboarded"   subLabel="by September 2022 — within the first full pilot period" />
                  <ResultCard metric="3+"   label="Partnerships"        subLabel="LBP at launch, Marco Polo, ABC mouse and Lakeshore Learning in Year 2" />
                </FadeUp>

                {/* Results row 2 */}
                <FadeUp className="flex flex-col sm:flex-row gap-4 mb-6">
                  <ResultCard metric="$20M+"  label="ARR Pipeline Generated" subLabel="New revenue directly attributed to the curriculum and assessment product line" />
                  <ResultCard metric="$1.75B" label="Procare acquisition"     subLabel="Procare acquired by Roper Technologies — with early learning cited as part of the product portfolio that drove valuation." />
                  <ResultCard metric="0 → 1"  label="EdTech Product"          subLabel="Procare had no EdTech product before this initiative. I designed the category, the partnership model, and every screen from scratch." />
                </FadeUp>

                <FadeUp>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '20px', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
                    <iframe
                      src="https://fast.wistia.net/embed/iframe/vgj1toinnw"
                      allowTransparency={true}
                      frameBorder={0}
                      scrolling="no"
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    />
                  </div>
                </FadeUp>

              </section>

              {/* ══ WHAT I LEARNED ══════════════════════════════════════════ */}
              <section id="learnings" className="py-10">
                <FadeUp className="mb-6">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">06 / WHAT I LEARNED</p>
                  <h2 className="text-[40px] leading-[48px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.4px]">
                    Designing for Acquisition
                  </h2>
                </FadeUp>

                <FadeUp>
                  <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-[6px] overflow-hidden">
                    <LearningRow
                      title="Business case and UX are the same work"
                      body="The most impactful design decisions weren't interface choices — they were earlier, in how we structured the data, chose the partnership, and sequenced the rollout. Understanding the strategic context made the design work matter beyond the screen."
                    />
                    <LearningRow
                      title="Research protects phasing"
                      body="The instinct to design a brand-new assessment tool and the lesson planner simultaneously would have been wrong. Launching the curriculum first and waiting for real usage data meant the assessment workflow was built on behavioral evidence, not assumptions."
                    />
                    <LearningRow
                      title="Relationships are part of the design"
                      body="The trust I built with the LBP team — from early integration conversations to co-presenting webinars together — made the partnership more functional and the product more coherent. When your design crosses company lines, the relationship work is how good design gets shipped."
                    />
                    <LearningRow
                      title="Build in sequence, not in parallel"
                      body="Lesson planning first, then assessments, then portfolio reporting. Each layer depended on data from the one before it. Designing the system in the right order meant every decision was grounded in real evidence rather than product speculation."
                      isLast
                    />
                  </div>
                </FadeUp>
              </section>

              {/* ── Recommendation ───────────────────────────────────────────── */}
              <section className="py-10">
                <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-[6px] px-4 py-5 flex flex-col gap-5">
                  <div className="bg-[var(--color-system-background-02)] rounded-[8px] px-4 py-2 flex flex-col gap-2">
                    <p className="text-[14px] leading-[22px] text-[var(--color-text-primary)]">★★★★★</p>
                    <p className="text-[11px] leading-[18px] text-[var(--color-text-primary)]">What separates Joel is how he operates at the intersection of product and design. He doesn&apos;t wait to be handed a problem statement — he helps shape it. Joel consistently surfaces the actual problem underneath the one being debated, articulates it clearly enough that engineers and stakeholders align faster, and moves into execution without losing that clarity. Most designers translate requirements. Joel challenges them. His collaboration style creates alignment, not just agreement — and his work lands with less friction because the people who need to build it were part of understanding why it matters.</p>
                  </div>
                  <div className="flex items-start justify-between">
                    <a href="https://www.linkedin.com/in/stephenanastasi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                      <Image src="/rec-stephen.jpg" alt="Stephen Anastasi" width={40} height={40} className="rounded-full object-cover flex-shrink-0" />
                      <div>
                        <p className="text-[14px] leading-[20px] font-bold text-[var(--color-text-primary)]">Stephen Anastasi</p>
                        <p className="text-[12px] leading-[18px] text-[var(--color-text-primary)]">Dir. of Product Management</p>
                      </div>
                    </a>
                    <Image src="/assets/06c24fb7-f2ec-4e83-8247-d40dfdb20e2f.png" alt="" width={77} height={40} className="object-contain" />
                  </div>
                </div>
              </section>

            </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  )
}
