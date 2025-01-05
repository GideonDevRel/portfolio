import { Button } from "@/components/ui/button"

export default function Introduction() {
  return (
    <section id="home" className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Your Name</h1>
      <p className="text-xl mb-8">Web Developer & Designer</p>
      <Button asChild>
        <a href="#contact">Get in Touch</a>
      </Button>
    </section>
  )
}

