export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      
      {/* Transparent Glassy Pill for Light Mode */}
      <nav className="flex items-center gap-8 px-8 py-4 bg-white/30 backdrop-blur-md border border-white/40 shadow-sm rounded-full pointer-events-auto">
        
        <a 
          href="#work" 
          className="text-xs font-bold tracking-[0.2em] text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-200 uppercase"
        >
          Work
        </a>
         
        <a 
          href="#now" 
          className="text-xs font-bold tracking-[0.2em] text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-200 uppercase"
        >
          Now
        </a>

        <a 
          href="#about" 
          className="text-xs font-bold tracking-[0.2em] text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-200 uppercase"
        >
          About
        </a>
       
      </nav>
    </div>
  );
}