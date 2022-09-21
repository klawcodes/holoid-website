import React from 'react'

import {Link} from 'react-router-dom'

import './Zeta.css'

import zBg from '../../assets/Vestia_Zeta_by_Airani_Iofifteen.png'
import zFb from '../../assets/Vestia_Zeta_Full_Body.png'

import zSa from '../../assets/risus.jpeg'
import zSh from '../../assets/risus-2.jpeg'

import {BsMusicNoteBeamed, BsYoutube, BsFillPlayCircleFill, BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare, FaTiktok} from 'react-icons/fa'

const Zeta = () => {
  return (
    <div className='zeta-com'>
      <img src={zBg} alt='' id='r-image'/>
      <div className='m-bg'>
        <div className='g-trans'></div>
        <div className='g-solid'>
          <div className='m-left'>
            <img src={zFb} alt='' id='rr-body' />
          </div>
          <div className='m-right'>
            <div className='m-about'>
              <h2 className='m-t'>Vestia Zeta</h2>
              <h2 className='m-ts'>(ベスティア・ゼータ)</h2>
              <p className='m-p'>
    Vestia Zeta (ベスティア・ゼータ) is a female Indonesian Virtual YouTuber associated with hololive,<br/> debuting as part of its Indonesian (ID) branch third generation of VTubers <br/>alongside Kaela Kovalskia and Kobo Kanaeru.  
              </p>
            </div>
            <div className='m-profile'>
              <h2 className='m-tss'>Profile</h2>
              <hr className='m-l'/>
              <div className='v-p'>
                <iframe width="321" height="180" src="https://www.youtube.com/embed/FbTMYv7B0Ag" frameborder="0" id='i-frame'></iframe>
                <p className='m-pp'>
                  
    She is the mysterious 7th recruit of The Secret Archive <br/>Unit that has a full license to collect virtual data.<br/><br/>

Despite her being a promising rookie, who is also known as <br/>codename V.7, she turns clumsy when things are not going exactly <br/>according to the manual.<br/><br/>

It was initially a lonely mission to infiltrate the virtual world, <br/>but now she had found comfort here. Will this mission end up <br/>leading her to a new destiny instead...?

                </p>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss'>Mascot & Fans</h2>
              <hr className='m-l' />
              <p className='m-ppp'>
    Her mascot is called "Bazo."<br/><br/>
    Her fanbase is officially called "Zecretary."<br/><br/>    Another name considered was "Zetaibou."<br/><br/>Her members are called "Secret Unit."
              </p>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss'>Social</h2>
              <hr className='m-l'/>
              <div className='m-socials'>
                <a className='z' href='https://www.youtube.com/channel/UCTvHWSfBZgtxE4sILOaurIQ' target='_blank'><BsYoutube size={40}/></a>
                <a className='z' href='https://twitter.com/vestiazeta' target='_blank'><BsTwitter size={40}/></a>
                <a className='z' href='https://www.tiktok.com/@vestiazeta' target='_blank'><FaTiktok size={40}/></a>
                <a className='z' href='https://instagram.com/vestiazeta' target='_blank'><BsInstagram size={40}/></a>
                <a className='z' href='https://www.facebook.com/VestiaZeta' target='_blank'><FaFacebookSquare size={40}/></a>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zeta
