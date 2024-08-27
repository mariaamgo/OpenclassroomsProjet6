import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo_pink.svg'

function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="Logo de Kasa" className="navbar__image" />
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            end
          >
            Accueil
          </NavLink>
          <NavLink
            to="/a_propos"
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            A Propos
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
