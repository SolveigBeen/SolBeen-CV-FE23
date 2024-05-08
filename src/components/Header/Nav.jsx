//The Nav Component includes the common Header for all pages.

//NavLink is used to be able to style the links in the navigation menu. To improve the usabiltiy impression to highlight the active page.

//ThemeToggler includes a button to toggle the color themes.


import ThemeToggler from "../ThemeToggler";
import "./Nav.css";
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <header className="header">
      <div className="themeToggler">
        <ThemeToggler></ThemeToggler>   
      </div>
      <div>
      
      </div>
      <h1 className="header__title">Solveig Béen</h1> <h3>Interaction Designer</h3>

      <nav>
        <ul className="header__navlist">
      
          {/**  Länkar till fördefinierade sidor med Routes.*/}
          <NavLink exact to="/">
            <li className="header__navitem" activeclassname="active">Home</li>
          </NavLink>
          
          <NavLink exact to="/Projects">
            <li className="header__navitem" activeclassname="active">Projects</li>
          </NavLink>

          <NavLink exact to="/Contact">
            <li className="header__navitem" activeclassname="active">Contact</li>
          </NavLink>
         
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
