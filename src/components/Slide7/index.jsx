import React, { memo, useEffect, useRef } from 'react'
import slideBG7 from '../../assets/imgs/slideBG7.jpg'
import styles from './style.module.scss'
import facebook from '../../assets/imgs/facebook.png'
import twitter from '../../assets/imgs/twitter.png'
import googlePlus from '../../assets/imgs/google-plus.png'
import skype from '../../assets/imgs/skype.png'
import picasa from '../../assets/imgs/picasa.png'
import instagram from '../../assets/imgs/instagram.png'

function Slide7({ active }) {
   const backgroundRef = useRef(null)

   // background animation
   useEffect(() => {
      if (active) {
         backgroundRef.current.classList.add('zoomOut')
      } else {
         backgroundRef.current.classList.remove('zoomOut')
      }
   }, [active])

   return (
      <div className={`slide`}>
         <div
            className={`background out`}
            style={{ background: `url(${slideBG7}) no-repeat top center / cover` }}
            ref={backgroundRef}
         />

         <div className={`${styles.container} container`}>
            <div className={styles.content}>
               <h1 className={`${styles.title} title`}>CONTACT</h1>

               <div className={styles.left}>
                  <p className={styles.address}>
                     Phu Trung, Tan Phu District
                     <br />
                     Ho Chi Minh City, Vietnam
                  </p>

                  <h4 className={styles.phone}>+84 899-320-427</h4>

                  <p href='mailto:diwas118151@gmail.com' className={styles.email}>
                     diwas118151@gmail.com
                  </p>

                  <div className={styles.socialWrap}>
                     <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                        <img src={facebook} alt='social' />
                     </a>
                     <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                        <img src={twitter} alt='social' />
                     </a>
                     <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                        <img src={googlePlus} alt='social' />
                     </a>
                     <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                        <img src={skype} alt='social' />
                     </a>
                     <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                        <img src={picasa} alt='social' />
                     </a>
                     <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                        <img src={instagram} alt='social' />
                     </a>
                  </div>

                  <p className={styles.copyright}>
                     © Copyright 2023 <a href='/#'>Sonic Fiesta</a>
                  </p>
               </div>

               <div className={styles.right}>
                  <h4 className={styles.heading}>SUBSCRIBE TO NEWSLETTER:</h4>

                  <form className={styles.contactForm}>
                     <label htmlFor='email'>Email Address</label>
                     <input type='email' id='email' required />

                     <button>Submit</button>
                  </form>

                  <div className={styles.socialWrap}>
                     <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                        <img src={facebook} alt='social' />
                     </a>
                     <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                        <img src={twitter} alt='social' />
                     </a>
                     <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                        <img src={googlePlus} alt='social' />
                     </a>
                     <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                        <img src={skype} alt='social' />
                     </a>
                     <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                        <img src={picasa} alt='social' />
                     </a>
                     <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                        <img src={instagram} alt='social' />
                     </a>
                  </div>

                  <p className={styles.copyright}>
                     © Copyright 2023 <a href='/#'>Sonic Fiesta</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(Slide7)
