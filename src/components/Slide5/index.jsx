import React, { memo, useEffect, useRef } from 'react'
import slideBG5 from '../../assets/imgs/slideBG5.jpg'
import styles from './style.module.scss'

function Slide5({ active }) {
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
            style={{ background: `url(${slideBG5}) no-repeat top center / cover` }}
            ref={backgroundRef}
         />

         <div className={`${styles.container} container`}>
            <div className={styles.content}>
               <h1 className={`${styles.title} title`}>Tickets</h1>

               <div className={styles.ticketWrap}>
                  <div className={styles.ticketItem}>
                     <div className={styles.top}>
                        <h5 className={styles.label}>STANDARD</h5>
                        <h1 className={styles.price}>$80</h1>
                        <p className={`${styles.desc} paragraph`}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor
                        </p>
                     </div>

                     <div className={styles.bottom}>
                        <button>Get Tickets</button>
                     </div>
                     <div className={styles.bottomSVG}>
                        <svg width='100%' height={14} style={{ fill: 'var(--primary)' }}>
                           <defs>
                              <pattern
                                 id='pattern-1684139917-56'
                                 x={16}
                                 y={-1}
                                 width={32}
                                 height={16}
                                 patternUnits='userSpaceOnUse'
                              >
                                 <path d='M 0,-0.5 16,14.5 32,-0.5' />
                              </pattern>
                           </defs>
                           <rect
                              x={0}
                              y={-1}
                              width='100%'
                              height={14}
                              style={{ fill: 'url(#pattern-1684139917-56)' }}
                           />
                        </svg>
                     </div>
                  </div>

                  <div className={styles.ticketItem}>
                     <div className={styles.top}>
                        <h5 className={styles.label}>DANCE FLOOR</h5>
                        <h1 className={styles.price}>$120</h1>
                        <p className={`${styles.desc} paragraph`}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor
                        </p>
                     </div>

                     <div className={styles.bottom} style={{ background: 'var(--secondary)' }}>
                        <button>Get Tickets</button>
                     </div>
                     <div className={styles.bottomSVG}>
                        <svg width='100%' height={14} style={{ fill: 'var(--secondary)' }}>
                           <defs>
                              <pattern
                                 id='pattern-1684139917-48'
                                 x={16}
                                 y={-1}
                                 width={32}
                                 height={16}
                                 patternUnits='userSpaceOnUse'
                              >
                                 <path d='M 0,-0.5 16,14.5 32,-0.5' />
                              </pattern>
                           </defs>
                           <rect
                              x={0}
                              y={-1}
                              width='100%'
                              height={14}
                              style={{ fill: 'url(#pattern-1684139917-48)' }}
                           />
                        </svg>
                     </div>
                  </div>

                  <div className={styles.ticketItem}>
                     <div className={styles.top}>
                        <h5 className={styles.label}>VIP PLUS</h5>
                        <h1 className={styles.price}>$250</h1>
                        <p className={`${styles.desc} paragraph`}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor
                        </p>
                     </div>

                     <div className={styles.bottom}>
                        <button>Get Tickets</button>
                     </div>
                     <div className={styles.bottomSVG}>
                        <svg width='100%' height={14} style={{ fill: 'var(--primary)' }}>
                           <defs>
                              <pattern
                                 id='pattern-1684139917-56'
                                 x={16}
                                 y={-1}
                                 width={32}
                                 height={16}
                                 patternUnits='userSpaceOnUse'
                              >
                                 <path d='M 0,-0.5 16,14.5 32,-0.5' />
                              </pattern>
                           </defs>
                           <rect
                              x={0}
                              y={-1}
                              width='100%'
                              height={14}
                              style={{ fill: 'url(#pattern-1684139917-56)' }}
                           />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(Slide5)
