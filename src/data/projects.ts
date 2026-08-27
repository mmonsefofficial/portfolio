export type Project = {
  slug: string;
  number: string;
  name: string;
  description: string;
  year: string;
  tags: string[];
  status: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "atlas",
    number: "01",
    name: "Atlas",
    description: "A programming learning platform built around clear paths and useful resources.",
    year: "2026",
    tags: ["React", "TypeScript", "Tailwind"],
    status: "Building",
    featured: true,
  },
  {
    slug: "hassas",
    number: "02",
    name: "Hassas",
    description: "A computer vision project for making irrigation decisions with less water waste.",
    year: "2026",
    tags: ["Python", "YOLO", "AI"],
    status: "Hackathon project",
    featured: true,
  },
  {
    slug: "stem-guide",
    number: "03",
    name: "STEM Guide",
    description: "A learning resource platform for students working through STEM subjects.",
    year: "2025",
    tags: ["Web", "Education"],
    status: "Building",
    featured: true,
  },
  {
    slug: "rotor-x",
    number: "04",
    name: "ROTOR X",
    description: "A small wind-energy prototype built and tested as a STEM engineering project.",
    year: "2025",
    tags: ["Engineering", "Energy"],
    status: "Prototype",
  },
];