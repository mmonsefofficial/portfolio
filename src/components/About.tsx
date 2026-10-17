export default function About() {
  return (
    <section id="about" className="w-full py-16">
      
      <div className="cv-divider w-full mb-16"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Bio & Education */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] mb-6">
            A bit about me
          </h2>
          
          <p className="text-[var(--muted)] leading-relaxed mb-6 text-base">
            High-achieving junior at Red Sea STEM High School (Class of 2028) with a strong focus on computer science and mechanical engineering. Passionate about applying academic research to real-world problems.
          </p>

          <div className="p-6 bg-[var(--surface)] border border-[var(--border)] mb-6">
            <span className="font-mono text-xs text-[var(--accent)]">EDUCATION</span>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mt-1">Red Sea STEM High School</h3>
            <p className="text-sm text-[var(--muted)] mt-1">High School Diploma | Expected Graduation: July 2028</p>
            <p className="text-sm font-mono text-[var(--foreground)] mt-2">GPA: 3.7 / 4.00</p>
          </div>
        </div>

        {/* Right Column: Skills & Technologies */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] mb-6">
            Skills & Tools
          </h2>

          <div className="grid grid-cols-2 gap-4">
            
            <div className="p-5 bg-[var(--surface)] border border-[var(--border)]">
              <span className="font-mono text-xs text-[var(--accent)]">PROGRAMMING</span>
              <p className="text-sm font-medium text-[var(--foreground)] mt-2">C++, Python, JavaScript, TypeScript</p>
            </div>

            <div className="p-5 bg-[var(--surface)] border border-[var(--border)]">
              <span className="font-mono text-xs text-[var(--accent)]">WEB & CLOUD</span>
              <p className="text-sm font-medium text-[var(--foreground)] mt-2">React, Next.js, Tailwind CSS</p>
            </div>

            <div className="p-5 bg-[var(--surface)] border border-[var(--border)]">
              <span className="font-mono text-xs text-[var(--foreground)]">AI & DATA</span>
              <p className="text-sm font-medium text-[var(--foreground)] mt-2">TensorFlow, OpenCV, Pandas</p>
            </div>

            <div className="p-5 bg-[var(--surface)] border border-[var(--border)]">
              <span className="font-mono text-xs text-[var(--accent)]">TOOLS & CAD</span>
              <p className="text-sm font-medium text-[var(--foreground)] mt-2">Git, VS Code, Figma, AutoCAD</p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
