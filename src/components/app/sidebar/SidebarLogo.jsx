import React from 'react'
import Header_logo from '../../../assets/images/RH_logo.svg'

const Logo = () => {
  return (
    <div className="Logo">
      <a href="/">
        <img src={Header_logo} alt="logo" className='Logo__bg' />
      </a>
    </div>
  )
}

export default Logo
