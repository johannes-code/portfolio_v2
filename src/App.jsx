import "./App.css";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Quote } from "./components/quote/Quote";

function App() {
  // console.log(header.home)
  return (
    <>
      <Header />
      <div className="container_content">
        <Hero />
        <Quote />
      </div>
    </>
  );
}

export default App;
