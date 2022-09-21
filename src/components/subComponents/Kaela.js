import React from 'react'

import {Link} from 'react-router-dom'

import './Kaela.css'

import kkBg from '../../assets/Kaela_Kovalskia_Phoenix_cover_by_Sen-Jou.png'
import kkFb from '../../assets/Kaela_Kovalskia_Full_Body.png'

import rSa from '../../assets/risus.jpeg'
import rSh from '../../assets/risus-2.jpeg'

import {BsMusicNoteBeamed, BsYoutube, BsFillPlayCircleFill, BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare, FaTiktok} from 'react-icons/fa'

const Kaela = () => {
  return (
    <div className='kaela-com'>
      <img src={kkBg} alt='' id='rr-image'/>
      <div className='m-bg'>
        <div className='g-trans'></div>
        <div className='g-solid'>
          <div className='m-left'>
            <img src={kkFb} alt='' id='rr-body' />
          </div>
          <div className='m-right'>
            <div className='m-about'>
              <h2 className='m-t'>Kaela Kovalskia</h2>
              <h2 className='m-ts'>(カエラ・コヴァルスキア)</h2>
              <p className='m-p'>
    Kaela Kovalskia (カエラ・コヴァルスキア) is a female Indonesian Virtual YouTuber associate<br/>d with hololive, debuting as part of its Indonesian (ID) branch third generation of <br/>VTubers alongside Vestia Zeta and Kobo Kanaeru.  
              </p>
            </div>
            <div className='m-profile'>
              <h2 className='m-tss'>Profile</h2>
              <hr className='m-l'/>
              <div className='v-p'>
                <iframe width="321" height="180" src="https://www.youtube.com/embed/dDM8e_eMKBI" frameborder="0" id='i-frame'></iframe>
                <p className='m-pp'>
    After taking over her great blacksmithing teacher's forge, <br/>she felt a lack of excitement in her life.<br/><br/>

So, she decided to be free and depart on a journey to find rare <br/>smithing materials, one of which was rumored to be under the <br/>building of a certain "idol group" in town.<br/><br/>

She also loves challenging herself and has a peculiar taste <br/>when it comes to foods!
                </p>
              </div>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss'>Personality</h2>
              <hr className='m-l'/>
              <p className='m-ppp'>
    Kaela appears as a pretty calm person. She barely raises the voice even when she becomes angry.<br/> Kaela is known for her particular laugh, as she always laughs silently. She likes flirting a little with her <br/>chat as well and other VTubers like Vestia Zeta. Kaela is often teasing other people. <br/><br/> 
    She seems to have few other personalities. The little girl style voiced one is named "Skia." Skia is <br/>supposed to be more skilled than Kaela, having a higher voice and a more audible laugh. Sometimes,<br/> Kaela can also adopt an old lady voice to become the one named "Grandmaela."   
              </p>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss'>Fans</h2>
              <hr className='m-l' />
              <p className='m-ppp'>
    Her fanbase is officially called "Pemaloe," an archaic spelling for the Indonesian word pemalu, <br/>which can either mean "hammer wielder" or "shy person."<br/><br/>
    Her members are called "KAELUARGA."
              </p>
            </div>
            <div className='m-personal'>
              <h2 className='m-tss'>Social</h2>
              <hr className='m-l'/>
              <div className='m-socials'>
                <a className='kk' href='https://www.youtube.com/channel/UCZLZ8Jjx_RN2CXloOmgTHVg' target='_blank'><BsYoutube size={40}/></a>
                <a className='kk' href='https://twitter.com/kaelakovalskia' target='_blank'><BsTwitter size={40}/></a>
                <a className='kk' href='https://www.instagram.com/kaelakovalskia/' target='_blank'><BsInstagram size={40}/></a>
                <a className='kk' href='https://www.tiktok.com/@kaelakovalskia' target='_blank'><FaTiktok size={40}/></a>

                <a className='kk' href='https://www.facebook.com/KaelaKovalskia' target='_blank'><FaFacebookSquare size={40}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kaela
