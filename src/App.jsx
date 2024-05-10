import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import './pages/errorPage/Error.jsx'
import Nav from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ThemeProvider from "./features/ThemeProvider";
import Error from "./pages/errorPage/Error.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <ThemeProvider>
        <Nav></Nav>
       
        <Routes>
          // The Route component determines which route to display based on the URL the user is on. It's used to build the navigation structure for a single-page application (SPA). Each Route component inside Routes defines a path and the component (element) to render when that path is visited.//
          <Route index path="/" element={<Home></Home>}   />
          <Route path="/Projects" element={<Projects />}  />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Error />} /> {/* When path is incorret*/}
        </Routes>
        
          <Footer></Footer>
          </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
