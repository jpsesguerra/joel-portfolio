import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Joel Esguerra — Product Designer',
  description: 'Senior product designer specializing in AI-powered products, design systems, and data-driven experiences.',
  icons: { icon: '/rec-avatar.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-[var(--color-system-background)] text-[var(--color-system-text-primary)] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
