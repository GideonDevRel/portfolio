import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

export default function Contact() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      <Card>
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea 
              placeholder="Your Message" 
              className="min-h-[150px]" 
            />
            <Button type="submit">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

