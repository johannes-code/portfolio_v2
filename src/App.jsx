import "./App.css";
import { Header } from "./components/header/header";
// import { Hero } from "./components/hero/hero";
// import { Projects } from "./components/projects/Projects";
// import { Quote } from "./components/quote/Quote";
// import { Skills } from "./components/skills/Skills";
import { About } from "./components/about/About";

function App() {
  // console.log(header.home)
  return (
    <>
      <Header />
      <div className="container_content">
        {/* <Hero /> */}
        {/* <Quote /> */}
        {/* <Projects /> */}
        {/* <Skills /> */}
        <About />
      </div>
    </>
  );
}

export default App;
