interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  link: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Atlas',
    description: 'Programming learning platform with structured roadmaps and curated resources.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    year: '2026',
    link: 'https://atlas-navy-mu.vercel.app/'
  },
  {
    id: '02',
    title: 'Hassas',
    description: 'Computer vision system for smart irrigation decisions in agriculture.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'OpenCV'],
    year: '2026',
    link: '#'
  },
  {
    id: '03',
    title: 'STEM Guide',
    description: 'Educational digital platform providing academic resources and guidance for STEM students.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    year: '2025',
    link: 'https://stemguide.org'
  },
  {
    id: '04',
    title: 'ROTOR X',
    description: 'Micro-scale horizontal-axis wind turbine prototype utilizing NACA 0018 airfoils.',
    tech: ['Engineering', 'NACA Airfoils', 'CAD'],
    year: '2025',
    link: 'https://mmonsefofficial.github.io/rotorx/'
  }
];

export default function Work() {
  return (
    <section id="work" className="w-full py-20">
      
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
          Selected work
        </h2>
        <span className="font-mono text-xs text-[var(--muted)]">04 projects</span>
      </div>

      {/* Projects List */}
      <div className="flex flex-col">
        {projects.map((project) => (
          <div key={project.id} className="group">
            {/* The CV-style blue divider */}
            <div className="cv-divider w-full"></div>
            
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group-hover:bg-[var(--surface)] px-4 transition-colors duration-200"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-sm text-[var(--muted)]">{project.id}</span>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] mt-1 max-w-xl">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 self-start md:self-center">
                <span className="hidden lg:inline-block font-mono text-xs text-[var(--muted)]">
                  {project.tech.join(' · ')}
                </span>
                <span className="font-mono text-sm text-[var(--foreground)]">
                  {project.year} ↗
                </span>
              </div>
            </a>
          </div>
        ))}
        {/* Final bottom border */}
        <div className="cv-divider w-full"></div>
      </div>

    </section>
  );
}