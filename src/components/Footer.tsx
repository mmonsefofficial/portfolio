import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--background)] py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright and Location */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm font-medium text-[var(--foreground)]">
            © 2026 Mohamed Monsef
          </p>
          <p className="font-mono text-xs text-[var(--muted)]">
            Ras Ghareb, Egypt · UTC+2
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/mmonsefofficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/mmonsefofficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a 
            href="https://instagram.com/realmonsef.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

          <a 
            href="mailto:realmonsef.xyz@gmail.com" 
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}