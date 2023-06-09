import React, { memo, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import slideBG6 from '../../assets/imgs/slideBG6.jpg'
import sponsor1 from '../../assets/imgs/sponsor1.png'
import sponsor2 from '../../assets/imgs/sponsor2.png'
import sponsor3 from '../../assets/imgs/sponsor3.png'
import sponsor4 from '../../assets/imgs/sponsor4.png'
import sponsor5 from '../../assets/imgs/sponsor5.png'
import sponsor6 from '../../assets/imgs/sponsor6.png'
import sponsor7 from '../../assets/imgs/sponsor7.png'
import sponsor8 from '../../assets/imgs/sponsor8.png'

const images = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7, sponsor8]

function Slide6({ active }) {
   const backgroundRef = useRef(null)

   // background animation
   useEffect(() => {
      if (active) {
         backgroundRef.current.classList.add('zoomIn')
      } else {
         backgroundRef.current.classList.remove('zoomIn')
      }
   }, [active])

   return (
      <div className={`slide`}>
         <div
            className={`background in`}
            style={{ background: `url(${slideBG6}) no-repeat top center / cover` }}
            ref={backgroundRef}
         />

         <div className={`${styles.container} container`}>
            <div className={styles.content}>
               <h1 className={`${styles.title} title`}>SPONSORS</h1>

               <div className={styles.sponsorsWrap}>
                  {images.map((img, index) => (
                     <div className={styles.sponsorItem} key={index}>
                        <img src={img} alt='sponsor' />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(Slide6)
