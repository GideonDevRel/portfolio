export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-center mb-8">Contact Me</h2>
        {children}
      </div>
    );
  }
  