import React, { useEffect } from 'react'

import {Link} from 'react-router-dom'

import './Kobo.css'

import kBg from '../../assets/kobo bg.png'
import kFb from '../../assets/kobo full.png'

import kSa from '../../assets/kobos.jpeg'

import {BsMusicNoteBeamed, BsYoutube, BsFillPlayCircleFill, BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare, FaTiktok} from 'react-icons/fa'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Kobo = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='kobo-com'>
      <img src={kBg} alt='' id='k-image' />
      <div className='m-bg'>
        <div className='g-trans'></div>
        <div className='g-solid'>
          <div className='m-left'>
            <img src={kFb} alt=''id='r-body' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" />
          </div>
          <div className='m-right'>
            <div className='m-about'>
              <div className='mm-lord' data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">
                <h3 className='t-lord'>Lord</h3>
                <h2 className='m-t'>Kobo Kanaeru</h2>
              </div>
              <h2 className='m-ts' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">(こぼ・かなえる)</h2>
              <p className='m-p' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1600">
    Kobo Kanaeru (こぼ・かなえる) is a female Indonesian Virtual YouTuber associated with hololive,<br/> debuting as part of its Indonesian (ID) branch third generation of VTubers alongside<br/> Vestia Zeta and Kaela Kovalskia.  
              </p>
            </div>
            <div className='m-profile'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Profile</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"/>
              <div className='v-p' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
                <iframe width="321" height="180" src="https://www.youtube.com/embed/-BvizyVVhxw" frameborder="0" id='i-frame'></iframe>
                <p className='m-pp'>
    A carefree girl who lives in the topmost room of a lighthouse, <br/>she is actually the bloodline of the strongest rain shaman in the area. <br/>She has great potential to control rain, <br/>but she does not like to do it as a task.<br/><br/>

In order to win back her Rain Master title, she needs to prove to<br/> her family that she can keep their rain shaman service afloat.<br/> Not only does she have to train daily, but she also needs to adopt some<br/> sort of virtual marketing strategy to succeed!
                </p>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Discography</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900" />
              <div className='m-so' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
                <div className='ai-no'>
                  <img className='m-cover' src={kSa} alt=''/>
                  <h2 className='m-j'>"Mantra Hujan"</h2>
                  <div className='music-link'>
                    <a className='k' href='https://cover.lnk.to/MantraHujan' target='_blank'><BsMusicNoteBeamed size='20'/></a>
                    <a className='k' href='https://youtu.be/SF-_47-oCtk' target='_blank'><BsYoutube size='20'/></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Fans</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" />
              <p className='m-ppp' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600">
    Kobo's fans are known as Kobokers, while her membership name is called Kobolonimbus.<br/><br/>
    Kobolonimbus is the combination of "Kobo" and "Kumulonimbus" (or Cumulonimbus).
              </p>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Social</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200"/>
              <div className='m-socials'>
                <a className='k' href='https://www.youtube.com/channel/UCjLEmnpCNeisMxy134KPwWw' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1400"><BsYoutube size={40}/></a>
                <a className='k' href='https://twitter.com/kobokanaeru' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600"><BsTwitter size={40}/></a>
                <a className='k' href='https://www.instagram.com/kobokanaeru/' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1800"><BsInstagram size={40}/></a>
                <a className='k' href='https://www.tiktok.com/@kobokanaeru' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000"><FaTiktok size={40}/></a>
                <a className='k' href='https://www.facebook.com/KoboKanaeru' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2200"><FaFacebookSquare size={40}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kobo
