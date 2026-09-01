import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-fg">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
