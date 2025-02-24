import { Hero } from "./hero/hero";
import { Quote } from "./quote/Quote";
import { Projects } from "./projects/Projects";
import { Skills } from "./skills/Skills";
import { About } from "./about/About";
import { Contact } from "./contact/Contact";

export function LandingPage() {
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
