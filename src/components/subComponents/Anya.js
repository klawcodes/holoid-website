import React, { useEffect } from 'react'

import {Link} from 'react-router-dom'

import './Anya.css'

import aBg from '../../assets/Anya_Melfissa_debut_by_Eku_Uekura.png'
import aFb from '../../assets/anya full.png'

import aSa from '../../assets/holos.jpeg'

import {BsMusicNoteBeamed, BsYoutube, BsFillPlayCircleFill, BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare, FaTiktok} from 'react-icons/fa'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Anya = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='anya-com'>
      <img src={aBg} alt='' id='a-image' />
      <div className='m-bg'>
        <div className='g-trans'></div>
        <div className='g-solid'>
          <div className='m-left'>
            <img src={aFb} alt='' id='rr-body' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" />
          </div>
          <div className='m-right'>
            <div className='m-about'>
                <h2 className='m-t' data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">Anya Melfissa</h2>
                <h2 className='m-ts' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">(アーニャ・メルフィッサ)</h2>
                <p className='m-p' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1600">
      Anya Melfissa (アーニャ・メルフィッサ) is a female Indonesian Virtual YouTuber associated<br/> with hololive, debuting as part of its Indonesian (ID) branch second generation of VTubers alongside <br/>Kureiji Ollie and Pavolia Reine. 
                </p>
            </div>
            <div className='m-profile'>
                <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Profile</h2>
                <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"/>
                <div className='v-p' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
                  <iframe width="321" height="180" src="https://www.youtube.com/embed/BET9wXW37mw" frameborder="0" id='i-frame'></iframe>
                  <p className='m-pp'>
    "Good day! This is Anya Melfissa from hololive ID<br/> 2nd Generation."<br/><br/>

An ancient weapon known as “Keris,” she was granted<br/> human form through a mystical ritual performed by her master.<br/><br/>

She’s just about always sleeping or playing games. Living mostly <br/>alone for so long has made her tend to be apathetic <br/>towards things and people she’s uninterested in, but when <br/>talking about things she likes, she can be quite childlike and passionate.<br/><br/>

Her base personality is actually apathetic, especially<br/> towards humans. Don’t let looks fool you - that’s what every<br/> foolish human always does to themselves somehow. 
                  </p>
                </div>
              </div>
              <div className='m-personal'>
                <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Personality</h2>
                <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900"/>
                <p className='m-ppp' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
      Anya is a very calm person. She is a bit different from Ollie, she seems to talk a little bit and mumbles more<br/> often because she gets nervous during live streams. <br/><br/>
      Even so, Anya is also the type of person who is easy to joke around at certain times. Sometimes, her<br/> sense of humor is a bit demeaning to others such as when she called Ollie a cutting board and made her height<br/> a comparison between her senpais as in Gura, Shion, and Rushia.
                </p>
              </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Discography</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900" />
              <div className='m-so' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
                <div className='ai-no'>
                  <img className='m-cover' src={aSa} alt=''/>
                  <h2 className='m-j'>"id:entity voices"</h2>
                  <div className='music-link'>
                    <a className='a' href='https://id.streamlink.to/entityvoices' target='_blank'><BsMusicNoteBeamed size='20'/></a>
                    <a className='a' href='https://www.youtube.com/watch?v=Wp90CrP-s_8' target='_blank'><BsYoutube size='20'/></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Fans</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" />
              <p className='m-ppp' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600">
                    Her fanbase is officially called "Melfriends," while members are called "Melhomies."  
              </p>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Social</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200"/>
              <div className='m-socials'>
                <a className='a' href='https://www.youtube.com/channel/UC727SQYUvx5pDDGQpTICNWg' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1400"><BsYoutube size={40}/></a>
                <a className='a' href='https://twitter.com/anyamelfissa' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600"><BsTwitter size={40}/></a>
                <a className='a' href='https://www.instagram.com/anyamelfissa/' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000"><BsInstagram size={40}/></a>
                <a className='a' href='https://www.facebook.com/Anya-Melfissa-hololive-ID-108445434416298' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2200"><FaFacebookSquare size={40}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Anya
