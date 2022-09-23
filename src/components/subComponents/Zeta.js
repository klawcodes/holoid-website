import React, { useEffect } from 'react'

import {Link} from 'react-router-dom'

import './Zeta.css'

import zBg from '../../assets/Vestia_Zeta_by_Airani_Iofifteen.png'
import zFb from '../../assets/Vestia_Zeta_Full_Body.png'

import zSa from '../../assets/risus.jpeg'
import zSh from '../../assets/risus-2.jpeg'

import {BsMusicNoteBeamed, BsYoutube, BsFillPlayCircleFill, BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare, FaTiktok} from 'react-icons/fa'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Zeta = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='zeta-com'>
      <img src={zBg} alt='' id='r-image'/>
      <div className='m-bg'>
        <div className='g-trans'></div>
        <div className='g-solid'>
          <div className='m-left'>
            <img src={zFb} alt='' id='rr-body' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" />
          </div>
          <div className='m-right'>
            <div className='m-about'>
              <h2 className='m-t' data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">Vestia Zeta</h2>
              <h2 className='m-ts' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">(ベスティア・ゼータ)</h2>
              <p className='m-p' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1600">
    Vestia Zeta (ベスティア・ゼータ) is a female Indonesian Virtual YouTuber associated with hololive,<br/> debuting as part of its Indonesian (ID) branch third generation of VTubers <br/>alongside Kaela Kovalskia and Kobo Kanaeru.  
              </p>
            </div>
            <div className='m-profile'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Profile</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"/>
              <div className='v-p' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
                <iframe width="321" height="180" src="https://www.youtube.com/embed/FbTMYv7B0Ag" frameborder="0" id='i-frame'></iframe>
                <p className='m-pp'>
                  
    She is the mysterious 7th recruit of The Secret Archive <br/>Unit that has a full license to collect virtual data.<br/><br/>

Despite her being a promising rookie, who is also known as <br/>codename V.7, she turns clumsy when things are not going exactly <br/>according to the manual.<br/><br/>

It was initially a lonely mission to infiltrate the virtual world, <br/>but now she had found comfort here. Will this mission end up <br/>leading her to a new destiny instead...?

                </p>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Mascot & Fans</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" />
              <p className='m-ppp' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600">
    Her mascot is called "Bazo."<br/><br/>
    Her fanbase is officially called "Zecretary."<br/><br/>    Another name considered was "Zetaibou."<br/><br/>Her members are called "Secret Unit."
              </p>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Social</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200"/>
              <div className='m-socials'>
                <a className='z' href='https://www.youtube.com/channel/UCTvHWSfBZgtxE4sILOaurIQ' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1400"><BsYoutube size={40}/></a>
                <a className='z' href='https://twitter.com/vestiazeta' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600"><BsTwitter size={40}/></a>
                <a className='z' href='https://www.tiktok.com/@vestiazeta' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000"><FaTiktok size={40}/></a>
                <a className='z' href='https://instagram.com/vestiazeta' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2200"><BsInstagram size={40}/></a>
                <a className='z' href='https://www.facebook.com/VestiaZeta' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2400"><FaFacebookSquare size={40}/></a>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zeta
