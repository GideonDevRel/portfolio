import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react'
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="container mx-auto px-4 min-h-[calc(100vh-8rem)] flex items-center justify-center">
        <div className="text-center space-y-8 animate-fade-up">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent animate-gradient">
              Blockchain Developer
              <span className="block text-2xl md:text-3xl mt-2 text-muted-foreground">
                Security Auditor & Researcher
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Specializing in smart contract development, security auditing, and blockchain research. 
              Building secure and efficient decentralized solutions.
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/project">
                View Audits
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="flex gap-4 justify-center pt-8">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-lg text-muted-foreground">
                As a blockchain security researcher and smart contract auditor, I help secure the future of Web3. 
                With expertise in Solidity, Rust, and blockchain architecture, I ensure DeFi protocols and NFT 
                platforms are built on secure foundations.
              </p>
              <Button asChild>
                <Link href="/about" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "DeFi Protocol Audit",
                description: "Comprehensive security audit of a major DeFi lending protocol",
                tags: ["Solidity", "DeFi", "Security"]
              },
              {
                title: "NFT Platform Development",
                description: "Built a secure NFT marketplace with advanced trading features",
                tags: ["NFT", "Smart Contracts", "Frontend"]
              },
              {
                title: "DAO Security Review",
                description: "Security assessment and optimization of DAO governance contracts",
                tags: ["DAO", "Governance", "Audit"]
              },
              {
                title: "Zero-Knowledge Implementation",
                description: "Implemented ZK-proofs for private transactions",
                tags: ["ZK-Proofs", "Privacy", "Research"]
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild>
              <Link href="/project" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Understanding MEV in DeFi",
                description: "A deep dive into Miner Extractable Value and its implications",
                date: "2024-01-05"
              },
              {
                title: "Smart Contract Security Best Practices",
                description: "Essential security patterns for Solidity development",
                date: "2024-01-03"
              },
              {
                title: "The Future of ZK-Rollups",
                description: "Exploring scalability solutions with zero-knowledge proofs",
                date: "2024-01-01"
              },
              {
                title: "Audit Methodology Explained",
                description: "A comprehensive guide to smart contract auditing",
                date: "2023-12-28"
              }
            ].map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild>
              <Link href="/blog" className="group">
                Read All Articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you need a security audit, smart contract development, or blockchain consultation,
            I'm here to help secure your Web3 project.
          </p>
          <Button asChild size="lg">
            <Link href="/contact" className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

