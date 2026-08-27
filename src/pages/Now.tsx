import { now } from "../data/now";

export function Now() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-24 pt-20 sm:px-6 md:pt-24">
      <div className="max-w-[680px]">
        <p className="font-mono text-[12px] tracking-[0.08em] text-muted">Now</p>
        <h1 className="mt-3 font-display text-[32px] sm:text-[48px]">What I&apos;m doing now</h1>
        <p className="mt-6 text-[16px] leading-7 text-muted">
          A small snapshot of what I am building, learning, and exploring.
        </p>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {now.map((item) => (
          <article key={item.label} className="glass rounded-[var(--radius)] border border-border p-6">
            <p className="font-mono text-[12px] tracking-[0.06em] text-muted">{item.label}</p>
            <h2 className="mt-5 font-display text-[24px] leading-7">{item.value}</h2>
          </article>
        ))}
      </div>

      <p className="mt-10 font-mono text-[12px] text-muted">Last updated: 26 Aug 2026</p>
    </section>
  );
}