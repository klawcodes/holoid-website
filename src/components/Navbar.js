import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/Hololive Indonesia logo.png'

const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)
    const changeColor =() => {
      if(window.scrollY >= 100) {
        setColor(true)
      } else {
        setColor(false)
      }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to='/'><img src={Logo} className='logo'/></Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
              <Link to='/' className={color ? 'text-ulw text-ulb' : 'text-ulw'}>Home</Link>
          </li>
          <li>
              <Link to='/generation' className={color ? 'text-ulw text-ulb' : 'text-ulw'}>Generation</Link>
          </li>
          <li>
              <Link to='/member' className={color ? 'text-ulw text-ulb' : 'text-ulw'}>Member</Link>
          </li>
      </ul>
      <div className='ham' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars className={color ? 'text-ulw text-ulb' : 'text-ulw'} size={20} />)}
      </div>
    </div>
  )
}

export default Navbar

