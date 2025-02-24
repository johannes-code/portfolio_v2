import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { Projects } from "./landing/projects/Projects";
import { Footer } from "./components/footer/Footer";
import { ProjectsExpanded } from "./landing/projects/projectsExpanded/ProjectsExpanded";
import { LandingPage } from "./landing/LandingPage";

function App() {
  // console.log(header.home)
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectsExpanded />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
