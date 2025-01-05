import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Project One",
    description: "A full-stack application built with Next.js and TypeScript",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#"
  },
  {
    title: "Project Two",
    description: "Modern web application with real-time features",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "WebSocket"],
    link: "#"
  },
  {
    title: "Project Three",
    description: "E-commerce platform with payment integration",
    image: "/placeholder.svg",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link 
                href={project.link}
                className="text-sm text-primary hover:underline"
              >
                View Project →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

