import React from 'react'
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

const MemLayout = () => {
  return (
    <div className='layout'>
      <img src={bg} id='image' alt='' />
      <div className='l-bg'>
        <div className='mem-list'>

          <div className="risu">
            <Link to='/member/ayunda-risu'>
              <img src={iRisu} className="imagek"/> 
            </Link>
            <h3>GEN 1 - AREA 15</h3>
            <h2>AYUNDA RISU</h2>
          </div>
          <div className="moona">
            <Link to='/member/moona-hoshinova'>
              <img src={iMoona} className="imagek"/> 
            </Link>
            <h3>GEN 1 - AREA 15</h3>
            <h2>MOONA HOSHINOVA</h2>
          </div>
          <div className="yopi">
            <a href="" target="_blank">
              <img src={iYopi} className="imagek"/> 
            </a>  
            <h3>GEN 1 - AREA 15</h3> 
            <h2>AIRANI IOFIFTEEN</h2>
          </div>

          <div className="ollie">
            <a href="" target="_blank">
              <img src={iOllie} className="imagek"/> 
            </a>  
            <h3>GEN 2 - HOLORO</h3>
            <h2>KUREIJI OLLIE</h2>
          </div>
          <div className="anya">
            <a href="" target="_blank">
              <img src={iAnya} className="imagek"/> 
            </a>  
            <h3>GEN 2 - HOLORO</h3>
            <h2>ANYA MELFISA</h2>
          </div>
          <div className="reine">
            <a href="" target="_blank">
              <img src={iReine} className="imagek"/> 
            </a>  
            <h3>GEN 2 - HOLORO</h3> 
            <h2>PAVOLIA REINE</h2>
          </div>

          <div className="zeta">
            <a href="" target="_blank">
              <img src={iZeta} className="imagek"/> 
            </a>  
            <h3>GEN 3 - HOLOH3RO</h3>
            <h2>VESTIA ZETA</h2>
          </div>
          <div className="kaela">
            <a href="" target="_blank">
              <img src={iKaela} className="imagek"/> 
            </a>  
            <h3>GEN 3 - HOLOH3RO</h3>
            <h2>KAELA KOVALSKIA</h2>
          </div>
          <div className="lord">
            <a href="" target="_blank">
              <img src={iLord} className="imagek"/> 
            </a>  
            <h3>GEN 3 - HOLOH3ERO</h3> 
            <h2>KOBO KANAERU</h2>
          </div>


        </div> 
      </div>
    </div>
  )
}

export default MemLayout
