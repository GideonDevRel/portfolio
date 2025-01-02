export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-center mb-8">About</h2>
        {children}
      </div>
    );
  }
  