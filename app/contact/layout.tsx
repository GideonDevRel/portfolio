export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        {children}
      </div>
    </div>
  )
}

