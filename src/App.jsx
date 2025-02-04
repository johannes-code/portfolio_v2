import "./App.css";
import { Header } from "./components/header/header";

function App() {
  // console.log(header.home)
  return (
    <>
      <Header />
      <section className="min-h-screen p-24 grid grid-cols-2 justify-center items-center">
        <div>
          <h1>Hello</h1>
          <p>This is the home page</p>
        </div>
        <img
          src="/src/images/icons/discord.svg"
          alt=""
          className="h-full w-full"
        />
      </section>
    </>
  );
}

export default App;
