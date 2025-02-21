import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/Projects";
import { Quote } from "./components/quote/Quote";
import { Skills } from "./components/skills/Skills";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { projectsExpanded } from "./components/projectsExpanded/ProjectsExpanded";


function App() {
  // console.log(header.home)
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={
            <div className="container_content">
              <Hero />
              <Quote />
              <Projects />
              <Skills />
              <About />
              <Contact />
            </div>
          } />
          <Route path="/project/:id" element={<projectsExpanded />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
