import React from 'react'
import NavMenu from './NavMenu'
// import Uzers from './NavbarUzer'
import * as ROUTES from '../../../constants/routes'

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <NavMenu
          to={ROUTES.DASHDOARD}
          name="Dashboard"
          fontello="icon-laptop"
        />
        <div className="Navbar__Head">Managers</div>
        <NavMenu
          to={ROUTES.ADDEMPLOYEE}
          name="Add employee"
          fontello="icon-plus"
        />
        <div className="Navbar__Head">Admins</div>
        <NavMenu
          to={ROUTES.EQUIPMENT}
          name="Equipment"
          fontello="icon-desktop"
        />
        <div className="Navbar__Head">Reports</div>
        <NavMenu to="/profile" name="People" fontello="icon-users" />
        {/* <NavMenu to="/equipment" name="News Line" /> */}
        <div className="Navbar__Head">Other</div>
        <NavMenu to="/dialogs" name="Other" fontello="icon-cog-alt" />
      </nav>
    </div>
  )
}

export default Navbar

{
  /* <NavMenu to="/statistics" name="Statistics" /> */
}
{
  /* <NavMenu to="/settings" name="Settings" /> */
}
{
  /* <NavMenu to="/register" name="Register" /> */
}
