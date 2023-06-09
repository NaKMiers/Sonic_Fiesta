import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './App.module.scss'
import Slide1 from './components/Slide1'
import Slide2 from './components/Slide2'
import Slide3 from './components/Slide3'
import Slide4 from './components/Slide4'
import Slide5 from './components/Slide5'
import Slide6 from './components/Slide6'
import Slide7 from './components/Slide7'

function App() {
   const [isActiveSlider, setActiveSlider] = useState(true)
   const [isSliding, setSliding] = useState(false)
   const [slide, setSlide] = useState(1)
   const slideTrackRef = useRef(null)

   useEffect(() => {
      if (isActiveSlider) {
         slideTrackRef.current.style.marginTop = `calc(-${slide - 1} * 100vh)`
      } else {
         slideTrackRef.current.style.marginTop = 'auto'
      }
   }, [isActiveSlider, slide])

   const handleWheel = useCallback(
      e => {
         if (!isSliding) {
            setSliding(true)
            console.log(slide)
            if (e.deltaY > 0) {
               setSlide(slide === 7 ? 1 : slide + 1)
            } else if (e.deltaY < 0) {
               setSlide(slide === 1 ? 7 : slide - 1)
            }

            setTimeout(() => {
               setSliding(false)
            }, 1050) // slideTract duration 1s
         }
      },
      [isSliding, slide]
   )

   const handleKeyDown = useCallback(
      e => {
         if (!isSliding) {
            setSliding(true)
            if (e.keyCode === 40) {
               setSlide(slide === 7 ? 1 : slide + 1)
            } else if (e.keyCode === 38) {
               setSlide(slide === 1 ? 7 : slide - 1)
            }
            setTimeout(() => {
               setSliding(false)
            }, 1050) // slideTract duration 1s
         }
      },
      [isSliding, slide]
   )

   // change slide on wheel
   useEffect(() => {
      // handle slide on wheel and press arrow keys
      if (isActiveSlider) {
         window.addEventListener('wheel', handleWheel)
         window.addEventListener('keydown', handleKeyDown)
      }
      return () => {
         window.removeEventListener('wheel', handleWheel)
         window.removeEventListener('keydown', handleKeyDown)
      }
   }, [isActiveSlider, handleWheel, handleKeyDown])

   // responsive
   useEffect(() => {
      const handleResize = () => {
         window.innerWidth <= 768 ? setActiveSlider(false) : setActiveSlider(true)
      }

      handleResize()
      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   return (
      <div className={styles.App}>
         <div className={styles.slider}>
            <div className={styles.slideNav}>
               <div className={slide === 1 ? styles.active : ''} onClick={() => setSlide(1)} />
               <div className={slide === 2 ? styles.active : ''} onClick={() => setSlide(2)} />
               <div className={slide === 3 ? styles.active : ''} onClick={() => setSlide(3)} />
               <div className={slide === 4 ? styles.active : ''} onClick={() => setSlide(4)} />
               <div className={slide === 5 ? styles.active : ''} onClick={() => setSlide(5)} />
               <div className={slide === 6 ? styles.active : ''} onClick={() => setSlide(6)} />
               <div className={slide === 7 ? styles.active : ''} onClick={() => setSlide(7)} />
            </div>

            <div className={styles.slideTrack} ref={slideTrackRef}>
               <Slide1 active={slide === 1} />
               <Slide2 active={slide === 2} />
               <Slide3 active={slide === 3} />
               <Slide4 active={slide === 4} />
               <Slide5 active={slide === 5} />
               <Slide6 active={slide === 6} />
               <Slide7 active={slide === 7} />
            </div>
         </div>
      </div>
   )
}

export default App
