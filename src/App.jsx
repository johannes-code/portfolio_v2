import "./App.css";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/Projects";
import { Quote } from "./components/quote/Quote";

function App() {
  // console.log(header.home)
  return (
    <>
      <Header />
      <div className="container_content">
        <Hero />
        <Quote />
        <Projects />
      </div>
    </>
  );
}

export default App;
