import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ThemeProvider from "./features/ThemeProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Nav></Nav>
        </ThemeProvider>

        <Routes>
          //Route-komponenten bestämmer vilken Route som ska visas baserat på
          vilken URL användaren befinner sig på. Används för att bygga
          navigationsstrukturen för single-page application (SPA). Varje
          Route-komponent inuti Routes definierar sökväg (path) och den
          komponent (element) som ska renderas när den sökvägen besöks.
          <Route index path="/" element={<Home></Home>} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <ThemeProvider>
          <Footer></Footer>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
