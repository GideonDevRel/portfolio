export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-center mb-8">Blog</h2>
        {children}
      </div>
    );
  }
  