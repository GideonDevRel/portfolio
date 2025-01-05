export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  )
}

