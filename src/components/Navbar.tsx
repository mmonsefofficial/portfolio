export default function Navbar() {
  return (
    /* fixed positioning ensures it floats over all content, pointer-events-none lets you click "through" the invisible container */
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      
      {/* The glassy pill container - pointer-events-auto makes the buttons clickable again */}
      <nav className="flex items-center gap-8 px-8 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#333] rounded-full shadow-2xl pointer-events-auto">
        
        <a 
          href="#work" 
          className="text-xs font-bold tracking-[0.2em] text-gray-300 hover:text-[var(--accent)] transition-colors duration-200 uppercase"
        >
          Work
        </a>
        
        <a 
          href="#about" 
          className="text-xs font-bold tracking-[0.2em] text-gray-300 hover:text-[var(--accent)] transition-colors duration-200 uppercase"
        >
          About
        </a>
        
        <a 
          href="#now" 
          className="text-xs font-bold tracking-[0.2em] text-gray-300 hover:text-[var(--accent)] transition-colors duration-200 uppercase"
        >
          Now
        </a>

      </nav>
    </div>
  );
}