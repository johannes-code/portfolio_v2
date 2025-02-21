import "./App.css";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/Projects";
import { Quote } from "./components/quote/Quote";
import { Skills } from "./components/skills/Skills";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {
  // console.log(header.home)
  return (
    <>
      <Header />
      <div className="container_content">
        <Hero />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
