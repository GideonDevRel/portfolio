import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm a full-stack developer passionate about creating exceptional digital experiences
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/project">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

