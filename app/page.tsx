"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Twitter, Linkedin, ArrowRight, Calendar, MapPin, ExternalLink } from 'lucide-react'
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactModal } from "@/components/contact-modal"
import { CalendlyWidget } from "@/components/calendly"
import { projects, blogs } from "@/utils/data"
import { motion } from 'framer-motion'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    const texts = ["I'm Gideon Maoga", "Blockchain Developer"];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const animateText = () => {
      const currentText = texts[currentTextIndex];
      
      if (!isDeleting && currentCharIndex <= currentText.length) {
        setText(currentText.slice(0, currentCharIndex));
        currentCharIndex++;
      } else if (isDeleting && currentCharIndex >= 0) {
        setText(currentText.slice(0, currentCharIndex));
        currentCharIndex--;
      }

      if (currentCharIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(animateText, 1000);
      } else if (currentCharIndex === 0 && isDeleting) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(animateText, 500);
      } else {
        setTimeout(animateText, isDeleting ? 50 : 150);
      }
    };

    animateText();
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <motion.div 
          className="text-center space-y-8 w-full max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-4">
            <motion.div 
              className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-8"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                fill
                className="animate-pulse-slow"
              />
            </motion.div>
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="inline-block min-h-[1.5em]">
                {text}
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Specializing in smart contract development, security auditing, and blockchain research. 
              Building secure and efficient decentralized solutions.
            </motion.p>
          </div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
              onClick={() => setIsContactOpen(true)}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href="/project">View Projects</Link>
            </Button>
          </motion.div>
          <motion.div 
            className="flex gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <motion.section 
        className="py-20 bg-muted/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative aspect-square rounded-lg overflow-hidden group max-w-md mx-auto"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="object-cover transition-transform duration-500 group-hover:scale-110 animate-pulse"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
            <motion.div 
              className="space-y-6 text-center md:text-left"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300">
                As a blockchain security researcher and smart contract auditor, I help secure the future of Web3. 
                With expertise in Solidity, Rust, and blockchain architecture, I ensure DeFi protocols and NFT 
                platforms are built on secure foundations.
              </p>
              <Button asChild className="group hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Preview Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full"
                >
                  <div className="relative h-48 sm:h-40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center flex-wrap gap-2">
                      <span className="text-lg">{project.title}</span>
                      <div className="flex gap-2">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Github className="w-5 h-5" />
                        </a>
                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="group hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <Link href="/project">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Blog Preview Section */}
      <motion.section 
        className="py-20 bg-muted/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogs.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.datePublished}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={post.link} className="text-primary hover:underline inline-flex items-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="group hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Events and Conferences Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Events & Conferences</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Ethereum Developer Conference",
                role: "Speaker",
                topic: "Optimizing Gas Costs in Smart Contracts",
                date: "2024-03-15",
                location: "Berlin, Germany",
              },
              {
                title: "Blockchain Security Summit",
                role: "Panelist",
                topic: "Emerging Threats in DeFi",
                date: "2024-02-20",
                location: "New York, USA",
              },
              {
                title: "Web3 Innovation Forum",
                role: "Workshop Leader",
                topic: "Building Scalable dApps",
                date: "2024-01-30",
                location: "Singapore",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" /> {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-2">{event.role}: {event.topic}</p>
                    <p className="text-muted-foreground flex items-center">
                      <MapPin className="mr-2 h-4 w-4" /> {event.location}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="group hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <Link href="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Calendly Section */}
      <motion.section 
        className="py-20 bg-muted/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
            Schedule a call to discuss your blockchain security needs, smart contract audit requirements, 
            or any other blockchain-related inquiries.
          </p>
          <CalendlyWidget />
        </div>
      </motion.section>
    </motion.main>
  )
}

