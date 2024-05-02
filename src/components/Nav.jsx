import '../styles/Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <header className="header">
      <h1 className="title">Solveig Béen</h1>

      <nav className="nav"> 
        <ul className="navlist">
          {/**  Länkar till fördefinierade sidor med Routes.*/}
          <Link to="/">
            <li className="navitem">Home</li>
          </Link>
          <Link to="/Projects">
            <li className="navitem">Projects</li>
          </Link>
          <Link to="/Contact">
            <li className="navitem">Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
