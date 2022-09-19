import React from 'react'
import './Footer.css'

import Logo from '../assets/Hololive Indonesia logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='content-f'>
        <img src={Logo} className='logo-f' />
        <p>© 2022 Hololive Indonesia, Created by KLAW</p>
      </div>
    </div>
  )
}

export default Footer
