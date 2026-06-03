'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { SideNav } from '@/components/navigation/SideNav'
import { Header } from '@/components/navigation/Header'
import { MobileNav } from '@/components/navigation/MobileNav'
import { Chapters } from '@/components/navigation/Chapters'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { Callout } from '@/components/case-study/Callout'
import { Footer } from '@/components/Footer'
import { ResultCard } from '@/components/case-study/ResultCard'
import { LearningRow } from '@/components/case-study/LearningRow'
import { FindingRow } from '@/components/case-study/FindingRow'
import { DataTableRow } from '@/components/case-study/DataTableRow'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'

// ─── Assets (Figma MCP URLs — valid 7 days from build) ───────────────────────
const imgHero           = '/assets/a5342c4d-ace2-4294-82db-7d15f5cf8d84.png'
const imgScreenshot     = '/assets/35c46230-32b5-44f4-acc5-8c5c9347f481.png'
const imgIconWorkflow   = '/assets/edd0ee6a-946c-47a3-9aa5-874cd2db047c.svg'
const imgIconVisibility = '/assets/495ab1d0-3dc1-4e64-847f-12b50cc1b3bd.svg'
const imgIconAuto       = '/assets/200b2aa5-cbd3-4b86-a010-aca8d78945ae.svg'
const imgIconGoal           = '/assets/641e43d9-1700-4644-a208-ec5f485bae87.svg'
const imgIconHandshake      = '/assets/1c676c5a-0f8b-4000-9a79-280e41a0a28f.svg'
const imgIconPenTool        = '/assets/816ddb1f-7566-409c-a0a0-47d05fd9063d.svg'
const imgResearchScreenshot           = '/assets/9dda457d-429d-42d4-8f1b-4d7543d2baf8.png'
const imgMmLogo                       = '/mm-logo.png'
// ─── Designs section assets ───────────────────────────────────────────────────
const imgDemandPage                   = '/assets/15207f75-b3fb-4082-8322-c826a3843f4e.png'
const imgEditDemand                   = '/assets/162c9c91-785b-4d8b-97d0-39bc5c3dbcf0.png'
const imgEditPlantModal               = '/assets/e096f1b4-27c2-471a-917a-bb8b892263bf.png'
const imgBayManagement                = '/assets/522df80c-a76c-4da7-9bf2-c0160d69496f.png'
const imgWeightedCriteria             = '/assets/50038bee-cbcc-4f31-90aa-db6d5a06cbfe.png'
const imgScheduleAutopilot            = '/assets/55add535-f701-4244-b24d-02cafc704f54.png'
const imgSchedulingOld                = '/assets/9e6d3fbf-7c75-4ef0-955f-88f808dd4bc3.png'
const imgSchedulingNew                = '/assets/6cf8592e-091b-4f29-9f08-5c32bbc71705.png'
const imgPlantList                    = '/assets/75f4423a-b1db-4083-a55a-da929d789d06.png'
const imgAltMatch                     = '/assets/3ebd6d8b-be82-4149-a099-929e493cddef.png'
const imgFulfillmentChart             = '/assets/b4e23665-3526-46cd-a415-8981ad392c5b.png'
const imgIconFactory                  = '/assets/608a8b93-34ca-4aaf-9d78-33b210009cdc.svg'
const imgIconCheckmarkBadge           = '/assets/3403165b-20cb-4744-b5e9-6d1f3b94c6f5.svg'
const imgIconTankerTruck              = '/assets/d3e42c4d-9395-467f-9987-f9d377bf8da0.svg'
const imgIconComponent                = '/assets/96fb780a-2cee-4099-aea7-e26d628a525e.svg'
const imgTimelineDot                  = '/assets/ac79316e-d66b-45dd-a724-d229caed881e.svg'
const imgTimelineDotPivot             = '/assets/2aec1515-db8b-4897-9f4a-a96ea178031d.svg'
const imgIconSpeed                    = '/assets/b77dfc7a-18ef-4368-bcce-2e817aa5643f.svg'
const imgIconCheckList                = '/assets/04db2221-bd33-4418-9648-e6e88a971f89.svg'
const imgIconToggle                   = '/assets/360dc7fe-9396-403f-9544-2c395bd77dd9.svg'
const imgIconUserCheck                = '/assets/762fb4cd-0513-4b32-bd56-94586b557017.svg'
const imgIconTeaching                 = '/assets/66939bd2-1ac3-4e34-9407-4379bafd7f12.svg'
const imgIconLayer                    = '/assets/cc2a85a6-6c25-4681-a690-b0ecb60e98a3.svg'
const imgIconPropertyEdit             = '/assets/91a8a921-0da8-482e-8206-cd07ebb7a223.svg'
const imgPlayBtn                      = '/assets/c135a16c-f146-48ea-950e-a39646515c7b.svg'

// ─── Animation helpers ────────────────────────────────────────────────────────
const viewOpts = { once: true, margin: '-80px' } as const
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }

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

// ─── Count-up number ─────────────────────────────────────────────────────────
function CountUp({ to, prefix = '', suffix = '', duration = 1.8 }: { to: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const stop = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return stop.stop
  }, [inView, to, duration])

  return <span ref={ref}>{prefix}{val}{suffix}</span>
}

// ─── Problem card ─────────────────────────────────────────────────────────────
function ProblemCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewOpts}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex-1 min-w-0 bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md p-5 flex flex-col gap-3"
    >
      <div className="w-10 h-10 rounded-md bg-[var(--color-brand-lagoon-surface)] flex items-center justify-center flex-shrink-0">
        <img src={icon} alt="" className="w-6 h-6" aria-hidden />
      </div>
      <p className="text-[14px] leading-[20px] font-semibold text-[var(--color-system-text-primary)]">{title}</p>
      <p className="text-[12px] leading-[18px] text-[var(--color-system-text-secondary)]">{body}</p>
    </motion.div>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────
