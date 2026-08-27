import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Updates from './components/Updates';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] selection:bg-[var(--accent)] selection:text-white overflow-hidden flex flex-col justify-between">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 pt-12 flex-grow">
        <Hero />
        <Work />
        <Updates />
        <About />
      </main>

      <Footer />
    </div>
  );
}