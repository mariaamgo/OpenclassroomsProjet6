import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <p className="error__code">404</p>
      <p className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="error__link">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  )
}

export default Error