function CsSectionHeader({ tag, title, lead }: { tag: string; title: string; lead: string }) {
  return (
    <FadeUp className="flex flex-col gap-3 mb-8">
      <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)]">{tag}</p>
      <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.01em]">{title}</h2>
      <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)] max-w-[680px]">{lead}</p>
    </FadeUp>
  )
}

// ─── Page data ────────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: 'overview',  label: 'Overview' },
  { id: 'problem',   label: 'Problem' },
  { id: 'research',  label: 'Research' },
  { id: 'process',   label: 'Requirements' },
  { id: 'designs',   label: 'Designs' },
  { id: 'results',   label: 'Results' },
  { id: 'learnings', label: 'Learnings' },
]

const META = [
  { label: 'Role',     value: 'Sole Designer' },
  { label: 'Company',  value: 'Milk Moovement' },
  { label: 'Industry', value: 'AgriTech · Logistics' },
  { label: 'Duration', value: '~8 Months' },
  { label: 'Platform', value: 'Web App · B2B SaaS' },
]

// numeric: animate value; static: show display string as-is
const STATS: Array<
  | { animated: true;  value: number; suffix: string; label: string }
  | { animated: false; display: string;               label: string }
> = [
  { animated: true,  value: 2,   suffix: '%',  label: 'Transportation cost reduction in year one for California Dairies' },
  { animated: false, display: '30-40%',        label: 'Workflow efficiency improvement for transportation admins' },
  { animated: true,  value: 25,  suffix: '%',  label: 'Schedule efficiency improvement (DataDog + qualitative research)' },
  { animated: true,  value: 850, suffix: '+',  label: 'Loads per week matched by the AI scheduler for major co-ops' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MooveCaseStudy() {
  return (
    <div className="flex min-h-screen bg-[var(--color-system-background)]">
      <SideNav />
      <MobileNav />

      <div className="flex flex-col flex-1 min-w-0 pt-[60px] md:pt-0">
        <Header pageTitle="AI Projects" />

        <main className="flex-1">

          {/* ── Breadcrumb ─────────────────────────────────────────────── */}
          <div className="px-10 py-4 border-b border-[var(--color-system-border)]">
            <Breadcrumb
              items={[
                { label: 'AI Projects', href: '/ai-projects' },
                { label: 'Moove — Schedule Autopilot' },
              ]}
            />
          </div>

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="px-10 pt-10 pb-0 border-b border-[var(--color-system-border)] overflow-hidden">
            <div className="flex flex-col gap-6">
              {/* Metadata chips */}
              <FadeUp className="flex items-center gap-3">
                <img src={imgMmLogo} alt="Milk Moovement" className="w-5 h-5 object-contain opacity-70" />
                <span className="font-mono text-[11px] leading-[16px] uppercase text-[var(--color-system-text-tertiary)]">Milk Moovement</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-system-text-tertiary)] opacity-40" />
                <span className="font-mono text-[11px] leading-[16px] uppercase text-[var(--color-system-text-tertiary)]">B2B</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-system-text-tertiary)] opacity-40" />
                <span className="font-mono text-[11px] leading-[16px] uppercase text-[var(--color-system-text-tertiary)]">AI Feature</span>
              </FadeUp>

              {/* Title */}
              <FadeUp delay={0.05}>
                <h1 className="text-[56px] leading-[64px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.02em] max-w-[800px]">
                  Moove — Schedule Autopilot
                </h1>
              </FadeUp>

              {/* Description */}
              <FadeUp delay={0.1}>
                <p className="text-[18px] leading-[28px] text-[var(--color-system-text-secondary)]">
                  Designing the interface that lets dairy cooperatives trust a machine learning engine with their most expensive weekly decision — where to send hundreds of loads of raw milk.
                </p>
              </FadeUp>

              {/* Hero image */}
              <FadeUp delay={0.15} className="mt-4">
                <div className="rounded-t-lg overflow-hidden border border-b-0 border-[var(--color-system-border)] shadow-[var(--shadow-card)]">
                  <img
                    src={imgHero}
                    alt="Moove Schedule Autopilot interface"
                    className="w-full object-cover object-top"
                  />
                </div>
              </FadeUp>

              {/* Metadata row — below hero image, above stats */}
              <FadeUp delay={0.2}>
                <div className="flex flex-col md:flex-row gap-12 py-8 border-t border-[var(--color-system-border)]">
                  {META.map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <p className="font-mono text-[10px] leading-[16px] uppercase text-[var(--color-system-text-secondary)]">{label}</p>
                      <p className="text-[14px] leading-[20px] font-medium text-[var(--color-system-text-primary)]">{value}</p>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </section>

          {/* ── Stat Cards (teal) ─────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 px-4 md:px-10 gap-4 py-8 border-b border-[var(--color-system-border)]"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-[var(--color-brand-lagoon)] rounded-md p-6 flex flex-col gap-3"
              >
                <p className="text-[40px] leading-none font-bold text-white">
                  {stat.animated
                    ? <CountUp to={stat.value} suffix={stat.suffix} />
                    : stat.display}
                </p>
                <p className="text-[12px] leading-[18px] text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Body: Chapters + Sections ─────────────────────────────── */}
          <div className="pl-[40px] pt-[40px]">
            <div className="flex gap-[40px] items-start">
            <Chapters items={CHAPTERS} />

            <div className="flex-1 min-w-0 max-w-[842px] flex flex-col divide-y divide-[var(--color-system-border)]">

              {/* ── 00 Overview ────────────────────────────────────────── */}
              <section id="overview" className="pb-16">
                <CsSectionHeader
                  tag="00 / Overview"
                  title="Every gallon has a destination problem."
                  lead="This is the story of designing an AI scheduling tool that had to be trustworthy before it could be trusted."
                />

                <div className="flex gap-8">
                  {/* Body text — left column */}
                  <FadeUp className="flex-1 min-w-0">
                    <div className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] flex flex-col gap-4">
                      <p>
                        Dairy cooperative transportation teams build weekly schedules by hand. Each week, a scheduling
                        admin looks at hundreds of unassigned route loads — milk sitting at farms waiting to be picked
                        up — and manually decides which processing plant each load should go to.
                      </p>
                      <p>
                        It sounds manageable until you understand the variables: processor demand fluctuates daily,
                        plant receiving windows open and close due to equipment breakdowns, protein thresholds and
                        hauler contracts all change the math.
                      </p>
                      <p>
                        Moove was the ML-powered scheduling engine we built to close that gap. My job was to design
                        the system that would let non-technical users configure, trust, and ultimately own a machine
                        making hundreds of routing decisions at once.
                      </p>
                    </div>
                  </FadeUp>

                  {/* Info cards — right column */}
                  <div className="w-[320px] flex-shrink-0 flex flex-col gap-3">
                    {[
                      {
                        icon: imgIconGoal,
                        title: 'The Core Design Challenge',
                        body: 'Building an interface that bridges the gap between what an algorithm optimizes and what a transportation admin needs to feel in control.',
                      },
                      {
                        icon: imgIconHandshake,
                        title: 'Key Collaborators',
                        body: 'Product Manager, Tech Lead, Data Engineers, AI Architects — and direct collaboration with clients at CDI, UDA, and DFO.',
                      },
                      {
                        icon: imgIconPenTool,
                        title: 'Tools & Methods',
                        body: 'Figma, Figma Make (prototyping), Bolt (data-heavy prototypes), DataDog (behavioral analysis), FullStory, client co-design sessions.',
                      },
                    ].map((card, i) => (
                      <FadeUp key={i} delay={i * 0.07}>
                        <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md p-5 flex flex-col gap-3">
                          <div className="w-8 h-8 rounded-md bg-[var(--color-brand-lagoon-surface)] flex items-center justify-center flex-shrink-0">
                            <img src={card.icon} alt="" className="w-5 h-5" aria-hidden />
                          </div>
                          <p className="text-[13px] leading-[18px] font-semibold text-[var(--color-system-text-primary)]">{card.title}</p>
                          <p className="text-[12px] leading-[18px] text-[var(--color-system-text-secondary)]">{card.body}</p>
                        </div>
                      </FadeUp>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── 01 Problem ─────────────────────────────────────────── */}
              <section id="problem" className="py-16">
                <CsSectionHeader
                  tag="01 / Problem"
                  title="Manual scheduling is expensive by design."
                  lead="This is the story of designing an AI scheduling tool that had to be trustworthy before it could be trusted."
                />


              </section>

              {/* ── 02 Research ────────────────────────────────────────── */}
              <section id="research" className="py-16">
                <CsSectionHeader
                  tag="02 / Research"
                  title="Understanding the scheduler's mental model."
                  lead="Before designing any automation, we needed to understand exactly how experts made scheduling decisions — and what made them feel confident."
                />

                <FadeUp>
                  <div className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] flex flex-col gap-4 mb-10">
                    <p>
                      We ran structured interviews with three scheduling admins across CDI and DFO. Each session
                      involved a live think-aloud of their weekly scheduling workflow, followed by a deep-dive
                      into how they weigh trade-offs when multiple processors have similar costs.
                    </p>
                    <p>
                      The insight that changed everything: admins didn't want the algorithm to just give them the
                      answer. They wanted to understand <em>why</em> a schedule was good — so they could catch the
                      cases where it was wrong.
                    </p>
                  </div>
                </FadeUp>

                {/* Research Methods + Participants + Screenshot */}
                <FadeUp className="mb-8">
                  <div className="flex gap-6 items-start">
                    {/* Left: two cards stacked */}
                    <div className="flex-1 min-w-0 flex flex-col gap-4">
                      {/* Research Methods */}
                      <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md p-5 flex flex-col gap-3">
                        <p className="font-mono text-[10px] leading-[16px] uppercase text-[var(--color-system-text-secondary)]">Research Methods</p>
                        <div className="flex gap-8">
                          <div className="flex flex-col gap-2">
                            {['In-depth admin interviews', 'Loom prototype demos', 'End-to-end workflow mapping'].map(m => (
                              <div key={m} className="flex gap-2 items-center">
                                <span className="text-[var(--color-brand-primary)] text-[12px] leading-[18px] flex-shrink-0">↗</span>
                                <span className="text-[12px] leading-[18px] text-[var(--color-system-text-secondary)]">{m}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-col gap-2">
                            {['FullStory session review', 'DataDog behavioral analysis', 'Co-op stakeholder check-ins'].map(m => (
                              <div key={m} className="flex gap-2 items-center">
                                <span className="text-[var(--color-brand-primary)] text-[12px] leading-[18px] flex-shrink-0">↗</span>
                                <span className="text-[12px] leading-[18px] text-[var(--color-system-text-secondary)]">{m}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Research Participants */}
                      <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md p-5 flex flex-col gap-3">
                        <p className="font-mono text-[10px] leading-[16px] uppercase text-[var(--color-system-text-secondary)]">Research Participants</p>
                        <div className="border border-[var(--color-system-border)] rounded-md overflow-hidden">
                          {[
                            { org: 'UDA Transportation Admins', sessions: '3 sessions' },
                            { org: 'CDI Scheduling Team',       sessions: '4 sessions' },
                            { org: '3rd Party Hauling Admins',  sessions: '2 sessions' },
                            { org: 'DFO Stakeholders',          sessions: '3 sessions' },
                          ].map(({ org, sessions }, i, arr) => (
                            <div key={org} className={`flex items-center justify-between px-3 py-2 bg-[var(--color-system-background-02)] ${i < arr.length - 1 ? 'border-b border-[var(--color-system-border)]' : ''}`}>
                              <span className="text-[12px] leading-[18px] text-[var(--color-system-text-secondary)]">{org}</span>
                              <span className="text-[11px] leading-[16px] text-[var(--color-brand-primary)] font-mono">{sessions}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Right: screenshot */}
                    <div className="flex-1 min-w-0 rounded-md overflow-hidden border border-[var(--color-system-border)]">
                      <img src={imgResearchScreenshot} alt="Research workflow screenshot" className="w-full object-contain" />
                    </div>
                  </div>
                </FadeUp>

                {/* Customer Optimization Priority Map */}
                <FadeUp className="mb-10">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <p className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">Customer Optimization Priority Map</p>
                      <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">
                        Research revealed that each co-op had a distinct hierarchy of what the algorithm should optimize for. This directly shaped how I designed the criteria interface.
                      </p>
                    </div>
                    <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md overflow-hidden">
                      {/* Header */}
                      <div className="flex bg-[var(--color-system-background-02)] border-b border-[var(--color-system-border)]">
                        {['Co-op', 'Supl. Cost', 'Base Cost', 'Distance', 'Protein Level', 'Butterfat Level', 'Appt. Time'].map(h => (
                          <div key={h} className="flex-1 px-4 py-2">
                            <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-system-text-secondary)] whitespace-nowrap">{h}</p>
                          </div>
                        ))}
                      </div>
                      {/* Rows */}
                      {[
                        { coop: 'CDI',          vals: ['3','2','1','-','-','-'] },
                        { coop: 'UDA',          vals: ['-','-','4','2','3','1'] },
                        { coop: 'Prairie Farms', vals: ['1','-','2','-','-','-'] },
                        { coop: 'MMPA',         vals: ['2','-','-','-','-','1'] },
                      ].map(({ coop, vals }, i, arr) => (
                        <div key={coop} className={`flex items-center border-[var(--color-system-border)] ${i < arr.length - 1 ? 'border-b' : ''}`}>
                          <div className="flex-1 px-4 py-3">
                            <p className="text-[14px] leading-[20px] font-medium text-[var(--color-system-text-primary)]">{coop}</p>
                          </div>
                          {vals.map((v, j) => (
                            <div key={j} className="flex-1 px-4 py-3">
                              <p className="text-[14px] leading-[22px] text-[var(--color-system-text-primary)]">{v}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <p className="text-[12px] leading-[18px] text-[var(--color-system-text-secondary)] font-medium">
                      1 = highest priority. A single fixed optimization approach would fail all of them.
                    </p>
                  </div>
                </FadeUp>

                {/* Key Findings */}
                <FadeUp className="mb-10">
                  <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md overflow-hidden">
                    <FindingRow
                      number="F-01"
                      title="Trust is earned incrementally"
                      body="Admins won't delegate decisions to a machine they haven't seen fail gracefully first. Every unexplained output erodes confidence faster than it builds it."
                    />
                    <FindingRow
                      number="F-02"
                      title="Cost is not the only variable"
                      body="Relationship decisions, plant reliability history, and informal rules-of-thumb frequently override cost optimization. The algorithm needs to surface — not replace — this expertise."
                    />
                    <FindingRow
                      number="F-03"
                      title="The override UI is the trust UI"
                      body="Schedulers tested the algorithm by manually overriding its decisions. If overrides were easy and visible, they felt safe trusting the defaults."
                    />
                    <FindingRow
                      number="F-04"
                      title="Explanations must be in domain language"
                      body="'Lower haul cost' landed. 'Optimization score improved by 12%' did not. Every insight needed to connect to a number the admin already tracked."
                      isLast
                    />
                  </div>
                </FadeUp>

                {/* HMW */}
                <FadeUp>
                  <div className="bg-[var(--color-system-background-02)] border border-[var(--color-system-border)] rounded-md p-6">
                    <p className="font-mono text-[10px] leading-[16px] uppercase text-[var(--color-system-text-tertiary)] mb-3">Design Question</p>
                    <p className="text-[20px] leading-[28px] font-bold text-[var(--color-system-text-primary)]">
                      How do you design a sandbox that gives users confidence without making it feel like extra work?
                    </p>
                  </div>
                </FadeUp>
              </section>

              {/* ── 03 Requirements ────────────────────────────────────── */}
              <section id="process" className="py-16">
                <CsSectionHeader
                  tag="03 / Requirements"
                  title="Three layers. One coherent system."
                  lead="From research and close collaboration with the PM and data engineering team, we aligned on a layered architecture for the product. Three layers emerged — each solving a different class of design problem."
                />

                <FadeUp>
                  <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md overflow-hidden">
                    {/* Header */}
                    <div className="flex bg-[var(--color-system-background-02)] border-b border-[var(--color-system-border)]">
                      <div className="w-[140px] shrink-0 px-4 py-2">
                        <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-system-text-secondary)]">Layer</p>
                      </div>
                      <div className="flex-1 px-4 py-2">
                        <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-system-text-secondary)]">What it covers</p>
                      </div>
                      <div className="flex-1 px-4 py-2">
                        <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-system-text-secondary)]">Design problem</p>
                      </div>
                      <div className="w-[150px] shrink-0 px-4 py-2">
                        <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-system-text-secondary)]">Priority</p>
                      </div>
                    </div>
                    {/* Rows */}
                    {[
                      {
                        layer: 'Constraints',
                        covers: 'Plant-level rules the algorithm must respect before any optimization — eligible producers/haulers, trailer specs, protein thresholds, bay schedules, receiving windows, priority vs. balancing plant classification.',
                        problem: 'How do you make 100+ rules per plant feel manageable without hiding critical configuration?',
                        priority: 'MUST HAVE',
                        priorityColor: '#6aaa78',
                      },
                      {
                        layer: 'Optimization Criteria',
                        covers: 'The signals the algorithm uses to rank possible matches — route cost, distance, or component pricing (protein/fat-based value routing).',
                        problem: 'How do you surface complex ML criteria to domain experts who have zero ML background?',
                        priority: 'MUST HAVE',
                        priorityColor: '#6aaa78',
                      },
                      {
                        layer: 'Scheduling Interface',
                        covers: 'The core scheduling page — now serving both daily workflow and the AI-assisted matching workflow — with sandbox review, accept/reject, and apply-to-production controls.',
                        problem: 'How do you design a sandbox that gives users confidence without making it feel like extra work?',
                        priority: 'MUST HAVE',
                        priorityColor: '#6aaa78',
                      },
                      {
                        layer: 'Demand Visibility',
                        covers: 'Plant demand inputs (per milk type, per day) and a supply-vs-demand read across the full week that updates as the algorithm matches loads.',
                        problem: 'How do you show supply-demand balance across 12+ plants and 7 days in a scannable format?',
                        priority: 'SHOULD HAVE',
                        priorityColor: '#ff9c29',
                      },
                      {
                        layer: 'Audit & Override',
                        covers: 'Per-load alternative match suggestions with cost/distance comparisons, warning flags for constraint violations, undo/redo for accepted matches.',
                        problem: 'How do you preserve human authority without undermining trust in the algorithm?',
                        priority: 'SHOULD HAVE',
                        priorityColor: '#ff9c29',
                      },
                    ].map((row, i, arr) => (
                      <div key={i} className={`flex items-start ${i < arr.length - 1 ? 'border-b border-[var(--color-system-border)]' : ''}`}>
                        <div className="w-[140px] shrink-0 px-4 py-3">
                          <p className="text-[14px] leading-[20px] font-medium text-[var(--color-system-text-primary)]">{row.layer}</p>
                        </div>
                        <div className="flex-1 px-4 py-3">
                          <p className="text-[12px] leading-[18px] font-medium text-[var(--color-system-text-primary)]">{row.covers}</p>
                        </div>
                        <div className="flex-1 px-4 py-3">
                          <p className="text-[12px] leading-[18px] font-medium text-[var(--color-system-text-primary)]">{row.problem}</p>
                        </div>
                        <div className="w-[150px] shrink-0 px-4 py-3">
                          <span
                            className="inline-flex items-center px-2 py-1 rounded font-mono text-[11px] leading-[18px] uppercase text-white whitespace-nowrap"
                            style={{ backgroundColor: row.priorityColor }}
                          >
                            ● {row.priority}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </section>

              {/* ── 04 Designs ─────────────────────────────────────────── */}
              <section id="designs" className="py-16">
                <FadeUp className="flex flex-col gap-3 mb-8">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)]">04 / Designs</p>
                  <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.01em]">Three design challenges. One coherent experience.</h2>
                  <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)]">Each part of the product required a different kind of design judgment — from dense configuration UIs to a full rethink of how scheduling pages should work.</p>
                </FadeUp>

                {/* ── Design 01 ── */}
                <FadeUp className="mb-6">
                  <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-xl overflow-hidden">
                    {/* Chapter header */}
                    <div className="flex flex-col md:flex-row gap-6 items-start px-4 md:px-10 py-7 border-b border-[var(--color-system-border)]">
                      <span className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-brand-primary)] bg-[var(--color-brand-primary-surface)] px-2 py-1 rounded shrink-0">Design 01</span>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-[20px] leading-[28px] font-bold text-[var(--color-system-text-primary)]">Constraints — Plant Demand, Plant Profile &amp; Bay Management</h3>
                        <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">The foundation that made everything else possible. Without accurate constraints, the algorithm had no valid search space.</p>
                      </div>
                    </div>
                    {/* Chapter body */}
                    <div className="flex flex-col gap-10 p-10">
                      {/* Plant Demand Page */}
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0 flex flex-col gap-4">
                          <h4 className="text-[18px] leading-[26px] font-bold text-[var(--color-brand-primary)]">Plant Demand Page</h4>
                          <div className="flex flex-col gap-4 text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">
                            <p>The demand side needed to live in its own view, separate from the supply schedule. I designed a weekly demand page that showed each plant alongside its scheduled amount, actual demand, and the difference — giving scheduling admins an immediate read on where supply was tracking to meet commitments.</p>
                            <p>The page supported milk-type differentiation by client. For CDI, demand was tagged by type (organic, kosher, on-demand conventional). For simpler clients, everything was conventional. The system was flexible enough to accommodate both without requiring either to work around the other's configuration.</p>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 relative">
                          <img src={imgDemandPage} alt="Plant Demand Page" className="w-full rounded shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[var(--color-system-border)]" />
                          <div className="absolute bottom-[-20px] right-[-12px] w-[42%] rounded shadow-[0_8px_8px_rgba(0,0,0,0.12)] overflow-hidden border border-[var(--color-system-border)]">
                            <img src={imgEditDemand} alt="Edit Demand modal" className="w-full" />
                          </div>
                        </div>
                      </div>
                      {/* Plant Profile */}
                      <div className="flex gap-8 items-start pt-6">
                        <div className="flex-1 min-w-0 rounded shadow-[0_8px_8px_rgba(0,0,0,0.12)] overflow-hidden border border-[var(--color-system-border)]">
                          <img src={imgEditPlantModal} alt="Plant Profile configuration" className="w-full" />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col gap-3">
                          <h4 className="text-[18px] leading-[26px] font-bold text-[var(--color-brand-primary)]">Plant Profile — Rule Configuration</h4>
                          <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">Each plant got a dedicated configuration panel where scheduling admins could define the rules the algorithm had to respect before any optimization ran.</p>
                          {[
                            { icon: imgIconFactory,        title: 'Plant Type',              desc: 'On-demand, Organic, Kosher — determines which milk types can be routed to this plant' },
                            { icon: imgIconCheckmarkBadge, title: 'Receiving Priority',       desc: 'Priority Plants always receive loads first. Balancing Plants receive remaining supply to a configured minimum fill rate.' },
                            { icon: imgIconTankerTruck,    title: 'Trailer Constraints',      desc: 'Acceptable trailer types, minimum and maximum load sizes — prevents impossible assignments before they\'re suggested' },
                            { icon: imgIconComponent,      title: 'Component Requirements',   desc: 'Protein minimums, protein-priority flag, and ranked order among plants for high-component loads' },
                          ].map(({ icon, title, desc }) => (
                            <div key={title} className="flex gap-3 items-start bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded px-3 py-2">
                              <div className="w-6 h-6 rounded flex items-center justify-center bg-[var(--color-brand-primary-surface)] shrink-0">
                                <img src={icon} alt="" className="w-3.5 h-3.5" aria-hidden />
                              </div>
                              <div className="flex flex-col gap-0.5">
                                <p className="text-[12px] leading-[18px] font-medium text-[var(--color-system-text-primary)]">{title}</p>
                                <p className="text-[11px] leading-[16px] text-[var(--color-system-text-secondary)]">{desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Bay Management */}
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0 flex flex-col gap-4">
                          <h4 className="text-[18px] leading-[26px] font-bold text-[var(--color-brand-primary)]">Bay Management</h4>
                          <div className="flex flex-col gap-4 text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">
                            <p>Plants receive milk into bays — physical docking stations with their own receiving schedules, capacity limits, and downtime windows. I designed a bay management view within the plant profile that allowed admins to configure each bay independently.</p>
                            <p>A plant might have four bays but only two available on a given Tuesday due to maintenance. Without bay-level configuration, the algorithm couldn't know that — and would generate a schedule that was physically impossible to execute.</p>
                          </div>
                          <div className="bg-[var(--color-brand-primary-surface)] border border-[var(--color-brand-primary)] rounded-md px-6 py-5 text-center">
                            <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-brand-primary)] mb-1">Key design decision</p>
                            <p className="text-[14px] leading-[22px] text-[var(--color-system-text-primary)]">Bay management was built as a time-based calendar within the plant profile rather than a standalone page. This kept the context — which plant, which constraints — visible at all times while configuring bay windows.</p>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 rounded overflow-hidden border border-[var(--color-system-border)]">
                          <img src={imgBayManagement} alt="Bay Management calendar view" className="w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* ── Design 02 ── */}
                <FadeUp className="mb-6">
                  <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-6 items-start px-4 md:px-10 py-7 border-b border-[var(--color-system-border)]">
                      <span className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-brand-primary)] bg-[var(--color-brand-primary-surface)] px-2 py-1 rounded shrink-0">Design 02</span>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-[20px] leading-[28px] font-bold text-[var(--color-system-text-primary)]">Optimization Criteria — Designing Meaningful AI Control</h3>
                        <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">This required the most design judgment of the entire project. The algorithm could optimize against multiple criteria simultaneously. The question was how to surface this without requiring users to understand machine learning.</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 p-10">
                      {/* Core tension callout */}
                      <div className="bg-[var(--color-brand-primary-surface)] border border-[var(--color-brand-primary)] rounded-md px-6 py-5 text-center">
                        <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-brand-primary)] mb-2">The core tension</p>
                        <p className="text-[16px] leading-[24px] text-[var(--color-system-text-primary)]">Transportation admins are domain experts — they know dairy inside out. But they have zero background in ML. The interface had to expose meaningful control without requiring them to understand gradient descent.</p>
                      </div>
                      {/* How I worked text */}
                      <div className="flex flex-col gap-2">
                        <h4 className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">How I worked with the AI team to translate criteria into design</h4>
                        <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">I worked closely with data engineers and AI architects to understand precisely what each criterion was doing — not to expose the math, but to surface the right information at the right moment for users to make meaningful decisions.</p>
                      </div>
                      {/* 3 criteria cards */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        {[
                          { color: 'var(--color-brand-primary)', label: 'CRITERIA 01', title: 'Route Cost',          desc: 'The algorithm evaluates hauling contracts between each producer-hauler-processor combination and calculates cost based on distance traveled. It finds the assignment that minimizes total contract cost across the full schedule — accounting for which haulers have contracts with which co-ops.' },
                          { color: '#6aaa78',                    label: 'CRITERIA 02', title: 'Distance',            desc: 'Stripped of contract pricing, this finds the producer-hauler-processor combination that minimizes total route distance — including multi-pickup routes where one hauler collects from several farms before a single drop-off.' },
                          { color: '#ff9c29',                    label: 'CRITERIA 03', title: 'Component Pricing',   desc: 'The most complex criterion. The algorithm maps each co-op\'s contracts with processors to determine which plants pay most based on milk components (protein, fat). It then routes high-component producers\' milk to the plants that will pay the most for it — based on historical contract data.' },
                        ].map(c => (
                          <div key={c.title} className="flex-1 min-w-0 bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md p-5 flex flex-col gap-2">
                            <div className="h-0.5 w-full rounded" style={{ backgroundColor: c.color }} />
                            <p className="font-mono text-[10px] leading-[16px] uppercase" style={{ color: c.color }}>{c.label}</p>
                            <p className="text-[16px] leading-[24px] font-medium text-[var(--color-system-text-primary)]">{c.title}</p>
                            <p className="text-[12px] leading-[18px] text-[var(--color-system-text-secondary)]">{c.desc}</p>
                          </div>
                        ))}
                      </div>
                      {/* Weighted system */}
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0 flex flex-col gap-4">
                          <h4 className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">The Weighted Percentage System</h4>
                          <div className="flex flex-col gap-4 text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">
                            <p>The rationale for a weighted system came directly from research. CDI primarily cared about distance, but still wanted some cost consideration. UDA cared about appointment time first but protein routing was a secondary priority they didn't want to lose.</p>
                            <p>A binary on/off for each criterion would have forced users to choose. A weighted system let them mirror the nuance of what they were already doing mentally every week. Weights must sum to 100% — a simple constraint that made the interface feel grounded rather than abstract.</p>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 rounded overflow-hidden border border-[var(--color-system-border)]">
                          <img src={imgWeightedCriteria} alt="Weighted criteria configuration" className="w-full" />
                        </div>
                      </div>
                      {/* Design decision callout */}
                      <div className="bg-[var(--color-brand-primary-surface)] border border-[var(--color-brand-primary)] rounded-md px-6 py-5 text-center">
                        <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-brand-primary)] mb-2">Design decision</p>
                        <p className="text-[16px] leading-[24px] text-[var(--color-system-text-primary)]">I deliberately did not expose the underlying algorithmic logic. Users needed to trust it, configure it, and override it when it got something wrong — not understand how it calculated scores. Simplicity was earned through deep technical understanding, not avoidance of it.</p>
                      </div>
                      {/* Full autopilot screenshot */}
                      <div className="w-full rounded overflow-hidden border border-[var(--color-system-border)]">
                        <img src={imgScheduleAutopilot} alt="Schedule Autopilot full view" className="w-full" />
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* ── Design 03 ── */}
                <FadeUp>
                  <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-6 items-start px-4 md:px-10 py-7 border-b border-[var(--color-system-border)]">
                      <span className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-brand-primary)] bg-[var(--color-brand-primary-surface)] px-2 py-1 rounded shrink-0">Design 03</span>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-[20px] leading-[28px] font-bold text-[var(--color-system-text-primary)]">Scheduling Interface — A Mini Case Study Within the Case Study</h3>
                        <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">From a card-based prototype to a client demo, to an infrastructure wall, to a full page rebuild that ended up improving the whole platform.</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 p-10">
                      <p className="text-[16px] leading-[24px] font-medium text-[var(--color-system-text-primary)]">Design Evolution</p>
                      {/* Timeline */}
                      <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md p-8 flex flex-col gap-2">
                        {[
                          { dot: imgTimelineDot,      phase: 'Phase 1 — Prototype',                     dotColor: 'text-[var(--color-system-text-secondary)]', title: 'Card UI Extended for AI Sandbox',            desc: 'I designed a prototype in Figma Make that extended the existing card/calendar view into a "sandbox" state. After the algorithm ran, route cards updated with color-coded match quality indicators — green for strong matches, yellow for acceptable, red for high-cost assignments. Users could expand any card to see alternative plant matches with distance and cost comparisons.' },
                          { dot: imgTimelineDot,      phase: 'Phase 2 — Client Demo & Feedback',        dotColor: 'text-[var(--color-system-text-secondary)]', title: 'Prototypes Demoed to CDI & UDA',              desc: 'We demoed the Figma Make prototypes to clients via Loom and in live sessions. Feedback on the concept was positive. Users could see the value immediately. Then the development conversations started.' },
                          { dot: imgTimelineDotPivot, phase: 'Phase 3 — The Pivot',                     dotColor: 'text-[#ff9c29]',                           title: 'Infrastructure Wall: Card View Can\'t Scale', desc: 'After multiple rounds of collaboration with engineering, we hit a structural limit. The card-based UI was built on a component model that couldn\'t handle the data volumes Moove would generate. Running the algorithm on 850+ routes from CDI and rendering all of it in card format was too heavy. The codebase supporting the card view was too tightly coupled to make the sandbox state work cleanly. We had to go back to the drawing board.' },
                          { dot: imgTimelineDot,      phase: 'Phase 4 — Full Redesign',                 dotColor: 'text-[var(--color-system-text-secondary)]', title: 'List/Database UI Built from Scratch',        desc: 'We chose to rebuild the scheduling page as a list/database UI — adding ~1 month to scope — rather than force the AI scheduler into an architecture that couldn\'t support it. This decision proved correct: the new list UI shipped first as a standalone improvement and immediately improved admin workflows before Moove was even live.' },
                          { dot: imgTimelineDot,      phase: 'Phase 5 — AI Scheduler on New Foundation', dotColor: 'text-[var(--color-system-text-secondary)]', title: 'Moove Launched on the List UI',              desc: 'With the list UI as a foundation, I designed the Schedule Autopilot as a three-step wizard — Select Plants → Configure Criteria → Review in Sandbox — built on top of a page that could handle hundreds of routes, bulk operations, and real-time AI output without performance degradation.' },
                        ].map(({ dot, phase, dotColor, title, desc }, i, arr) => (
                          <div key={i} className={`flex gap-6 items-start pl-8 ${i < arr.length - 1 ? 'pb-10' : ''}`}>
                            <img src={dot} alt="" className="w-3 h-4 shrink-0 mt-0.5" aria-hidden />
                            <div className="flex flex-col gap-1.5">
                              <p className={`font-mono text-[12px] leading-[18px] uppercase whitespace-nowrap ${dotColor}`}>{phase}</p>
                              <p className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">{title}</p>
                              <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Before/After */}
                      <p className="text-[16px] leading-[24px] font-medium text-[var(--color-system-text-primary)]">Before / After</p>
                      <BeforeAfterSlider
                        beforeSrc={imgSchedulingOld}
                        afterSrc={imgSchedulingNew}
                        beforeAlt="Old card-based scheduling UI"
                        afterAlt="New list-based scheduling UI"
                      />
                      {/* 3 benefit cards */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        {[
                          { icon: imgIconSpeed,     bg: 'var(--color-brand-lagoon-surface)', title: 'Performance',          desc: 'Renders hundreds of routes per client without degradation. CDI\'s 850+ weekly loads became manageable at a glance.' },
                          { icon: imgIconCheckList, bg: 'var(--color-brand-lagoon-surface)', title: 'Bulk Operations',       desc: 'True bulk selection, inline editing, column-based filtering and sorting — things the card view couldn\'t support before.' },
                          { icon: imgIconToggle,    bg: 'var(--color-brand-lagoon-surface)', title: 'Supply/Demand Tabs',    desc: 'Admins can switch between viewing what\'s scheduled (supply) and what each plant needs (demand) without leaving the page.' },
                        ].map(({ icon, bg, title, desc }) => (
                          <div key={title} className="flex-1 min-w-0 bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md p-5 flex flex-col gap-2">
                            <div className="w-8 h-8 rounded flex items-center justify-center shrink-0" style={{ background: `var(--color-brand-lagoon-surface)` }}>
                              <img src={icon} alt="" className="w-3.5 h-3.5" aria-hidden />
                            </div>
                            <p className="text-[14px] leading-[20px] font-medium text-[var(--color-system-text-primary)]">{title}</p>
                            <p className="text-[12px] leading-[18px] text-[var(--color-system-text-secondary)]">{desc}</p>
                          </div>
                        ))}
                      </div>
                      {/* Plant list screenshot */}
                      <div className="w-full rounded overflow-hidden border border-[var(--color-system-border)]">
                        <img src={imgPlantList} alt="Plant list scheduling view" className="w-full" />
                      </div>
                      {/* AI Design Principles */}
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0 flex flex-col gap-3">
                          <h4 className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">AI Design Principles Applied</h4>
                          {[
                            { icon: imgIconUserCheck,    title: 'Human in the Loop',    desc: 'The algorithm proposes. The admin decides. No change is applied to the live schedule without explicit confirmation — either per-load, per-plant, or per-day.' },
                            { icon: imgIconTeaching,     title: 'Explainable Output',   desc: 'Every match shows distance, cost, and match quality. Every warning flag surfaces why a match may be suboptimal — before the admin commits.' },
                            { icon: imgIconLayer,        title: 'Sandbox First',        desc: 'All AI output lives in a sandbox state where users can explore, adjust, and compare without affecting live scheduling data.' },
                            { icon: imgIconPropertyEdit, title: 'Graceful Override',    desc: 'Users can reject individual AI suggestions, move routes to different plants, and see the cost impact of their overrides in real time.' },
                          ].map(({ icon, title, desc }) => (
                            <div key={title} className="flex gap-3 items-start bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded px-3 py-2">
                              <div className="w-8 h-8 rounded flex items-center justify-center shrink-0" style={{ background: 'rgba(47,114,85,0.12)' }}>
                                <img src={icon} alt="" className="w-3.5 h-3.5" aria-hidden />
                              </div>
                              <div className="flex flex-col gap-1">
                                <p className="text-[12px] leading-[18px] font-medium text-[var(--color-system-text-primary)]">{title}</p>
                                <p className="text-[11px] leading-[16px] text-[var(--color-system-text-secondary)]">{desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 min-w-0 rounded overflow-hidden border border-[var(--color-system-border)]">
                          <img src={imgAltMatch} alt="Alt match panel" className="w-full" />
                        </div>
                      </div>
                      {/* Fulfillment Dashboard */}
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <h4 className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">Fulfillment Dashboard — Supply vs. Demand Visibility</h4>
                          <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">I designed a built-in fulfillment chart that allows users to see how the optimized schedule aligns with the demand for each plant based on available supply — giving admins a single-view confirmation before applying the AI schedule to production.</p>
                        </div>
                        <div className="w-full rounded overflow-hidden border border-[var(--color-system-border)]">
                          <img src={imgFulfillmentChart} alt="Fulfillment supply vs demand chart" className="w-full" />
                        </div>
                        {/* Loom demo */}
                        <div className="w-full rounded-lg overflow-hidden border border-[var(--color-system-border)]" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                          <iframe
                            src="https://www.loom.com/embed/6b884a33278c41eeb25d76f9ec3dfb04"
                            frameBorder="0"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </section>

              {/* ── 05 Results ─────────────────────────────────────────── */}
              <section id="results" className="py-16">
                <CsSectionHeader
                  tag="05 / Results"
                  title="Measurable impact from day one."
                  lead="CDI's scheduling team adopted Moove in their first weekly cycle. The results validated both the algorithm and the trust-first design approach."
                />

                <FadeUp className="mb-8">
                  <div className="w-full rounded-lg overflow-hidden border border-[var(--color-system-border)]" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src="https://www.youtube.com/embed/pKoPrHm7rEo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    />
                  </div>
                </FadeUp>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewOpts}
                  variants={stagger}
                  className="flex flex-wrap gap-5 mb-10"
                >
                  {[
                    { metric: '30–40%',  label: 'Reduction in manual scheduling time', subLabel: 'CDI team — first week of deployment' },
                    { metric: '$1M+', label: 'Annual hauling savings generated',     subLabel: 'Across CDI and DFO combined' },
                    { metric: '92%',  label: 'Scheduler satisfaction score',         subLabel: 'Post-launch survey, n=12' },
                    { metric: '3',    label: 'Co-op clients onboarded',              subLabel: 'CDI, DFO, and UDA' },
                  ].map((card, i) => (
                    <motion.div key={i} variants={fadeUp}>
                      <ResultCard metric={card.metric} label={card.label} subLabel={card.subLabel} />
                    </motion.div>
                  ))}
                </motion.div>

                <FadeUp>
                  <Callout variant="info">
                    The savings-share model proved itself: in the first quarter, Moove generated enough cost
                    reductions that Milk Moovement's 15% share more than covered the full cost of design and
                    engineering — delivering a positive ROI in under 90 days.
                  </Callout>
                </FadeUp>
              </section>

              {/* ── 06 Learnings ───────────────────────────────────────── */}
              <section id="learnings" className="pt-16">
                <CsSectionHeader
                  tag="06 / Learnings"
                  title="What designing for algorithmic trust taught me."
                  lead="Every assumption about how users relate to AI was tested in this project. Most of them were wrong in instructive ways."
                />

                <FadeUp>
                  <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md overflow-hidden">
                    <LearningRow
                      title="Explainability is not optional"
                      body="Users will not trust a black box — even if its outputs are demonstrably better. We spent nearly as much design time on the explanation layer as on the scheduling interface itself."
                    />
                    <LearningRow
                      title="Override UX is trust UX"
                      body="The ability to override the algorithm easily and visibly was the single most important feature for adoption. Paradoxically, making it easy to reject the AI made users more willing to accept it."
                    />
                    <LearningRow
                      title="Domain language is a design constraint"
                      body="Every label, tooltip, and insight had to pass a real-world test with a scheduler. Technical accuracy was less important than operational legibility."
                    />
                    <LearningRow
                      title="Phased rollout as a design pattern"
                      body="We designed the feature so admins could run Autopilot alongside their manual workflow in parallel for the first two weeks. This 'shadow mode' built confidence faster than any amount of onboarding documentation."
                      isLast
                    />
                  </div>
                </FadeUp>
              </section>

            </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
