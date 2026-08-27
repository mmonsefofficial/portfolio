interface Update {
  date: string;
  title: string;
  description: string;
  tag: string;
}

const updates: Update[] = [
  {
    date: 'AUG 26, 2026',
    title: 'Building Atlas & Expanding Roadmap',
    description: 'A quick update on system architecture, user feedback, and scaling codebases.',
    tag: 'Development'
  },
  {
    date: 'AUG 19, 2026',
    title: 'ECPC Qualification Rounds',
    description: 'Trained rigorously and solved advanced problem sets using C++ algorithms.',
    tag: 'Competitive Programming'
  },
  {
    date: 'MAY — JUN 2026',
    title: 'USAII Global AI Hackathon Finalist',
    description: 'Competed globally and reached the final stage with an AI-driven wildfire detection system.',
    tag: 'Hackathon'
  }
];

export default function Updates() {
  return (
    <section id="now" className="w-full py-16">
      
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
          Recent updates
        </h2>
        <span className="font-mono text-xs text-[var(--muted)]">Activity log</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {updates.map((item, index) => (
          <div 
            key={index} 
            className="p-6 bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[var(--accent)]">{item.date}</span>
                <span className="text-[10px] font-mono bg-white px-2 py-0.5 border border-[var(--border)] text-[var(--muted)]">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}