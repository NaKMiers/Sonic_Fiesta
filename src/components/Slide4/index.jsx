import React, { memo, useRef } from 'react'
import styles from './style.module.scss'
import slideBG4 from '../../assets/imgs/slideBG4.jpg'
import playIcon from '../../assets/imgs/playIcon.png'

function Slide4({ active }) {
   const videoModalRef = useRef(null)
   const closeBtnRef = useRef(null)
   const videoRef = useRef(null)

   const handleMouseOver = () => {
      closeBtnRef.current.style.opacity = 1
   }

   const handleMouseLeave = () => {
      closeBtnRef.current.style.opacity = 0
   }

   const handleOpenModal = () => {
      videoModalRef.current.style.display = 'flex'
      setTimeout(() => {
         videoModalRef.current.style.opacity = 1
      }, 0)
   }

   const handleCloseModal = () => {
      videoModalRef.current.style.opacity = 0
      setTimeout(() => {
         videoModalRef.current.style.display = 'none'
      }, 510) // duration: 0.5s
   }

   const handleClickOutside = e => {
      if (videoRef.current && !videoRef.current.contains(e.target)) {
         handleCloseModal()
      }
   }

   return (
      <div className={`slide`}>
         <div
            className={`background ${active ? 'zoomOut' : ''}`}
            style={{ background: `url(${slideBG4}) no-repeat top center / cover` }}
         />

         <div className={`${styles.container} container`}>
            <div className={styles.content}>
               <h1 className={styles.title}>VIDEO FROM THE FESTIVAL 2020</h1>

               <button className={styles.button} onClick={handleOpenModal}>
                  <img src={playIcon} alt='icon' />
               </button>

               <p>PERFORMANCE OF A MUSICAL GROUP</p>
            </div>

            <div
               className={styles.videoModal}
               ref={videoModalRef}
               onMouseOver={handleMouseOver}
               onMouseLeave={handleMouseLeave}
               onClick={handleClickOutside}
            >
               <button className={styles.closeBtn} ref={closeBtnRef}>
                  &times;
               </button>

               <div
                  className={styles.video}
                  ref={videoRef}
                  onMouseOver={e => {
                     e.stopPropagation()
                     handleMouseLeave()
                  }}
               >
                  <iframe
                     src='https://www.youtube.com/embed/mJ0YNqBr2bw'
                     title='Eminem - Full Live at Rock &amp; Roll Hall of Fame 2022 Induction ft. Ed Sheeran &amp; Steven Tyler (4K)'
                     frameBorder='0'
                     allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                     allowFullScreen
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(Slide4)
