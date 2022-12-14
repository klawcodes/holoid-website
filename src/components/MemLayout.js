import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

import './MemLayout.css'
import bg from '../assets/bg.jpeg'

import iYopi from '../assets/yopip.png'
import iMoona from '../assets/moonap.png'
import iRisu from '../assets/risup.png'

import iOllie from '../assets/olliep.png'
import iAnya from '../assets/anyap.png'
import iReine from '../assets/reinep.png'

import iLord from '../assets/lordp.png'
import iKaela from '../assets/kaelap.png'
import iZeta from '../assets/zetap.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const MemLayout = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='layout'>
      <img src={bg} id='image' alt='' />
      <div className='l-bg'>
        <div className='mem-list'>

          <div className="risu" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
            <Link to='/member/ayunda-risu'>
              <img src={iRisu} className="imagek"/> 
            </Link>
            <h3>GEN 1 - AREA 15</h3>
            <h2>AYUNDA RISU</h2>
          </div>
          <div className="moona" data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">
            <Link to='/member/moona-hoshinova'>
              <img src={iMoona} className="imagek"/> 
            </Link>
            <h3>GEN 1 - AREA 15</h3>
            <h2>MOONA HOSHINOVA</h2>
          </div>
          <div className="yopi" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
            <Link to='/member/airani-iofifteen'>
              <img src={iYopi} className="imagek"/> 
            </Link>
            <h3>GEN 1 - AREA 15</h3> 
            <h2>AIRANI IOFIFTEEN</h2>
          </div>

          <div className="ollie">
            <Link to='/member/kureiji-ollie'>
              <img src={iOllie} className="imagek"/> 
            </Link>
            <h3>GEN 2 - HOLORO</h3>
            <h2>KUREIJI OLLIE</h2>
          </div>
          <div className="anya">
            <Link to='/member/anya-melfissa'>
              <img src={iAnya} className="imagek"/> 
            </Link>
            <h3>GEN 2 - HOLORO</h3>
            <h2>ANYA MELFISSA</h2>
          </div>
          <div className="reine">
            <Link to='/member/pavolia-reine'> 
              <img src={iReine} className="imagek"/> 
            </Link>
            <h3>GEN 2 - HOLORO</h3> 
            <h2>PAVOLIA REINE</h2>
          </div>

          <div className="zeta">
            <Link to='/member/vestia-zeta'>
              <img src={iZeta} className="imagek"/> 
            </Link>  
            <h3>GEN 3 - HOLOH3RO</h3>
            <h2>VESTIA ZETA</h2>
          </div>
          <div className="kaela">
            <Link to='/member/kaela-kovalskia'>
              <img src={iKaela} className="imagek"/> 
            </Link>
            <h3>GEN 3 - HOLOH3RO</h3>
            <h2>KAELA KOVALSKIA</h2>
          </div>
          <div className="lord">
            <Link to='/member/kobo-kanaeru'>
              <img src={iLord} className="imagek"/> 
            </Link>  
            <h3>GEN 3 - HOLOH3ERO</h3> 
            <h2>KOBO KANAERU</h2>
          </div>


        </div> 
      </div>
    </div>
  )
}

export default MemLayout
