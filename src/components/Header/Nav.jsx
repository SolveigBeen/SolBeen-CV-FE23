//NavLink is used to be able to style the links in the navigation menu. To improve the usabiltiy impression to highlight the active page.

import ThemeToggler from "../ThemeToggler";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import ThemeProvider from "../../features/ThemeProvider";

const Nav = () => {
  return (
    <header className="header">
      <div className="themeToggler">
        <ThemeToggler></ThemeToggler>
      </div>
      <h1 className="title">Solveig Béen</h1> <h2>Interaction Designer</h2>

      <nav className="nav">
      
        <ul className="navlist">
      
          {/**  Länkar till fördefinierade sidor med Routes.*/}
          <NavLink exact to="/">
          <ThemeProvider>
            <li className="navitem" activeClassName="active">Home</li>
          </ThemeProvider>
          </NavLink>
          <NavLink exact to="/Projects">
          <ThemeProvider>
            <li className="navitem" activeClassName="active">Projects</li>
            </ThemeProvider>
          </NavLink>
          <NavLink exact to="/Contact">
          <ThemeProvider>
            <li className="navitem" activeClassName="active">Contact</li>
          </ThemeProvider>
          </NavLink>
         
        </ul>
     
      </nav>
    </header>
  );
};

export default Nav;
