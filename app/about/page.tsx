import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                I'm a passionate developer with experience in building modern web applications.
                I specialize in React, Next.js, and TypeScript, focusing on creating performant
                and user-friendly experiences.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Next.js & React</li>
                <li>TypeScript & JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/placeholder.svg"
            alt="Profile"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  )
}

