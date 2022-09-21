import React from 'react'

import {Link} from 'react-router-dom'

import './Ollie.css'

import oBg from '../../assets/Kureiji_Ollie_third_outfit_key_visual_by_LAM.png'
import oFb from '../../assets/Kureji_Ollie_Full_Body.png'

import oSa from '../../assets/ollies.jpeg'
import oSh from '../../assets/holos.jpeg'

import {BsMusicNoteBeamed, BsYoutube, BsFillPlayCircleFill, BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare, FaTiktok} from 'react-icons/fa'

const Ollie = () => {
  return (
    <div className='ollie-com'>
      <img src={oBg} alt='' id='o-image' />
      <div className='m-bg'>
        <div className='g-trans'></div>
        <div className='g-solid'>
          <div className='m-left'>
            <img src={oFb} alt='' id='rr-body' />
          </div>
          <div className='m-right'>
            <div className='m-about'>
              <h2 className='m-t'>Kureiji Ollie</h2>
              <h2 className='m-ts'>(クレイジー・オリー) </h2>
              <p className='m-p'>
    Kureiji Ollie (クレイジー・オリー) is a female Indonesian Virtual YouTuber associated with hololive,<br/> debuting as part of its Indonesian (ID) branch second generation of VTubers alongside <br/>Anya Melfissa and Pavolia Reine. 
              </p>
            </div>
            <div className='m-profile'>
              <h2 className='m-tss'>Profile</h2>
              <hr className='m-l'/>
              <div className='v-p'>
                <iframe width="321" height="180" src="https://www.youtube.com/embed/RfnJ3zFgUuU" frameborder="0" id='i-frame'></iframe>
                <p className='m-pp'>
    "ZOMBANWA!! SUPER KAWAII ZOMBIE IDOL,<br/> KU KU KU KUREIJI OLLIE DESU~!!"<br/><br/>


A zombie high school girl risen from her grave. She headed home, <br/>relying on memories retained from when she was still alive.<br/><br/>

  Upon arriving, she discovered it had turned into a ramen shop!<br/> And so, in order to reclaim her house, she decided to become a VTuber.<br/><br/>

Ollie has a very big tendency to scream. Always lower <br/>your volumes during her streams. 
                </p>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss'>Discography</h2>
              <hr className='m-l' />
              <div className='m-so'>
                <div className='ai-no'>
                  <img className='m-cover' src={oSa} alt=''/>
                  <h2 className='m-j'>"JOLLIE JOLLIE"</h2>
                  <div className='music-link'>
                    <a className='o' href='https://cover.lnk.to/jolliejollie' target='_blank'><BsMusicNoteBeamed size='20'/></a>
                    <a className='o' href='https://youtu.be/2ZqtRc3fa_s' target='_blank'><BsYoutube size='20'/></a>
                    <a className='o' href='https://music.youtube.com/playlist?list=OLAK5uy_kQgUEkZ6K1OmQWA0YHuBlLQptQH7YcvGk' target='_blank'><BsFillPlayCircleFill size='20' /></a>
                  </div>
                </div>
                <div className='h-t'>
                  <img className='m-cover' src={oSh} alt='' />
                  <h2 className='m-j'>"id:entity voices"</h2>
                  <div className='music-link'>
                    <a className='o' href='https://id.streamlink.to/entityvoices' target='_blank'><BsMusicNoteBeamed size='20'/></a>
                    <a className='o' href='https://www.youtube.com/watch?v=Wp90CrP-s_8' target='_blank'><BsYoutube size='20'/></a>
                  </div>
                </div>
              </div>
              <div className='m-personal'>
              <h2 className='m-tss'>Mascot & Fans</h2>
              <hr className='m-l' />
              <p className='m-ppp'>
    Her mascot, Udin, is a blue and purple stuffed bear with "dead eyes" and visible<br/> stitches with a black bow on top.<br/><br/>
    Her fanbase is officially called "Zomrades," a portmanteau of "zombie" and "comrades."<br/><br/>
    Members are called "Zomily," a portmanteau of "zombie" and "family."
              </p>
              </div>
            <div className='m-personal'>
              <h2 className='m-tss'>Social</h2>
              <hr className='m-l'/>
              <div className='m-socials'>
                <a className='o' href='https://www.youtube.com/channel/UCYz_5n-uDuChHtLo7My1HnQ' target='_blank'><BsYoutube size={40}/></a>
                <a className='o' href='https://twitter.com/kureijiollie' target='_blank'><BsTwitter size={40}/></a>
                <a className='o' href='https://www.instagram.com/kureijiollie/' target='_blank'><BsInstagram size={40}/></a>
                <a className='o' href='https://www.facebook.com/Kureiji-Ollie-hololive-ID-116083453646420' target='_blank'><FaFacebookSquare size={40}/></a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Ollie
