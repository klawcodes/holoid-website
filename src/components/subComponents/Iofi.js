import React, { useEffect } from 'react'

import {Link} from 'react-router-dom'

import './Iofi.css'

import iBg from '../../assets/airani iofifteen art.png'
import iFb from '../../assets/yopi full.png'

import iSq from '../../assets/iofis.jpeg'
import iSh from '../../assets/risus-2.jpeg'

import {BsMusicNoteBeamed, BsYoutube, BsFillPlayCircleFill, BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare, FaTiktok} from 'react-icons/fa'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Iofi = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='iofi-com'>
      <img src={iBg} alt='' id='m-image' />
      <div className='m-bg'>
        <div className='g-trans'></div>
        <div className='g-solid'>
          <div className='m-left'>
            <img src={iFb} alt='' id='i-body' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" />
          </div>
          <div className='m-right'>
            <div className='m-about'>
              <h2 className='m-t' data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">Airani Iofifteen</h2>
              <h2 className='m-ts' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">(アイラニ・イオフィフティーン)</h2>
              <p className='m-p' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1600">
    Airani Iofifteen (アイラニ・イオフィフティーン) is a female Indonesian Virtual YouTuber associated with hololive,<br/> debuting as part of its Indonesian (ID) branch first generation of VTubers alongside Moona Hoshinova and Ayunda Risu. 
              </p>
            </div>
            <div className='m-profile'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Profile</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"/>
              <div className='v-p' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
                <iframe width="321" height="180" src="https://www.youtube.com/embed/EM11RaN_Zn8" frameborder="0" id='i-frame'></iframe>
                <p className='m-pp'>
    "IOFORIA~! OBISA!" "Pagi semua! I’m your beloved smart alien <br/>iofi from hololive Indonesia, nice to meet you!" <br/><br/>

An alien princess who ran away from home and come to the earth <br/>and fell in love with earth’s culture, sometimes like to tease the viewers <br/>and being a nice iomama if her fans needs it. Sometimes <br/>got crazy over gacha game. 
                </p>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Personality</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900"/>
              <p className='m-ppp' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
    Iofi is a cute, cheerful and open person, but she is prone to panicking when things don't go in her favor or<br/> unexpected event happened on her streams. She has exceptional knowledge of Indonesian customs, slang and <br/>regional dialects. Her design also speaks for herself as a skilled artist who is currently majoring in VCD.  
              </p>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Discography</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900" />
              <div className='m-so' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
                <div className='ai-no'>
                  <img className='m-cover' src={iSq} alt=''/>
                  <h2 className='m-j'>"Q&A=E"</h2>
                  <h3 className='m-js'>(Kyawaii)</h3>
                  <div className='music-link'>
                    <a className='i' href='https://cover.lnk.to/QAE' target='_blank'><BsMusicNoteBeamed size='20'/></a>
                    <a className='i' href='https://youtu.be/Wp90CrP-s_8' target='_blank'><BsYoutube size='20'/></a>
                    <a className='i' href='https://music.youtube.com/playlist?list=OLAK5uy_lBjVnDOGx02YQU0alqZwZzhyKfPxPw0CU' target='_blank'><BsFillPlayCircleFill size='20' /></a>
                  </div>
                </div>
                <div className='h-t' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                  <img className='m-cover' src={iSh} alt='' />
                  <h2 className='m-j'>"HI-15"</h2>
                  <div className='music-link'>
                    <a className='i' href='https://cover.lnk.to/HI-15' target='_blank'><BsMusicNoteBeamed size='20'/></a>
                    <a className='i' href='https://youtu.be/XSZNNbbVuho' target='_blank'><BsYoutube size='20'/></a>
                    <a className='i' href='https://music.youtube.com/playlist?list=OLAK5uy_nBdAU6DAzluT8vSzPWVAJwzT7NdDObZ7M' target='_blank'><BsFillPlayCircleFill size='20' /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss'>Fans</h2>
              <hr className='m-l' />
              <p className='m-ppp'>
                Her fanbase is officially called "IOFORIA."
              </p>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Social</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200"/>
              <div className='m-socials'>
                <a className='i' href='https://www.youtube.com/channel/UCAoy6rzhSf4ydcYjJw3WoVg' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1400"><BsYoutube size={40}/></a>
                <a className='i' href='https://twitter.com/airaniiofifteen' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600"><BsTwitter size={40}/></a>
                <a className='i' href='https://www.instagram.com/airani_iofifteen' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1800"><BsInstagram size={40}/></a>
                <a className='i' href='https://www.tiktok.com/@airani_iofifteen' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000"><FaTiktok size={40}/></a>
                <a className='i' href='https://www.facebook.com/Airani-Iofifteen-hololive-ID-111788127142691' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2200"><FaFacebookSquare size={40}/></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Iofi
