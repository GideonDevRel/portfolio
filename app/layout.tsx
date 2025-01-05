import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blockchain Portfolio',
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
          <div className="min-h-screen bg-gradient-to-b from-background to-background/95 transition-colors duration-1000">
            <header className="border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/logo.svg"
                      alt="Logo"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <span className="font-bold text-xl">GideonDevRel</span>
                  </Link>
                  <ul className="flex items-center space-x-8">
                    <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                    <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                    <li><Link href="/project" className="hover:text-primary transition-colors">Projects</Link></li>
                    <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                    <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    <li><ModeToggle /></li>
                  </ul>
                </div>
              </nav>
            </header>
            {children}
            <footer className="border-t border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <h3 className="font-semibold mb-4">Contact</h3>
                    <p className="text-sm text-muted-foreground">maogagiggy.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Social</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                      <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                      <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                      <li><a href="#" className="hover:text-primary transition-colors">Research Papers</a></li>
                      <li><a href="#" className="hover:text-primary transition-colors">Audit Reports</a></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">© 2025. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

