import React from 'react'
import './FirstPage.css'

import bg from '../assets/bg.jpeg'
import Logo from '../assets/Hololive Indonesia logo.png'

import {FaFacebook, FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa'

const FirstPage = () => {
  return (
    <div className='hero'>
      <img src={bg} id='image'/>
      <div className='content'>
        <div className='left-f'>
          <div className='bg'>
            <div className='main'>
              <img src={Logo} id='logo' />
              <div className='socials'>
                <h4><FaFacebook size={20} /> Hololive Indonesia</h4>
                <h4><FaYoutube size={20}/> hololive Indonesia</h4>
                <h4><FaTwitter size={20}/> @hololive_Id</h4>
              </div>
              <div className='about'>
                <h2>Apa itu Hololive Production</h2>
                <p>hololive Production merupakan agensi Virtual Youtuber (VTuber) di Jepang dengan<br/> fokus utama Live Streaming, yang menaungi puluhan talent VTuber dari berbagai belahan dunia<br/> dengan total lebih dari 37 juta penggemar di YouTube.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='right-f'>
          <div className='v-y'>
            <iframe width="426" height="240" src="https://www.youtube.com/embed/lFQW5S_xH1o" frameborder="0"></iframe>
            <iframe width="426" height="240" src="https://www.youtube.com/embed/Wp90CrP-s_8" frameborder="0"></iframe>
            <iframe width="426" height="240" src="https://www.youtube.com/embed/wlyRGXUwjVA" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
