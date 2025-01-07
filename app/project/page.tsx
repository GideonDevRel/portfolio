import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from 'lucide-react'
import { projects } from "@/utils/data"

export default function Projects() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {project.title}
                <div className="flex gap-2">
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Github className="w-5 h-5" />
                  </Link>
                  {project.liveLink && (
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

