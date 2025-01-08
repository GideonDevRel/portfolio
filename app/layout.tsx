import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedHeader, AnimatedMain, AnimatedFooter } from '@/app/components/animated-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blockchain Developer Portfolio',
  description: 'Portfolio of a Blockchain Developer, Auditor, and Researcher',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <div className="min-h-screen bg-background transition-colors duration-1000">
            <AnimatedHeader />
            <AnimatedMain>
            {children}
            <SpeedInsights />
            </AnimatedMain>
            <AnimatedFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

