'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { SideNav } from '@/components/navigation/SideNav'
import { Header } from '@/components/navigation/Header'
import { MobileNav } from '@/components/navigation/MobileNav'
import { Chapters } from '@/components/navigation/Chapters'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { Footer } from '@/components/Footer'
import { ResultCard } from '@/components/case-study/ResultCard'
import { FindingRow } from '@/components/case-study/FindingRow'
import { LoomEmbed } from '@/components/LoomEmbed'

// ─── Assets (local — downloaded from Figma) ───────────────────────────────────
const imgMmLogo           = '/mm-logo.png'
const imgHero             = '/case-studies/mm-ia/research-1.png'        // 6c730b48 — hero screenshot
const imgOverview         = '/mm-overview.svg'
const imgUserInterviews   = '/case-studies/mm-ia/user-interviews.png'
const imgExistingUiAudit  = '/case-studies/mm-ia/existing-ui-audit-1.png'
const imgDatadogAnalysis  = '/case-studies/mm-ia/existing-ui-audit-2.png'
const imgUsagePatterns    = '/case-studies/mm-ia/wireframes.png'         // image1 — usage patterns screenshot
const imgNavRedesign      = '/case-studies/mm-ia/nav-redesign.png'       // 69980e1d — big nav redesign
const imgCalloutScreenshot= '/case-studies/mm-ia/screenshot-final.png'   // screenshot 2026-06-01
const imgUnifiedPatterns  = '/case-studies/mm-ia/unified-patterns.png'
const imgColumnCustom     = '/case-studies/mm-ia/column-customization.png'
const imgEnhanceCustom    = '/case-studies/mm-ia/enhance-customization.png'

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
  { id: 'overview',     label: 'Overview' },
  { id: 'problem',      label: 'Problem + Approach' },
  { id: 'research',     label: 'Research' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'designs',      label: 'Unexpected Redesign' },
  { id: 'results',      label: 'Impact' },
  { id: 'learnings',    label: 'Learnings' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MmIaCaseStudy() {
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
                { label: 'Turning Operational Chaos into Clear Workflows' },
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
                  <img src={imgMmLogo} alt="Milk Moovement" className="w-5 h-5 object-contain opacity-70" />
                  <span className="font-mono text-[11px] leading-[16px] uppercase text-[var(--color-system-text-tertiary)]">Milk Moovement</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-system-text-tertiary)] opacity-40" />
                  <span className="font-mono text-[11px] leading-[16px] uppercase text-[var(--color-system-text-tertiary)]">B2B</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-system-text-tertiary)] opacity-40" />
                  <span className="font-mono text-[11px] leading-[16px] uppercase text-[var(--color-system-text-tertiary)]">AgriTech</span>
                </FadeUp>

                {/* Title */}
                <FadeUp delay={0.05} className="mb-6">
                  <h1 className="text-[40px] leading-[48px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.4px]">
                    Turning Operational Chaos into Clear Workflows
                  </h1>
                </FadeUp>

                {/* Hero image */}
                <FadeUp delay={0.1} className="mb-6">
                  <div className="rounded-[12px] overflow-hidden w-full">
                    <img src={imgHero} alt="Milk Moovement platform interface" className="w-full object-cover" />
                  </div>
                </FadeUp>

                {/* Meta row */}
                <FadeUp delay={0.15} className="mb-6">
                  <div className="border-t border-[var(--color-system-border)] pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'ROLE',     value: 'Sole Product Designer' },
                      { label: 'TIMELINE', value: 'Mar – Jun 2025' },
                      { label: 'PLATFORM', value: 'Web, iOS, Android' },
                      { label: 'TOOLS',    value: 'Figma, Webflow, Bolt, Datadog' },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex-1 min-w-0 bg-[var(--color-system-background-02)] border border-[var(--color-system-border)] rounded-[8px] px-5 py-4 flex flex-col gap-1">
                        <p className="font-mono text-[10px] leading-[16px] uppercase text-[var(--color-system-text-secondary)]">{label}</p>
                        <p className="text-[14px] leading-[20px] font-medium text-[var(--color-system-text-primary)]">{value}</p>
                      </div>
                    ))}
                  </div>
                </FadeUp>

                {/* 3 Result Cards */}
                <FadeUp delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <ResultCard metric="95%" label="Client Satisfaction"    subLabel="Score from clients who adopted the new navigation system" />
                    <ResultCard metric="25%" label="Productivity Increase"  subLabel="For power users — no more time wasted looking for the right pages or having multiple tabs open" />
                    <ResultCard metric="50%" label="Time Saved"             subLabel="By sales engineers stating it's now faster and clearer to walk new prospecting clients through the product" />
                  </div>
                </FadeUp>
              </section>

              {/* ══ 00 / OVERVIEW ═══════════════════════════════════════════ */}
              <section id="overview" className="py-10">
                <FadeUp className="mb-6">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">00 / Overview</p>
                  <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.16px] mb-3">
                    Every gallon has a destination problem.
                  </h2>
                  <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">
                    As the sole designer at Milk Moovement, I was responsible for designing and maintaining multiple product lines serving different user types across the dairy supply chain—from producers and drivers to plant receivers and administrators. Prior, the platform had grown organically, resulting in inconsistent experiences, overwhelming navigation, and workflows that didn't align with how different users actually worked.
                  </p>
                </FadeUp>

                {/* Overview illustration */}
                <FadeUp>
                  <div className="w-full overflow-hidden">
                    <img src={imgOverview} alt="Dairy supply chain overview" className="w-full object-cover" />
                  </div>
                </FadeUp>
              </section>

              {/* ══ TL;DR Video ══════════════════════════════════════════════ */}
              <section className="py-10">
                <FadeUp className="mb-4">
                  <p className="font-mono text-[10px] leading-[16px] uppercase text-[var(--color-brand-primary)] mb-2">TL;DR — Watch it in action</p>
                  <h2 className="text-[28px] leading-[36px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.3px] mb-2">See the redesigned navigation before diving in</h2>
                  <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] max-w-[600px]">Short on time? Here's a quick walkthrough of the final navigation redesign — the full case study below explains the research and decisions behind it.</p>
                </FadeUp>
                <FadeUp>
                  <LoomEmbed src="https://www.loom.com/embed/f6e1ad363d384fdc9545e6c5ff3f996a" className="rounded-[8px] border border-[var(--color-system-border)]" />
                </FadeUp>
              </section>

              {/* ══ 01 / PROBLEM + APPROACH ═════════════════════════════════ */}
              <section id="problem" className="py-10">
                <FadeUp className="mb-6">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">01 / PROBLEM + APPROACH</p>
                  <h2 className="text-[40px] leading-[48px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.4px]">
                    Lost in Translation
                  </h2>
                </FadeUp>

                <FadeUp>
                  <div className="flex flex-col md:flex-row gap-10">
                    {/* The Problem */}
                    <div className="flex-1 min-w-0 flex flex-col gap-3">
                      <p className="text-[20px] leading-[28px] font-bold text-[var(--color-system-text-secondary)]">The Problem</p>
                      <ul className="list-disc text-[16px] leading-[24px] text-[var(--color-system-text-primary)] flex flex-col gap-0 pl-6">
                        <li>Users frequently got lost navigating the platform</li>
                        <li>Inconsistent terminology across different regions</li>
                        <li>Each user type needed specific pages but had access to everything</li>
                        <li>Power users resorted to bookmarking or keeping multiple tabs open</li>
                        <li>High cognitive load when searching for functionality</li>
                      </ul>
                    </div>
                    {/* My Approach */}
                    <div className="flex-1 min-w-0 flex flex-col gap-3">
                      <p className="text-[20px] leading-[28px] font-bold text-[var(--color-system-text-secondary)]">My Approach</p>
                      <ul className="list-disc text-[16px] leading-[24px] text-[var(--color-system-text-primary)] flex flex-col gap-0 pl-6">
                        <li>Conducted extensive user research across user segments</li>
                        <li>Performed card sorting exercises for feature categorization</li>
                        <li>Analyzed Datadog sessions across multiple regions</li>
                        <li>Designed scalable, modular navigation system</li>
                        <li>Created unified design patterns across all platforms</li>
                      </ul>
                    </div>
                  </div>
                </FadeUp>
              </section>

              {/* ══ 02 / RESEARCH ═══════════════════════════════════════════ */}
              <section id="research" className="py-10">
                <FadeUp className="mb-6">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">02 / RESEARCH</p>
                  <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.16px] mb-3">
                    Navigation Redesign for Multiple User Types
                  </h2>
                  <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)]">
                    To uncover the varied needs of different user types, I conducted comprehensive research including:
                  </p>
                </FadeUp>

                {/* 2×2 research blocks */}
                <FadeUp className="flex flex-col gap-3 mb-6">
                  {/* Row 1 */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 min-w-0 bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-[12px] px-6 py-4 flex flex-col gap-3">
                      <p className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">User Interviews</p>
                      <div className="h-[220px] overflow-hidden rounded-[4px]">
                        <img src={imgUserInterviews} alt="User Interviews" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[11px] leading-[16px] text-[var(--color-system-text-primary)] tracking-[0.03px]">
                        With the help of Granola AI, I spoke with dozens of users—teammates, admins, and first-time explorers across General Admin, Transportation, Pay, and Membership roles.
                      </p>
                    </div>
                    <div className="flex-1 min-w-0 bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-[12px] px-6 py-4 flex flex-col gap-3">
                      <p className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">Existing UI Audit</p>
                      <div className="h-[220px] overflow-hidden rounded-[4px]">
                        <img src={imgExistingUiAudit} alt="Existing UI Audit" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[11px] leading-[16px] text-[var(--color-system-text-primary)] tracking-[0.03px]">
                        Conducted exercises for each feature to understand mental models and expected groupings. I also analyzed existing navigation and page architecture for each of our major clients.
                      </p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 min-w-0 bg-[var(--color-system-background-02)] border border-[var(--color-system-border)] rounded-[12px] px-6 py-4 flex flex-col gap-3">
                      <p className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">Datadog Analysis</p>
                      <div className="h-[220px] overflow-hidden rounded-[4px]">
                        <img src={imgDatadogAnalysis} alt="Datadog Analysis" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[11px] leading-[16px] text-[var(--color-system-text-primary)] tracking-[0.03px]">
                        Analyzed session recordings across multiple user segments for each region to identify pain points.
                      </p>
                    </div>
                    <div className="flex-1 min-w-0 bg-[var(--color-system-background-02)] border border-[var(--color-system-border)] rounded-[12px] px-6 py-4 flex flex-col gap-3">
                      <p className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">Usage Patterns</p>
                      <div className="h-[220px] overflow-hidden rounded-[4px] bg-[#cde7fa]">
                        <img src={imgUsagePatterns} alt="Usage Patterns" className="w-full h-full object-cover rounded-[5px]" />
                      </div>
                      <p className="text-[11px] leading-[16px] text-[var(--color-system-text-primary)] tracking-[0.03px]">
                        Discovered power users maintained 3-4 open tabs and bookmarked frequently-used pages.
                      </p>
                    </div>
                  </div>
                </FadeUp>

                {/* KEY FINDINGS */}
                <FadeUp>
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-system-text-secondary)] mb-4">KEY FINDINGS</p>
                  <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-[6px] overflow-hidden">
                    <FindingRow
                      number="01"
                      title="Users were often lost with high cognitive load searching for pages"
                      body="Users spent significant time searching for features and were often unable to find what they needed without keeping multiple browser tabs open."
                    />
                    <FindingRow
                      number="02"
                      title="Power users resorted to bookmarking pages or keeping multiple tabs open"
                      body="Rather than navigating through the product, power users bookmarked specific pages or kept 3–4 tabs open permanently to access most-used features."
                    />
                    <FindingRow
                      number="03"
                      title="Terminology and sorting inconsistencies across all regions"
                      body="Navigation labels, page names, and feature groupings varied across different regional deployments, creating confusion for users working across clients."
                    />
                    <FindingRow
                      number="04"
                      title="Each user type had specific pages they worked on and didn't want to see irrelevant sections"
                      body="Finance teams, transport managers, quality technicians, and general admins had completely different primary workflows with minimal overlap."
                      isLast
                    />
                  </div>
                </FadeUp>
              </section>

              {/* ══ 03 / REQUIREMENTS ═══════════════════════════════════════ */}
              <section id="requirements" className="py-10">
                <FadeUp className="mb-6">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">03 / REQUIREMENTS</p>
                  <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.16px] mb-3">
                    Embracing &ldquo;Less is Moo-re&rdquo; 🐮
                  </h2>
                  <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)]">
                    I redesigned the navigation to improve usability, clarity, and scalability while maintaining all user permissions. The new structure surfaces essential features immediately and reduces clutter through a clear hierarchy that balances simplicity with flexibility. Frequently used features appear at the top level, while secondary options are revealed contextually to minimize cognitive load.
                  </p>
                </FadeUp>

                {/* 2-col principles */}
                <FadeUp className="mb-6">
                  <div className="flex flex-col md:flex-row gap-10 text-[14px]">
                    <div className="flex-1 min-w-0 flex flex-col gap-4">
                      {[
                        { title: 'Prioritize Essential Items', body: 'Most frequently used features at top-level for quick access' },
                        { title: 'Hierarchical Structure',     body: 'Expandable categories that reveal secondary items contextually' },
                        { title: 'Minimize Clutter',           body: 'Clear terminology, visual segmentation with dividers' },
                      ].map((item) => (
                        <div key={item.title} className="flex flex-col gap-1">
                          <p className="font-medium leading-[20px] text-[var(--color-system-text-primary)]">{item.title}</p>
                          <p className="leading-[22px] text-[var(--color-system-text-secondary)]">{item.body}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col gap-4">
                      {[
                        { title: 'Scalability',          body: 'Modular system for client-specific customization' },
                        { title: 'Consistent Patterns',  body: 'Collapsible menus, search integration, sticky navigation' },
                        { title: 'Maintain Permissions', body: 'Preserve security while improving experience' },
                      ].map((item) => (
                        <div key={item.title} className="flex flex-col gap-1">
                          <p className="font-medium leading-[20px] text-[var(--color-system-text-primary)]">{item.title}</p>
                          <p className="leading-[22px] text-[var(--color-system-text-secondary)]">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>

                {/* Big nav redesign image */}
                <FadeUp className="mb-6">
                  <div className="w-full overflow-hidden">
                    <img src={imgNavRedesign} alt="Navigation redesign" className="w-full object-cover" />
                  </div>
                </FadeUp>

                {/* Closing paragraph */}
                <FadeUp>
                  <p className="text-[14px] leading-[22px] text-[var(--color-system-text-primary)]">
                    I refined labeling, implemented consistent UI patterns (collapsible menus, icons with text, search, and sticky navigation), and added dividers between sections for better readability. The design scales to accommodate future client-specific categories without disrupting the user experience, and all security permissions remain intact. I also updated the Permissions page to align with the new navigation structure.
                  </p>
                </FadeUp>
              </section>

              {/* ══ 04 / UNEXPECTED REDESIGN ════════════════════════════════ */}
              <section id="designs" className="py-10">

                {/* Callout: screenshot + text */}
                <FadeUp className="mb-6">
                  <div className="bg-[rgba(0,163,246,0.12)] border border-[#00a3f6] rounded-[6px] px-6 py-5 flex flex-col md:flex-row gap-5 items-start md:items-center">
                    <div className="w-full md:w-[315px] h-[155px] border-2 border-[var(--color-system-text-primary)] overflow-hidden">
                      <img src={imgCalloutScreenshot} alt="Navigation screenshot" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0 text-[12px] leading-[18px] font-medium text-[var(--color-system-text-primary)] tracking-[0.06px]">
                      <p className="mb-3">The navigation redesign revealed something crucial: users didn't just need better navigation—they needed better tools for working with complex data. Transportation managers were analyzing hundreds of routes. Quality teams were reviewing thousands of test results. Payroll processors were reconciling massive datasets across multiple cooperatives.</p>
                      <p>If I'd solved navigation but left data tables inconsistent and hard to customize, I'd only solved half the problem.</p>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp className="mb-6">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">04 / Unexpected redesign</p>
                  <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.16px] mb-3">
                    Unified Table Design + Customization
                  </h2>
                  <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)]">
                    Making complex data clearer and more accessible without expensive custom development
                  </p>
                </FadeUp>

                {/* Unified Patterns block */}
                <FadeUp className="mb-10">
                  <div className="bg-[var(--color-system-white)] rounded-[12px] px-6 py-4 flex flex-col gap-5">
                    <p className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">Unified Patterns &amp; Better Visibility</p>
                    <div className="w-full overflow-hidden rounded-[4px]">
                      <img src={imgUnifiedPatterns} alt="Unified Patterns & Better Visibility" className="w-full object-cover" />
                    </div>
                    <p className="text-[14px] leading-[22px] text-[var(--color-system-text-primary)]">
                      Optimized rendering for large datasets and implemented a responsive design with improved typography, status indicators and consistent interaction patterns across all tables.
                    </p>
                  </div>
                </FadeUp>

                {/* Column + Filter blocks */}
                <FadeUp className="flex flex-col md:flex-row gap-10 mb-6">
                  <div className="flex-1 min-w-0 bg-[var(--color-system-white)] rounded-[12px] px-6 py-4 flex flex-col gap-3">
                    <p className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">Column Customization</p>
                    <div className="w-full overflow-hidden rounded-[4px]">
                      <img src={imgColumnCustom} alt="Column Customization" className="w-full object-cover" />
                    </div>
                    <p className="text-[14px] leading-[22px] text-[var(--color-system-text-primary)]">
                      Full column customization per-user for visibility and ordering
                    </p>
                  </div>
                  <div className="flex-1 min-w-0 bg-[var(--color-system-white)] rounded-[12px] px-6 py-4 flex flex-col gap-3">
                    <p className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">Enhanced Filters and Date</p>
                    <div className="w-full overflow-hidden rounded-[4px]">
                      <img src={imgEnhanceCustom} alt="Enhanced Filters and Date" className="w-full object-cover" />
                    </div>
                    <p className="text-[14px] leading-[22px] text-[var(--color-system-text-primary)]">
                      Custom filter combinations on both columns and date ranges
                    </p>
                  </div>
                </FadeUp>

                {/* Design System Integration */}
                <FadeUp>
                  <h3 className="text-[24px] leading-[32px] font-bold text-[var(--color-system-text-primary)] mb-4">Design System Integration</h3>
                  <p className="text-[16px] leading-[24px] text-[var(--color-system-text-primary)] mb-4">
                    These table enhancements became part of our broader design system, ensuring consistency across Platform, Transportation, Pay, and Membership modules. Every new feature could leverage these patterns, accelerating development while maintaining quality.
                  </p>
                  <button className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-brand-primary)] p-1">
                    LEARN MORE ABOUT LIQUID DESIGN SYSTEM
                  </button>
                </FadeUp>
              </section>

              {/* ══ 05 / IMPACT ═════════════════════════════════════════════ */}
              <section id="results" className="py-10">
                <FadeUp className="mb-6">
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-brand-primary)] mb-3">05 / IMPACT</p>
                  <h2 className="text-[32px] leading-[40px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.16px] mb-3">
                    Numbers that mattered to the business.
                  </h2>
                  <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)]">
                    Outcomes measured through DataDog behavioural data, qualitative client research, and commercial contract results.
                  </p>
                </FadeUp>

                {/* Row 1 */}
                <FadeUp className="flex flex-col sm:flex-row gap-4 mb-4">
                  <ResultCard metric="95%" label="Client Satisfaction"   subLabel="Score from clients who adopted the new navigation system" />
                  <ResultCard metric="25%" label="Productivity Increase" subLabel="For power users — no more time wasted looking for the right pages or having multiple tabs open" />
                  <ResultCard metric="50%" label="Time Saved"            subLabel="By sales engineers stating it's now faster and clearer to walk new prospecting clients through the product" />
                </FadeUp>

                {/* Row 2 */}
                <FadeUp className="flex flex-col sm:flex-row gap-4 mb-6">
                  <ResultCard metric="50%" label="Power User Adoption"      subLabel="Power-users across transportation and finance created custom filters and presets within 30 days" />
                  <ResultCard metric="33%" label="Support Requests Reduced" subLabel="Reduction of developer-specific table customization requests within the first 90 days" />
                  <ResultCard metric="20%" label="Onboarding Time Saved"    subLabel="Saved by the Onboarding team on the next 3 new clients when ingesting their unique dataset" />
                </FadeUp>

                {/* Loom video */}
                <FadeUp>
                  <LoomEmbed src="https://www.loom.com/embed/f6e1ad363d384fdc9545e6c5ff3f996a" className="rounded-[8px]" />
                </FadeUp>
              </section>

              {/* ══ 07 / LEARNINGS ══════════════════════════════════════════ */}
              <section id="learnings" className="py-10">
                <FadeUp className="mb-6">
                  <p className="font-mono text-[10px] leading-[16px] uppercase text-[var(--color-brand-primary)] mb-4">07 / learning</p>
                  <h2 className="text-[40px] leading-[48px] font-bold text-[var(--color-system-text-primary)] tracking-[-0.4px]">
                    Reflections &amp; Learnings
                  </h2>
                </FadeUp>

                <FadeUp>
                  <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-[6px] overflow-hidden mb-6">
                    {/* Learning 1 */}
                    <div className="border-b border-[var(--color-system-border)] p-6 flex flex-col md:flex-row gap-8 items-start">
                      <p className="md:w-[280px] md:flex-shrink-0 text-[16px] leading-[24px] font-medium text-[var(--color-system-text-primary)]">
                        Understanding Different Workflows Through Research
                      </p>
                      <div className="flex-1 min-w-0 text-[16px] leading-[24px] text-[var(--color-system-text-secondary)] flex flex-col gap-4">
                        <p>The most valuable insight from this project was learning how deeply different each user type's workflow was. Transportation managers, quality administrators, payroll processors, and membership coordinators all approached the platform with completely different mental models and goals.</p>
                        <p>By conducting card sorting exercises, analyzing session recordings, and speaking directly with users across different regions, I was able to move beyond assumptions and design navigation that truly matched how people worked. The bookmark feature came directly from observing power users keeping multiple tabs open—instead of fighting that behavior, I designed for it.</p>
                      </div>
                    </div>
                    {/* Learning 2 */}
                    <div className="border-b border-[var(--color-system-border)] p-6 flex flex-col md:flex-row gap-8 items-start">
                      <p className="md:w-[280px] md:flex-shrink-0 text-[16px] leading-[24px] font-medium text-[var(--color-system-text-primary)]">
                        Managing Multiple Teams Through Collaboration
                      </p>
                      <div className="flex-1 min-w-0 text-[16px] leading-[24px] text-[var(--color-system-text-secondary)] flex flex-col gap-4">
                        <p>As the sole designer supporting multiple product lanes, I had to work closely with different engineering teams working on Platform, Transportation, Pay, and Membership features. The key was establishing clear design systems and documentation that teams could reference independently, while maintaining regular sync points to align on larger initiatives.</p>
                        <p>Presenting user research data became crucial for getting buy-in. When I showed engineers Datadog recordings of users struggling to find features, or presented card sorting results that contradicted our current information architecture, it created shared understanding and urgency. Data-driven design decisions moved faster than opinion-based ones.</p>
                      </div>
                    </div>
                    {/* Learning 3 */}
                    <div className="p-6 flex flex-col md:flex-row gap-8 items-start">
                      <p className="md:w-[280px] md:flex-shrink-0 text-[16px] leading-[24px] font-medium text-[var(--color-system-text-primary)]">
                        Building a Unified Design System
                      </p>
                      <div className="flex-1 min-w-0 text-[16px] leading-[24px] text-[var(--color-system-text-secondary)] flex flex-col gap-4">
                        <p>Working across web platform, driver app, receiver app, and producer app taught me the value of systematic thinking. Rather than designing each interface in isolation, I established core patterns—navigation structures, form patterns, table designs, status indicators—that could adapt across contexts while maintaining consistency.</p>
                        <p>This unified approach made the platform feel cohesive even as users moved between different modules or platforms. A driver who used the mobile app could more easily understand the web platform when needed, and vice versa. It also accelerated design and development velocity—once we had solid patterns, new features could be designed and built faster.</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>

              </section>

              {/* ── Recommendation ───────────────────────────────────────────── */}
              <section className="py-10">
                <div className="bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-[6px] px-4 py-5 flex flex-col gap-5">
                  <div className="bg-[var(--color-system-background-02)] rounded-[8px] px-4 py-2 flex flex-col gap-2">
                    <p className="text-[14px] leading-[22px] text-[var(--color-text-primary)]">★★★★★</p>
                    <p className="text-[11px] leading-[18px] text-[var(--color-text-primary)]">Joel is an exceptional product designer and was an absolute force at Milk Moovement. He was incredibly helpful when it came time to prototype thoughtful, credible solutions for marquee prospective customers, often on tight timelines and with real commercial stakes. Beyond pure design, Joel brought a strong go-to-market mindset. He was invaluable in creating sales enablement materials and collateral that actually reflected the product accurately while telling a compelling story for customers. Joel combines strong design taste with pragmatism and speed; a rare mix. Any team building and selling a serious product would be lucky to have him.</p>
                  </div>
                  <div className="flex items-start justify-between">
                    <a href="https://www.linkedin.com/in/kenny-harris-50b664163/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                      <img src="/rec-kenny.jpg" alt="Kenny Harris" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                      <div>
                        <p className="text-[14px] leading-[20px] font-bold text-[var(--color-text-primary)]">Kenny Harris</p>
                        <p className="text-[12px] leading-[18px] text-[var(--color-text-primary)]">Sr. Enterprise Account Executive</p>
                      </div>
                    </a>
                    <img src="/assets/90abaedd-e76b-4630-ac8b-5f063ecad828.png" alt="Spellbook" className="h-10 w-[77px] object-contain" />
                  </div>
                </div>
              </section>

              {/* Moorice mascot GIF */}
              <FadeUp>
                <div className="py-6 flex flex-col items-center gap-3">
                  <img src="/Moorice_Dab_output.gif" alt="Moorice celebrating" className="w-[50%]" />
                  <p className="font-mono text-[14px] leading-[22px] uppercase text-[var(--color-text-secondary)] text-center">Thank You very Moo-ch for reading</p>
                </div>
              </FadeUp>

            </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  )
}
