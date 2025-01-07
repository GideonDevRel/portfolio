import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { blogs } from "@/utils/data"

export default function Blog() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6">
        {blogs.map((post, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <Badge key={i} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.datePublished}</span>
                <Link href={post.link} className="text-primary hover:underline inline-flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

