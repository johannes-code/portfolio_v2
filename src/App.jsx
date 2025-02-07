import "./App.css";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Qoute } from "./components/quote/Quote";

function App() {
  // console.log(header.home)
  return (
    <>
      <Header />
      <Hero />
      <Qoute />
    </>
  );
}

export default App;
