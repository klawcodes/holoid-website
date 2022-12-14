import React, { useEffect } from 'react'

import {Link} from 'react-router-dom'

import './Risu.css'

import rBg from '../../assets/Ayunda_Risu_Birthday_Illustration_by_Yatomi.png'
import rFb from '../../assets/risu full.png'

import rSa from '../../assets/risus.jpeg'
import rSh from '../../assets/risus-2.jpeg'

import {BsMusicNoteBeamed, BsYoutube, BsFillPlayCircleFill, BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare, FaTiktok} from 'react-icons/fa'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Risu = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='risu-com'>
      <img src={rBg} alt='' id='r-image'/>
      <div className='m-bg'>
        <div className='g-trans'></div>
        <div className='g-solid'>
          <div className='m-left'>
            <img src={rFb} alt='' id='r-body' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" />
          </div>
          <div className='m-right'>
            <div className='m-about'>
              <h2 className='m-t' data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">Ayunda Risu</h2>
              <h2 className='m-ts' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">(アユンダ・リス)</h2>
              <p className='m-p' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1600">
                Ayunda Risu (アユンダ・リス) is a female Indonesian Virtual YouTuber associated with hololive,<br/> debuting as part of its Indonesian (ID) branch first generation of VTubers alongside <br/>Airani Iofifteen and Moona Hoshinova. 
              </p>
            </div>
            <div className='m-profile'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">Profile</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500"/>
              <div className='v-p' data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">
                <iframe width="321" height="180" src="https://www.youtube.com/embed/ozANadM_Y8U" frameborder="0" id='i-frame'></iframe>
                <p className='m-pp'>
                  "Hewwrroo everyone ~!!"; "Purupuru ganbari Risu ~!"<br/><br/>

    A squirrel girl from a magical forest.<br/><br/>

    She was lost in the human world, but due to certain circumstances, <br/>she ends up living in the home of a kind older sister. <br/><br/>

    To return the favor, she decides to become a Vtuber. <br/><br/>

    Risu act, most of the time, just like a squirrel she is. She loves to<br/> do subtle pranks on people, shy with new people, and love to tease her<br/> viewer. Her laugh is also one of her unique characterictic.
                </p>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Personality</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900"/>
              <p className='m-ppp' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
    Risu has a humorous, high-energy and extremely friendly personality, not unlike Inugami Korone. Risu's <br/>interactions with Moona and Iofi, other hololive members and anyone in general, has given her the reputation<br/> of being exceedingly sweet, kind and personable; as well as silly and mischievous.<br/><br/> 
    Risu is also known for her randomness-examples of this include the multitude of 2-5 second long videos<br/> uploaded to her channel that consist of single words, phrases, or noises. She also had a stream where all she<br/> did was whistle and another that consisted of her counting coins from Moona's piggybank.  
              </p>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Discography</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900" />
              <div className='m-so' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
                <div className='ai-no'>
                  <img className='m-cover' src={rSa} alt=''/>
                  <h2 className='m-j'>"ALiCE&u"</h2>
                  <div className='music-link'>
                    <a className='r' href='https://cover.lnk.to/ALiCE' target='_blank'><BsMusicNoteBeamed size='20'/></a>
                    <a className='r' href='https://youtu.be/IGviVpVE1fA' target='_blank'><BsYoutube size='20'/></a>
                    <a className='r' href='https://music.youtube.com/playlist?list=OLAK5uy_lH0BGptVreYnnigraQNpFPSUARN-DeNr8' target='_blank'><BsFillPlayCircleFill size='20' /></a>
                  </div>
                </div>
                <div className='h-t' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                  <img className='m-cover' src={rSh} alt='' />
                  <h2 className='m-j'>"HI-15"</h2>
                  <div className='music-link'>
                    <a className='r' href='https://cover.lnk.to/HI-15' target='_blank'><BsMusicNoteBeamed size='20'/></a>
                    <a className='r' href='https://youtu.be/XSZNNbbVuho' target='_blank'><BsYoutube size='20'/></a>
                    <a className='r' href='https://music.youtube.com/playlist?list=OLAK5uy_nBdAU6DAzluT8vSzPWVAJwzT7NdDObZ7M' target='_blank'><BsFillPlayCircleFill size='20' /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Mascot & Fans</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" />
              <p className='m-ppp' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600">
    Her mascot is a pink squirrel that wears a hat, choker and hairpin similar to hers named "Riscot,"<br/> which was drawn by Aragami Oga. <br/><br/>
    Her fanbase is officially called "Risuners" (based on the word "Listeners"), or "Prisuners" (based on <br/>the word "Prisoners") for members.
              </p>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss' data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">Social</h2>
              <hr className='m-l' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200"/>
              <div className='m-socials'>
                <a className='r' href='https://www.youtube.com/channel/UCOyYb1c43VlX9rc_lT6NKQw' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1400"><BsYoutube size={40}/></a>
                <a className='r' href='https://twitter.com/ayunda_risu' target='_blank' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600"><BsTwitter size={40}/></a>
                <a className='r' href='https://www.instagram.com/ayunda_risu/' target='_blank'data-aos="fade-up" data-aos-delay="200" data-aos-duration="1800"><BsInstagram size={40}/></a>
                <a className='r' href='https://www.facebook.com/Ayunda-Risu-hololive-ID-103806531282334' target='_blank'data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000"><FaFacebookSquare size={40}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Risu
