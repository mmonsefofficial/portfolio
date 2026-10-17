const timeline = [
  ["2026", "ECPC, USAII Global AI Hackathon, Atlas"],
  ["2025", "STEM projects, competitive programming, web development"],
];

export function About() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-24 pt-20 sm:px-6 md:pt-24">
      <div className="max-w-[700px]">
        <p className="font-mono text-[12px] tracking-[0.08em] text-muted">About</p>
        <h1 className="mt-3 font-display text-[32px] sm:text-[48px]">Mohamed AbdelMonsef</h1>
        <p className="mt-6 text-[16px] leading-7 text-muted">
          I am a student, developer, designer, and competitive programmer interested
          in software, AI, and building useful products.
        </p>
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-[180px_minmax(0,680px)]">
        <h2 className="font-mono text-[12px] text-muted">Background</h2>
        <p className="text-[16px] leading-7 text-muted">
          I study at Red Sea STEM High School and spend a lot of my time learning
          through projects, competitions, and experiments.
        </p>
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-[180px_minmax(0,680px)]">
        <h2 className="font-mono text-[12px] text-muted">Timeline</h2>
        <div className="border-t border-border">
          {timeline.map(([year, text]) => (
            <div key={year} className="grid gap-3 border-b border-border py-5 sm:grid-cols-[100px_1fr]">
              <span className="font-mono text-[12px] text-muted">{year}</span>
              <span className="text-[15px] leading-6">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-[180px_minmax(0,680px)]">
        <h2 className="font-mono text-[12px] text-muted">Skills</h2>
        <p className="text-[15px] leading-7 text-muted">
          C++ · Python · TypeScript · React · Next.js · Tailwind · Git · Figma
        </p>
      </div>
    </section>
  );
}
