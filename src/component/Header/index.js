import websiteLogoImgUrl from '../../Logos/index'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-bar-container">
      <h2 className="website-name">
        <img
          src={websiteLogoImgUrl}
          alt="website-logo"
          className="website-logo"
        />
        AeroJunction
      </h2>
      <ul className="nav-items-container">
        <li className="li-nav-items">Destinations</li>
        <li className="li-nav-items">My Bookings</li>
        <li className="li-nav-items">Help Centre</li>
      </ul>
      <div>
        <button type="button" className="login-btn">
          Login
        </button>
      </div>
    </div>
  </nav>
)

export default Header
