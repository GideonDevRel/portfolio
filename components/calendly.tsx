"use client"

import Script from "next/script"
import { Button } from "./ui/button"

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export function CalendlyWidget() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/gideonmaoga/30-minutes'
      })
    }
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Button 
        onClick={openCalendly}
        size="lg"
        className="animate-bounce hover:animate-none"
      >
        Schedule a Call
      </Button>
    </>
  )
}

