import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from './components/Nav'
import Footer from "./components/Footer";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from "./pages/Contact";

function App() {


  return (
    <BrowserRouter>
    
      <Nav></Nav>
      <h1>HHHH</h1>
      <Routes>
        //Route-komponenten bestämmer vilken Route som ska visas baserat på vilken URL användaren befinner sig på. Används för att bygga navigationsstrukturen för single-page application (SPA). Varje Route-komponent inuti Routes definierar sökväg (path) och den komponent (element) som ska renderas när den sökvägen besöks.
          <Route index path="/" element={<Home></Home>} /> 
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  )
}

export default App
