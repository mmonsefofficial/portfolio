import Hero from "../components/Hero";
import Work from "../components/Work";
import Updates from "../components/Updates";
import About from "../components/About";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-12">
      <Hero />
      <Work />
      <Updates />
      <About />
    </main>
  );
}