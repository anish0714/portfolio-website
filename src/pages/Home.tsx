import { useEffect } from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  useEffect(() => {
    // Plain <a href="#section"> nav links don't reliably surface as a
    // location change through React Router when already on this page, so
    // this listens to the native hashchange event directly instead. It also
    // runs once on mount to handle a full page load landing on a hash (a
    // fresh visit, or "Back to portfolio" from a project detail page),
    // where the browser's own fragment-scroll fires before React has
    // painted the target section and so misses it.
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      // Re-running this over ~1s catches up with the web-font swap
      // reflowing section heights shortly after the initial paint.
      [0, 100, 300, 600, 1000].forEach((delay) => {
        setTimeout(() => document.getElementById(id)?.scrollIntoView(), delay);
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
