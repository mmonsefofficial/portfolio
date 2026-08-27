import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";

export function Project() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6">
        <h1 className="font-display text-[32px]">Project not found</h1>
        <Link className="mt-6 inline-block text-[14px] text-accent" to="/work">
          Back to work
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-[1200px] px-4 pb-24 pt-20 sm:px-6 md:pt-24">
      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-[14px] text-muted transition-colors duration-150 ease-out hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <ArrowLeft size={16} strokeWidth={1.7} />
        Back to work
      </Link>

      <header className="mt-12 max-w-[760px]">
        <p className="font-mono text-[12px] text-muted">{project.year} · {project.status}</p>
        <h1 className="mt-3 font-display text-[40px] leading-tight sm:text-[48px]">{project.name}</h1>
        <p className="mt-6 text-[16px] leading-7 text-muted">{project.description}</p>
      </header>

      <div className="mt-12 aspect-[16/8] rounded-[var(--radius)] border border-border bg-surface-soft" />

      <div className="mt-16 grid gap-10 md:grid-cols-[180px_minmax(0,680px)]">
        <p className="font-mono text-[12px] text-muted">Overview</p>
        <div>
          <p className="text-[16px] leading-7 text-muted">
            This page is the starting structure for the full case study. We can replace
            this section with the real project story, screenshots, technical decisions,
            results, and links as we build each project.
          </p>
        </div>
      </div>
    </article>
  );
}