import { Badge } from "@/components/ui/badge"

const skills: string[] = ["TypeScript", "React", "Next.js", "Node.js", "CSS", "HTML", "Git"]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

