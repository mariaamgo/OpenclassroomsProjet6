import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo_pink.svg'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'link active-link' : 'link')}
          end
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a_propos"
          className={({ isActive }) => (isActive ? 'link active-link' : 'link')}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
