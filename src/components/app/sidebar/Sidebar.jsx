import React from 'react'
import Logo from './SidebarLogo'
import SidebarUzer from './SidebarUzer'

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="container">
        <div className="sidebar">
          <Logo />
          <div className="sidebar_menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="sidebar__info_uzer">
            <div className="uzer__search">
              <i className="icon-search"></i>
            </div>
            <div className="uzer__bell">
              <i className="icon-bell-alt"></i>
            </div>
            <div className="uzer__mail">
              <i className="icon-mail-alt"></i>
            </div>
          </div>
          <SidebarUzer />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
