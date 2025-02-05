import { Route, Routes } from 'react-router'
import './App.css'
import {header} from "./assets/locales/en.json"
import Projects from './components/pages/Projects'
import Aboutme from './components/pages/Aboutme'
import Contacts from './components/pages/Contacts'
import Home from './components/pages/Home'

function App() {
 
  return (
    <div>
      <header>
        <a href={`/${header.home}`}>
        {header.home}
        </a>
        <a href={`/${header.projects}`}>
        {header.projects}
        </a>
        <a href={`/${header.about}`}>
        {header.about}
        </a>
        <a href={`/${header.contacts}`}>
        {header.contacts}
        </a>
      </header>
      <Routes>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about-me" element={<Aboutme/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
