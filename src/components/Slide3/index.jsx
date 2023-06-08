import React, { memo } from 'react'
import styles from './style.module.scss'
import slideBG3 from '../../assets/imgs/slideBG3.jpg'
import clockIcon from '../../assets/imgs/clockIcon.png'

function Slide3({ active = true }) {
   return (
      <div className={`slide`}>
         <div
            className={`background ${active ? 'zoomOut' : ''}`}
            style={{ background: `url(${slideBG3}) no-repeat top center / cover` }}
         />

         <div className={`${styles.container} container`}>
            <div className={styles.content}>
               <h1 className={`${styles.title} title`}>PROGRAM</h1>

               <div className={styles.contentBoxWrap}>
                  <div className={styles.contentBoxItem}>
                     <div className={styles.mainContent}>
                        <div className={styles.icon}>
                           <img src={clockIcon} alt='icon' />
                        </div>

                        <h6>12:00 PM - 14:00 PM</h6>
                        <h6>Look at the clouds</h6>
                        <p>
                           <span>Artist:</span> <span>Emerson Andersoon</span>
                        </p>
                        <button>Read More</button>
                     </div>
                  </div>

                  <div className={styles.contentBoxItem}>
                     <div className={styles.mainContent}>
                        <div className={styles.icon}>
                           <img src={clockIcon} alt='icon' />
                        </div>

                        <h6>16:00 PM - 19:00 PM</h6>
                        <h6>In love with life</h6>
                        <p>
                           <span>Artist:</span> <span>Josh Jameson</span>
                        </p>
                        <button>Read More</button>
                     </div>
                  </div>

                  <div className={styles.contentBoxItem}>
                     <div className={styles.mainContent}>
                        <div className={styles.icon}>
                           <img src={clockIcon} alt='icon' />
                        </div>

                        <h6>12:00 AM - 14:00 AM</h6>
                        <h6>Look at the clouds</h6>
                        <p>
                           <span>Artist:</span> <span>Emerson Andersoon</span>
                        </p>
                        <button>Read More</button>
                     </div>
                  </div>

                  <div className={styles.contentBoxItem}>
                     <div className={styles.mainContent}>
                        <div className={styles.icon}>
                           <img src={clockIcon} alt='icon' />
                        </div>

                        <h6>19:00 PM - 22:00 PM</h6>
                        <h6>Major lazer feat</h6>
                        <p>
                           <span>Artist:</span> <span>DJ Josh Jameson</span>
                        </p>
                        <button>Read More</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(Slide3)
