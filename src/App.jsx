import './App.css'
import {header} from "./assets/locales/en.json"
function App() {
  
  console.log(header.home)
  return (
    <>
    <header>
    {header.home}
    {header.projects}
    {header.about}
    {header.contacts}
    </header>
      
    </>
  )
}

export default App
