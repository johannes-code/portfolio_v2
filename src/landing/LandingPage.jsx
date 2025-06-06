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
    console.log("LandingPage useEffect - location.hash:", location.hash);

    if (location.hash) {
      const elementId = location.hash.slice(1);
      console.log("Looking for element with ID:", elementId);

      const element = document.getElementById(elementId);
      console.log("Found element:", element);

      if (element) {
        console.log("Scrolling to element:", element);

        // First scroll to top to make the effect more visible
        window.scrollTo(0, 0);

        // Then scroll to the target element with a slight delay
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      } else {
        console.log("Element not found!");
        // Let's also check what elements with IDs exist
        const allElementsWithIds = document.querySelectorAll("[id]");
        console.log(
          "All elements with IDs:",
          Array.from(allElementsWithIds).map((el) => el.id)
        );
      }
    }
  }, [location]);

  return (
    <div className="container_content">
      <Hero />
      <Quote />
      <div id="projects" style={{ minHeight: "100vh", paddingTop: "2rem" }}>
        <Projects />
      </div>
      <Skills />
      <div id="about-me" style={{ minHeight: "100vh", paddingTop: "2rem" }}>
        <About />
      </div>
      <div id="contacts" style={{ minHeight: "100vh", paddingTop: "2rem" }}>
        <Contact />
      </div>
    </div>
  );
}
