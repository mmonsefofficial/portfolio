import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Typewriter = ({ words }: { words: string[] }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 80;
    const deletingSpeed = 50;
    const pauseTime = 2000;
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return <span className="text-[var(--muted)]">{text}</span>;
};

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center justify-between pt-12 md:pt-20 lg:pt-24 pb-12 lg:pb-24 min-h-[85vh]">
      
      {/* Left Column: Text Content */}
      <div className="flex flex-col items-start z-30 w-full lg:w-[45%]">
        <p className="text-[var(--muted)] mb-4 text-sm font-medium">Hi, I'm</p>
        
        <h1 className="text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-[var(--foreground)] leading-[1.05]">
          Mohamed <br /> AbdelMonsef
        </h1>
        
        <div className="h-[3px] w-12 bg-[var(--accent)] mt-8 mb-8"></div>
        
        <h2 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] mb-4">
          I build things and document what I learn.
        </h2>
        
        <p className="text-[var(--muted)] leading-relaxed max-w-md mb-10 text-base md:text-lg">
          Developer, designer and competitive programmer based in Egypt. Currently building Atlas and exploring AI, systems and product development.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <a 
            href="#work" 
            className="flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 py-3 font-medium transition-colors duration-200"
          >
            View my work
            <ArrowRight size={18} />
          </a>
          
          <a 
            href="/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--foreground)] font-medium border-b border-[var(--foreground)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors duration-200"
          >
            Download CV
            <Download size={18} />
          </a>
        </div>
      </div>

      {/* Right Column: Visual Playground */}
      <div className="relative w-full lg:w-[55%] h-[500px] lg:h-[650px] flex items-center justify-center lg:justify-end mt-16 lg:mt-0">
        
        {/* Dot Grid Pattern - Resized and targeted specifically behind the head/neck */}
        <div 
          className="absolute top-[10%] left-[25%] lg:left-[30%] w-[260px] h-[320px] opacity-[0.35] z-0 pointer-events-none"
          style={{ 
            backgroundImage: 'radial-gradient(circle, var(--muted) 1.5px, transparent 1.5px)', 
            backgroundSize: '24px 24px',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
        ></div>

        {/* Free-Floating Terminal Text */}
        <div className="absolute top-[5%] lg:top-[12%] right-0 lg:-right-6 xl:-right-16 font-mono text-xs md:text-sm text-[var(--muted)] z-10 leading-[2.2] hidden md:block">
          <p><span className="text-[var(--accent)]">{'>'}</span> whoami</p>
          <br />
          <p><span className="text-[var(--foreground)]">name:</span> Mohamed Monsef</p>
          <p>
            <span className="text-[var(--foreground)]">role:</span>{' '}
            <Typewriter words={['Developer', 'Competitive Programmer', 'Designer']} />
          </p>
          <p><span className="text-[var(--foreground)]">focus:</span> Building useful things</p>
          <p><span className="text-[var(--foreground)]">location:</span> Egypt</p>
          <p>
            <span className="text-[var(--foreground)]">status:</span>{' '}
            <Typewriter words={['Building Atlas', 'Training for ECPC', 'Exploring AI']} />
          </p>
          <div className="w-2.5 h-4 bg-[var(--accent)] animate-pulse mt-2 inline-block ml-1 align-middle"></div>
        </div>

        {/* Portrait Image */}
        <img 
          src="/portrait.png" 
          alt="Mohamed Monsef" 
          className="relative z-20 w-[95%] sm:w-[85%] lg:w-[105%] max-w-[700px] object-contain drop-shadow-2xl pointer-events-none lg:-translate-y-12 lg:-translate-x-4"
        />
      </div>

    </section>
  );
}
