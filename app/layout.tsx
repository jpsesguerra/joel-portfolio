import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Azeret_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

const azeretMono = Azeret_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-azeret-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Joel Esguerra — Product Designer',
  description: 'Senior product designer specializing in AI-powered products, design systems, and data-driven experiences.',
  icons: { icon: '/rec-avatar.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${azeretMono.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-[var(--color-system-background)] text-[var(--color-system-text-primary)] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
