import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

export function Work() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-20 pt-20 sm:px-6 md:pb-24 md:pt-24">
      <div className="max-w-[680px]">
        <p className="font-mono text-[12px] tracking-[0.08em] text-muted">Work</p>
        <h1 className="mt-3 font-display text-[32px] sm:text-[48px]">Projects I&apos;ve built</h1>
        <p className="mt-6 text-[16px] leading-7 text-muted">
          A collection of software, experiments, and engineering projects.
        </p>
      </div>

      <div className="mt-16 border-t border-border">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/work/${project.slug}`}
            className="group grid gap-4 border-b border-border py-6 transition-colors duration-150 ease-out hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:grid-cols-[80px_minmax(0,1fr)_120px_24px]"
          >
            <span className="font-mono text-[12px] text-muted">{project.number}</span>
            <div>
              <h2 className="font-display text-[24px]">{project.name}</h2>
              <p className="mt-2 max-w-[620px] text-[14px] leading-6 text-muted">{project.description}</p>
            </div>
            <span className="font-mono text-[12px] text-muted">{project.year}</span>
            <ArrowUpRight
              size={18}
              strokeWidth={1.7}
              className="text-muted transition-colors duration-150 ease-out group-hover:text-accent"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}