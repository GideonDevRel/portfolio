'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ModeToggle } from "@/components/mode-toggle"
import Link from 'next/link'
import Image from 'next/image'

export function AnimatedHeader() {
  return (
    <motion.header 
      className="fixed w-full z-10 border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
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
            <motion.span 
              className="font-bold text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              GideonDevRel
            </motion.span>
          </Link>
          <ul className="flex items-center space-x-4 md:space-x-8">
            {['Home', 'About', 'Projects', 'Blog', 'Events', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {item}
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <ModeToggle />
            </motion.li>
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}

export function AnimatedMain({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main 
        className="pt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export function AnimatedFooter() {
  return (
    <motion.footer 
      className="border-t border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground">email@example.com</p>
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
            <p className="text-sm text-muted-foreground">© 2024 GideonDevRel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

