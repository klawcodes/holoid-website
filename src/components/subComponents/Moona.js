import React from 'react'

import {Link} from 'react-router-dom'

import './Moona.css'

import mBg from '../../assets/Moona_Hoshinova_2_by_ (1).png'
import mFb from '../../assets/moona full.png'

import mSj from '../../assets/moonas.jpeg'
import mSi from '../../assets/moonas-2.jpeg'

import {BsMusicNoteBeamed, BsYoutube, BsFillPlayCircleFill, BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare, FaTiktok} from 'react-icons/fa'

const Moona = () => {
  return (
    <div className='moona-com'>
      <img src={mBg} alt='' id='m-image'/>
      <div className='m-bg'>
        <div className='g-trans'></div>
        <div className='g-solid'>
          <div className='m-left'>
            <img src={mFb} alt='' id='m-body'/>
          </div>
          <div className='m-right'>
            <div className='m-about'>
              <h2 className='m-t'>Moona Hoshinova</h2>
              <h2 className='m-ts'>(ムーナ・ホシノヴァ)</h2>
              <p className='m-p'>
                  Moona Hoshinova (ムーナ・ホシノヴァ) is a female Indonesian Virtual YouTuber associated<br/> with hololive, debuting as part of its Indonesian (ID) branch first generation of VTubers alongside <br/> Airani Iofifteen and Ayunda Risu. 
              </p>
            </div>
            <div className='m-profile'>
              <h2 className='m-tss'>Profile</h2>
              <hr className='m-l'/>
              <div className='v-p'>
                <iframe width="321" height="180" src="https://www.youtube.com/embed/ZsQ003C-fzE" frameborder="0" id='i-frame'></iframe>
                <p className='m-pp'>
                  "Moon Moon~ Moonafic Dayo!"<br/><br/>

    A college girl who works as a model and idol, but later<br/> got interested to become a VTuber too. <br/><br/>

    On some rare occasion, Moona’s stream might be visited by<br/> Moona’s “another personality,” Hoshinova. That has deeper big sister<br/>-like voices and sadistic tendesion. Pay attention to her streams<br/> to meet Hoshinova!
                </p>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss'>Personality</h2>
              <hr className='m-l'/>
              <p className='m-ppp'>
    Moona is a shy girl, which is the opposite of her image of a flat faced college girl despite the fact<br/> she still speaks in an upbeat tone and a rather unique Indonesia accent. Like Tsunomaki Watame, she loves to<br/> bob and weave her head and body around. She worked as a fashion model before showing an interest<br/> in joining hololive. She loves to shitpost on Twitter while trying to connect with her fans. 
              </p>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss'>Discography</h2>
              <hr className='m-l' />
              <div className='m-so'>
                <div className='ai-no'>
                  <img className='m-cover' src={mSj} alt=''/>
                  <h2 className='m-j'>"Ai no Chiisana Uta"</h2>
                  <h3 className='m-js'>(愛の 小さな歌)</h3>
                  <div className='music-link'>
                    <a className='m' href='https://moona.streamlink.to/Ai' target='_blank'><BsMusicNoteBeamed size='20'/></a>
                    <a className='m' href='https://youtu.be/q4N7EhUWOAA' target='_blank'><BsYoutube size='20'/></a>
                    <a className='m' href='https://music.youtube.com/playlist?list=OLAK5uy_kZAWKhp25uXekNMxVOBzTMFrs3bk3lJ4A' target='_blank'><BsFillPlayCircleFill size='20' /></a>
                  </div>
                </div>
                <div className='h-t'>
                  <img className='m-cover' src={mSi} alt='' />
                  <h2 className='m-j'>"High Tide"</h2>
                  <div className='music-link'>
                    <a className='m' href='https://cover.lnk.to/HighTide' target='_blank'><BsMusicNoteBeamed size='20'/></a>
                    <a className='m' href='https://youtu.be/stmZAThUl64' target='_blank'><BsYoutube size='20'/></a>
                    <a className='m' href='https://music.youtube.com/playlist?list=OLAK5uy_n1wuvLbPoEtitpMacvskWz2_FGSbic4yU' target='_blank'><BsFillPlayCircleFill size='20' /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss'>Fans</h2>
              <hr className='m-l' />
              <p className='m-ppp'>
    Her fanbase is called "Moonafic." "Munafik" means "hypocrite" in Indonesian; according to Moona herself,<br/> this was intentional. In reality, the term "Moonafic" stands for "Moona Fanatic." <br/><br/>
    The name was chosen by Twitter poll on 8 April 2020, "Moonafic" won with 50.5% of the votes. The other<br/> options were "Moonarian," "MoonaSphere," and "Moonathic."
              </p>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss'>Social</h2>
              <hr className='m-l'/>
              <div className='m-socials'>
                <a className='m' href='https://www.youtube.com/channel/UCP0BspO_AMEe3aQqqpo89Dg/featured' target='_blank'><BsYoutube className='m-icon' size={40}/></a>
                <a className='m' href='https://twitter.com/moonahoshinova' target='_blank'><BsTwitter className='m-icon' size={40}/></a>
                <a className='m' href='https://www.instagram.com/moonahoshinova/' target='_blank'><BsInstagram className='m-icon' size={40}/></a>
                <a className='m' href='https://www.tiktok.com/@itsmoona__' target='_blank'><FaTiktok className='m-icon' size={40}/></a>
                <a className='m' href='https://www.facebook.com/Moona-Hoshinova-hololive-ID-103251478005455/' target='_blank'><FaFacebookSquare className='m-icon' size={40}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Moona
