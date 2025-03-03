import { Hero } from "./hero/Hero";
import { Quote } from "./quote/Quote";
import { Projects } from "./projects/Projects";
import { Skills } from "./skills/Skills";
import { About } from "./about/About";
import { Contact } from "./contact/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="container_content">
      <Hero />
      <Quote />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
