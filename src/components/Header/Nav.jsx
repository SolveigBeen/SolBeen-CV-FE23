import ThemeToggler from "../ThemeToggler";
import "./Nav.css";
import { Link } from "react-router-dom";
import ThemeProvider from "../../features/ThemeProvider";

const Nav = () => {
  return (
    <header className="header">
      <div className="themeToggler">
        <ThemeToggler></ThemeToggler>
      </div>
      <h1 className="title">Solveig Béen - Interaction Designer</h1>

      <nav className="nav">
      
        <ul className="navlist">
      
          {/**  Länkar till fördefinierade sidor med Routes.*/}
          <Link to="/">
          <ThemeProvider>
            <li className="navitem">Home</li>
          </ThemeProvider>
          </Link>
          <Link to="/Projects">
          <ThemeProvider>
            <li className="navitem">Projects</li>
            </ThemeProvider>
          </Link>
          <Link to="/Contact">
          <ThemeProvider>
            <li className="navitem">Contact</li>
          </ThemeProvider>
          </Link>
         
        </ul>
     
      </nav>
    </header>
  );
};

export default Nav;
