import React, { memo } from 'react'
import styles from './style.module.scss'
import slideBG2 from '../../assets/imgs/slideBG2.jpg'
import locationIcon from '../../assets/imgs/locationIcon.png'

function Slide2({ active }) {
   return (
      <div className={`slide`}>
         <div
            className={`background ${active ? 'zoomIn' : ''}`}
            style={{ background: `url(${slideBG2}) no-repeat top center / cover` }}
         />

         <div className={`container`}>
            <div className={styles.left}>
               <div className={styles.content}>
                  <h1 className={styles.title}>About Us</h1>

                  <p className={styles.desc}>
                     psum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                     sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
                     a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Lorem ipsum
                     dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor inci didunt ut
                     labore et dolore magna aliqua.
                  </p>

                  <div className={styles.textboxContentWrap}>
                     <div className={styles.textBoxItem}>
                        <div className={styles.textBoxItemWrap}>
                           <div className={styles.icon}>
                              <img src={locationIcon} alt='icon' />
                           </div>

                           <h6>Where</h6>

                           <p>
                              <span>908 New Hampshire Avenue</span>
                              <br />
                              <span>20037, United States</span>
                           </p>
                        </div>
                     </div>

                     <div className={styles.textBoxItem}>
                        <div className={styles.textBoxItemWrap}>
                           <div className={styles.icon}>
                              <img src={locationIcon} alt='icon' />
                           </div>

                           <h6>When</h6>

                           <p>
                              <span>Tuesday – Friday</span>
                              <br />
                              <span>September 08 to September 12</span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className={styles.right}>
               <div className={styles.staticticalWrap}>
                  <div className={styles.staticticaItem}>
                     <div>65</div>

                     <div>
                        <span>Standard</span>
                        <br />
                        <span>Completed</span>
                     </div>
                  </div>

                  <div className={styles.staticticaItem}>
                     <div>38</div>

                     <div>
                        <span>Dance Floor</span>
                        <br />
                        <span>Completed</span>
                     </div>
                  </div>

                  <div className={styles.staticticaItem}>
                     <div>95</div>

                     <div>
                        <span>VIP Plus</span>
                        <br />
                        <span>Completed</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(Slide2)
