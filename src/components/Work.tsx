import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Atlas",
    link: "https://atlas-navy-mu.vercel.app",
    logo: "🗺️", // Replace with your actual <img> tag or SVG
    bg: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "STEM Guide",
    link: "https://stemguide.org",
    logo: "🧬", 
    bg: "bg-gradient-to-br from-orange-400 to-amber-500", // Matches the orange vibe from your image
  },
  {
    id: 3,
    title: "ROTOR X",
    link: "https://mmonsefofficial.github.io/rotorx/",
    logo: "🤖", 
    bg: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
  }
];

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const current = projects[currentIndex];

  return (
    <section id="work" className="py-24 flex flex-col items-center justify-center px-4">
      
      {/* Outer dark container matching the reference UI */}
      <div className="w-full max-w-3xl bg-[#1c1c1e] p-6 sm:p-8 rounded-[2.5rem] relative shadow-2xl">
        
        {/* Main Card */}
        <div className={`relative w-full aspect-[4/3] sm:aspect-[21/10] rounded-[2rem] transition-colors duration-500 ${current.bg} overflow-hidden shadow-inner`}>
          
          {/* Clickable Center Logo */}
          <a 
            href={current.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute inset-0 flex items-center justify-center text-8xl hover:scale-110 transition-transform duration-300 z-0"
            aria-label={`Open ${current.title}`}
          >
            {current.logo}
          </a>

          {/* Left Arrow */}
          <button 
            onClick={prev} 
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 backdrop-blur-md transition-all z-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          {/* Right Arrow */}
          <button 
            onClick={next} 
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 backdrop-blur-md transition-all z-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          {/* Bottom Left Title */}
          <div className="absolute bottom-5 sm:bottom-6 left-6 sm:left-8 pointer-events-none z-10">
            <h3 className="text-white text-3xl font-bold tracking-wide drop-shadow-md">{current.title}</h3>
          </div>

          {/* Bottom Right Counter Pill */}
          <div className="absolute bottom-5 sm:bottom-6 right-6 sm:right-8 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-sm font-bold tracking-widest pointer-events-none z-10 shadow-sm">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>

        {/* Bottom Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'w-8 h-2.5 bg-gray-200' 
                  : 'w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}