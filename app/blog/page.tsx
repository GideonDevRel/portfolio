import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const posts = [
  {
    title: "Building with Next.js App Router",
    excerpt: "Learn how to leverage the power of Next.js App Router for better performance and developer experience.",
    date: "2024-01-05",
  },
  {
    title: "Mastering TypeScript",
    excerpt: "Essential TypeScript patterns and practices for writing better, type-safe code.",
    date: "2024-01-03",
  },
]

export default function Blog() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6">
        {posts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Read More →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

