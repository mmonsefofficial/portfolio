import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-[var(--background)] py-6 z-50">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo / Initials - Bold and sharp */}
        <Link 
          to="/" 
          className="font-semibold text-[var(--foreground)] tracking-tight text-xl"
        >
          MM
        </Link>

        {/* Desktop & Mobile Links */}
        <div className="flex gap-6 text-sm text-[var(--muted)] font-medium">
          <a href="#work" className="hover:text-[var(--accent)] transition-colors duration-200">
            Work
          </a>
          <a href="#about" className="hover:text-[var(--accent)] transition-colors duration-200">
            About
          </a>
          <a href="#now" className="hover:text-[var(--accent)] transition-colors duration-200">
            Now
          </a>
        </div>

      </div>
    </nav>
  );
}