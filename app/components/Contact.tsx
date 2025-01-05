'use client'

import { useState, FormEvent } from 'react'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input 
            type="text" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Input 
            type="email" 
            placeholder="Your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Textarea 
            placeholder="Your Message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </section>
  )
}

