import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { Projects } from "./landing/projects/Projects";
import { Footer } from "./components/footer/Footer";
import { ProjectsExpanded } from "./landing/projects/projectsExpanded/ProjectsExpanded";
import { LandingPage } from "./landing/LandingPage";
import { AboutExpanded } from "./landing/about/AboutExpanded/AboutExpanded";

function App() {
  return (
    <Router>
      <Header />
      <div className="container_content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectsExpanded />} />
          <Route path="/about_me" element={<AboutExpanded />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
