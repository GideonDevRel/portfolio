export default function ProjectsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-center mb-8">My Projects</h2>
        {children}
      </div>
    );
  }
  