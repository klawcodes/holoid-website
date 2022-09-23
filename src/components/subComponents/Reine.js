import React, { useEffect } from 'react'

import {Link} from 'react-router-dom'

import './Reine.css'

import rrBg from '../../assets/Pavolia_Reine_2022_birthday_merch_illustration_by_Iida_Pochi.png'
import rrFb from '../../assets/Pavolia_Reine_Full_Body-removebg-preview.png'

import rrSa from '../../assets/reine-s.jpeg'
import rrSh from '../../assets/reine-ss.jpeg'

import {BsMusicNoteBeamed, BsYoutube, BsFillPlayCircleFill, BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare, FaTiktok} from 'react-icons/fa'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Reine = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='reine-com'>
      <img src={rrBg} alt='' id='rr-image' />
      <div className='m-bg'>
        <div className='g-trans'></div>
        <div className='g-solid'>
          <div className='m-left'>
            <img src={rrFb} alt='' id='rr-body' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" />
          </div>
          <div className='m-right'>
            <div className='m-about'>
              <h2 className='m-t' data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">Pavolia Reine</h2>
              <h2 className='m-ts' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">(パヴォリア・レイネ)</h2>
              <p className='m-p' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1600">
    Pavolia Reine is a female Indonesian Virtual YouTuber associated with hololive, debuting as<br/> part of its Indonesian (ID) branch second generation of VTubers alongside<br/> Kureiji Ollie and Anya Melfissa.  
              </p>
            </div>
            <div className='m-profile'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Profile</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"/>
              <div className='v-p' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
                <iframe width="321" height="180" src="https://www.youtube.com/embed/tyoz_LRDCbU" frameborder="0" id='i-frame'></iframe>
                <p className='m-pp'>
    "Perhatian, sang putri merak yang tertiup angin, aku Pavolia Reine <br/>dari hololive ID."<br/><br/>

Lady of the Peafowl. While studying at a magic academy, she was<br/> involved in an incident and transferred to the human world.<br/><br/>

Since then, she has been unable to use much of her magic.<br/><br/>

Very fond of sweets, but weak with overly spicy food. At first <br/>glance, she seems to be the elegant type, but people who<br/> spend some more time with her will find out that she has more of<br/> a dorky personality. To quite a number of viewers, her laugh has been<br/> perceived as similar to a car engine starting. 
                </p>
              </div>
            </div>
          <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Personality</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900"/>
              <p className='m-ppp' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
    Reine appears as a composed, mature and elegant person. Despite her being the Lady of the Peafowl, she <br/>doesn't hold back to show her more gentle and down-to-earth side. She also actively tries to be more sociable with <br/>her senpais and kouhais as time goes on. Reine has a strong chemistry with her gen-mates, Anya and Ollie. <br/><br/> 
    Additionally, Reine refuses to being called "bottom left" and insists that she's "Seiso" and "Top Right" idol, <br/>while the only bottom left people in her streams are her fans, to the point where she moved the chat's box from <br/>top right of the screen to the bottom left, at one occasion.
              </p>
            </div>
          <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Discography</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900"  />
              <div className='m-so' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
                <div className='ai-no'>
                  <img className='m-cover' src={rrSa} alt=''/>
                  <h2 className='m-j'>"Gate Open: START!"</h2>
                  <div className='music-link'>
                    <a className='rr' href='https://reine.fanlink.to/start' target='_blank'><BsMusicNoteBeamed size='20'/></a>
                    <a className='rr' href='https://youtu.be/VFpOBazE3rs' target='_blank'><BsYoutube size='20'/></a>
                    <a className='rr' href='https://music.youtube.com/playlist?list=OLAK5uy_lbmJZy4wfr4r-Y2SUZflnthEsf4LW0JlI' target='_blank'><BsFillPlayCircleFill size='20' /></a>
                  </div>
                </div>
                <div className='h-t' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                  <img className='m-cover' src={rrSh} alt='' />
                  <h2 className='m-j'>"Illusion Night"</h2>
                  <div className='music-link'>
                    <a className='rr' href='https://cover.lnk.to/IllusionNight' target='_blank'><BsMusicNoteBeamed size='20'/></a>
                    <a className='rr' href='https://music.youtube.com/watch?v=WzqWpMW8Vww&list=OLAK5uy_l-tSpbKYurYCZv3q9vbAc-QkzOkFCfR9s' target='_blank'><BsFillPlayCircleFill size='20' /></a>
                  </div>
                </div>
              </div>
            </div>
          <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Fans</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" />
              <p className='m-ppp' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600">
    Her fanbase is officially called "MERAKyats." It's a pun of "Merak" and "Rakyat" which means <br/>"Peacock" and "People," respectively. The word "Merakyat" itself has the meaning of "being humble" in Indonesian. <br/><br/>
    Members are officially called "The Royaltea." A pun of "Royalty" and "Tea."
              </p>
            </div> 
          <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Social</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200"/>
              <div className='m-socials'>
                <a className='rr' href='https://www.youtube.com/channel/UChgTyjG-pdNvxxhdsXfHQ5Q' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1400"><BsYoutube size={40}/></a>
                <a className='rr' href='https://twitter.com/pavoliareine' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600"><BsTwitter size={40}/></a>
                <a className='rr' href='https://www.instagram.com/pavoliareine/' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1800"><BsInstagram size={40}/></a>
                <a className='rr' href='https://www.facebook.com/pavoliareine' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000"><FaFacebookSquare size={40}/></a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Reine
