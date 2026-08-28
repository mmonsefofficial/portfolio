import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "Atlas",
    description: "Open-source structured programming roadmaps and curated learning resources.",
    link: "https://atlas-navy-mu.vercel.app",
    logo: "🗺️", // Replace with your actual image path, e.g., "/logos/atlas.png"
    bgColor: "bg-blue-50/50"
  },
  {
    id: 2,
    title: "STEM Guide",
    description: "Educational digital platform providing academic resources and guidance for STEM high school students.",
    link: "https://stemguide.org",
    logo: "🧬", 
    bgColor: "bg-indigo-50/50"
  },
  {
    id: 3,
    title: "ROTOR X",
    description: "Micro-scale horizontal-axis wind turbine prototype utilizing NACA 0018 airfoils.",
    link: "https://mmonsefofficial.github.io/rotorx/",
    logo: "🤖", 
    bgColor: "bg-purple-50/50"
  }
];

export default function Work() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8; 
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="work" className="py-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">Selected Work</h2>
          <p className="text-[var(--muted)] mt-2">Swipe or click the arrows to explore.</p>
        </div>
        
        {/* Carousel Arrow Controls */}
        <div className="flex gap-3">
          <button 
            onClick={() => scroll('left')}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[var(--accent)] transition-all"
            aria-label="Previous"
          >
            ←
          </button>
          <button 
            onClick={() => scroll('right')}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[var(--accent)] transition-all"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* Snap Scrolling Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <a 
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`min-w-[320px] md:min-w-[400px] snap-center shrink-0 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${project.bgColor}`}
          >
            {/* Logo Container */}
            <div className="h-20 w-20 rounded-2xl bg-white flex items-center justify-center text-4xl shadow-sm mb-12 group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300">
              {/* Replace {project.logo} with an <img src={project.logo} /> tag when you have image files */}
              {project.logo}
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}