//NavLink is used to be able to style the links in the navigation menu. To improve the usabiltiy impression to highlight the active page.

//ThemeToggler includes the button to toggle themes.

import ThemeToggler from "../ThemeToggler";
import "./Nav.css";
import { NavLink } from "react-router-dom";


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
        
            <li className="navitem" activeClassName="active">Home</li>
          
          </NavLink>
          <NavLink exact to="/Projects">
          
            <li className="navitem" activeClassName="active">Projects</li>
            
          </NavLink>
          <NavLink exact to="/Contact">
         
            <li className="navitem" activeClassName="active">Contact</li>
          
          </NavLink>
         
        </ul>
     
      </nav>
    </header>
  );
};

export default Nav;
