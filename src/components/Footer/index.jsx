import logo from '../../assets/logo/logo_white.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={logo} alt="Logo de Kasa en blanc" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
