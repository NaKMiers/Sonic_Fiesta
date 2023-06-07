import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import slideBG1 from '../../assets/imgs/slideBG1.jpg'

const duration0 = 300 // 300
const duration1 = 310 // 310
const duration2 = 320 // 320
const delay = 800 // 800

function Slide1({ active }) {
   // day
   const [isDayChanging1, setDayChanging1] = useState(false)
   const [day1, setDay1] = useState(4) // 4
   const day1Ref = useRef(null)

   const [isDayChanging2, setDayChanging2] = useState(false)
   const [day2, setDay2] = useState(7) // 8
   const day2Ref = useRef(null)

   // hour
   const [isHourChanging1, setHourChanging1] = useState(false)
   const [hour1, setHour1] = useState(1) // 3
   const hour1Ref = useRef(null)

   const [isHourChanging2, setHourChanging2] = useState(false)
   const [hour2, setHour2] = useState(1) // 10 : 4
   const hour2Ref = useRef(null)

   // minute
   const [isMinChanging1, setMinChanging1] = useState(false)
   const [minute1, setMinute1] = useState(1) // 6
   const minute1Ref = useRef(null)

   const [isMinChanging2, setMinChanging2] = useState(false)
   const [minute2, setMinute2] = useState(1) // 10
   const minute2Ref = useRef(null)

   // second
   const [isSecChanging1, setSecChanging1] = useState(false)
   const [second1, setSecond1] = useState(1) // 6
   const second1Ref = useRef(null)

   const [isSecChanging2, setSecChanging2] = useState(false)
   const [second2, setSecond2] = useState(1) // 10
   const second2Ref = useRef(null)

   useEffect(() => {
      // day
      day1Ref.current.style.marginTop = `calc(-${day1} *  var(--time-height))`
      day2Ref.current.style.marginTop = `calc(-${day2} * var(--time-height))`

      // hour
      hour1Ref.current.style.marginTop = `calc(-${hour1} *  var(--time-height))`
      hour2Ref.current.style.marginTop = `calc(-${hour2} * var(--time-height))`

      // minute
      minute1Ref.current.style.marginTop = `calc(-${minute1} *  var(--time-height))`
      minute2Ref.current.style.marginTop = `calc(-${minute2} * var(--time-height))`

      // second
      second1Ref.current.style.marginTop = `calc(-${second1} *  var(--time-height))`
      second2Ref.current.style.marginTop = `calc(-${second2} * var(--time-height))`
   }, [day1, day2, hour1, hour2, minute1, minute2, second1, second2])

   // day
   const countDownDay1 = useCallback(() => {
      if (!isDayChanging1) {
         setDayChanging1(true)

         if (day1 === 1) {
            setDay1(0)

            setTimeout(() => {
               day1Ref.current.style.transition = 'none'
               setDay1(3) // 3
            }, duration1)

            setTimeout(() => {
               day1Ref.current.style.transition = `${duration0}ms ease-in-out`
            }, duration2)
         } else {
            setDay1(day1 - 1)
         }

         setTimeout(() => {
            setDayChanging1(false)
         }, duration2)
      }
   }, [isDayChanging1, day1])

   const countDownDay2 = useCallback(() => {
      if (!isDayChanging2) {
         setDayChanging2(true)

         if (day2 === 1) {
            setDay2(0)
            countDownDay1()

            setTimeout(() => {
               day2Ref.current.style.transition = 'none'
               setDay2(10) // 4
            }, duration1)

            setTimeout(() => {
               day2Ref.current.style.transition = `${duration0}ms ease-in-out`
            }, duration2)
         } else {
            setDay2(day2 - 1)
         }

         setTimeout(() => {
            setDayChanging2(false)
         }, duration2)
      }
   }, [isDayChanging2, day2, countDownDay1])

   // hour
   const countDownHour1 = useCallback(() => {
      if (!isHourChanging1) {
         setHourChanging1(true)

         if (hour1 === 1) {
            setHour1(0)
            countDownDay2()

            setTimeout(() => {
               hour1Ref.current.style.transition = 'none'
               setHour1(3) // 3
            }, duration1)

            setTimeout(() => {
               hour1Ref.current.style.transition = `${duration0}ms ease-in-out`
            }, duration2)
         } else {
            setHour1(hour1 - 1)
         }

         setTimeout(() => {
            setHourChanging1(false)
         }, duration2)
      }
   }, [isHourChanging1, hour1, countDownDay2])

   const countDownHour2 = useCallback(() => {
      if (!isHourChanging2) {
         setHourChanging2(true)

         if (hour2 === 1) {
            setHour2(0)
            countDownHour1()

            setTimeout(() => {
               hour2Ref.current.style.transition = 'none'
               setHour2(hour1 === 1 ? 4 : 10) // 4
            }, duration1)

            setTimeout(() => {
               hour2Ref.current.style.transition = `${duration0}ms ease-in-out`
            }, duration2)
         } else {
            setHour2(hour2 - 1)
         }

         setTimeout(() => {
            setHourChanging2(false)
         }, duration2)
      }
   }, [isHourChanging2, hour2, hour1, countDownHour1])

   // min
   const countDownMin1 = useCallback(() => {
      if (!isMinChanging1) {
         setMinChanging1(true)

         if (minute1 === 1) {
            setMinute1(0)
            countDownHour2()

            setTimeout(() => {
               minute1Ref.current.style.transition = 'none'
               setMinute1(6) // 6
            }, duration1)

            setTimeout(() => {
               minute1Ref.current.style.transition = `${duration0}ms ease-in-out`
            }, duration2)
         } else {
            setMinute1(minute1 - 1)
         }

         setTimeout(() => {
            setMinChanging1(false)
         }, duration2)
      }
   }, [isMinChanging1, minute1, countDownHour2])

   const countDownMin2 = useCallback(() => {
      if (!isMinChanging2) {
         setMinChanging2(true)

         if (minute2 === 1) {
            setMinute2(0)
            countDownMin1()

            setTimeout(() => {
               minute2Ref.current.style.transition = 'none'
               setMinute2(10) // 10
            }, duration1)

            setTimeout(() => {
               minute2Ref.current.style.transition = `${duration0}ms ease-in-out`
            }, duration2)
         } else {
            setMinute2(minute2 - 1)
         }

         setTimeout(() => {
            setMinChanging2(false)
         }, duration2)
      }
   }, [isMinChanging2, minute2, countDownMin1])

   // sec
   const countDownSec1 = useCallback(() => {
      if (!isSecChanging1) {
         setSecChanging1(true)

         if (second1 === 1) {
            setSecond1(0)
            countDownMin2()

            setTimeout(() => {
               second1Ref.current.style.transition = 'none'
               setSecond1(6) // 6
            }, duration1)

            setTimeout(() => {
               second1Ref.current.style.transition = `${duration0}ms ease-in-out`
            }, duration2)
         } else {
            setSecond1(second1 - 1)
         }

         setTimeout(() => {
            setSecChanging1(false)
         }, duration2)
      }
   }, [isSecChanging1, second1, countDownMin2])

   const countDownSec2 = useCallback(() => {
      if (!isSecChanging2) {
         setSecChanging2(true)

         if (second2 === 1) {
            setSecond2(0)
            countDownSec1()

            setTimeout(() => {
               second2Ref.current.style.transition = 'none'
               setSecond2(10) // 10
            }, duration1)

            setTimeout(() => {
               second2Ref.current.style.transition = `${duration0}ms ease-in-out`
            }, duration2)
         } else {
            setSecond2(second2 - 1)
         }

         setTimeout(() => {
            setSecChanging2(false)
         }, duration2)
      }
   }, [isSecChanging2, second2, countDownSec1])

   useEffect(() => {
      const interval1 = setInterval(() => {
         countDownSec2()
      }, delay) // 800

      return () => {
         clearInterval(interval1)
      }
   }, [countDownSec2])

   return (
      <div className={`slide`}>
         <div
            className={`background ${active ? 'zoomOut' : ''}`}
            style={{ background: `url(${slideBG1}) no-repeat top center / cover` }}
         />

         <div className={`container`}>
            <div className={styles.left}>
               <div className={styles.contentWrap}>
                  <h1>{'Legendary\nmusic\nfestival'}</h1>
                  <h6>2 days &nbsp; &nbsp; &nbsp; 38 artists &nbsp; &nbsp; &nbsp; 2700 participants</h6>

                  <button>Registration now!</button>
               </div>
            </div>

            <div className={styles.right}>
               <div className={styles.counterWrap}>
                  <div className={styles.counter}>
                     <div className={styles.line} />
                     <div className={styles.line} />

                     <div className={`${styles.countItem} ${styles.item1}`}>
                        <span className={styles.label}>Days</span>

                        <div className={styles.timeWrap}>
                           <div className={styles.timeSlider}>
                              <div className={styles.timeSlideTrack} ref={day1Ref}>
                                 <span>9</span>

                                 <span>0</span>
                                 <span>1</span>
                                 <span>2</span>
                                 <span>3</span>
                                 <span>4</span>
                                 <span>5</span>
                                 <span>6</span>
                                 <span>7</span>
                                 <span>8</span>
                                 <span>9</span>
                              </div>
                           </div>

                           <div className={styles.timeSlider}>
                              <div className={styles.timeSlideTrack} ref={day2Ref}>
                                 <span>9</span>

                                 <span>0</span>
                                 <span>1</span>
                                 <span>2</span>
                                 <span>3</span>
                                 <span>4</span>
                                 <span>5</span>
                                 <span>6</span>
                                 <span>7</span>
                                 <span>8</span>
                                 <span>9</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={`${styles.countItem} ${styles.item2}`}>
                        <span className={styles.label}>Hours</span>

                        <div className={styles.timeWrap}>
                           <div className={styles.timeSlider}>
                              <div className={styles.timeSlideTrack} ref={hour1Ref}>
                                 <span>2</span>

                                 <span>0</span>
                                 <span>1</span>
                                 <span>2</span>
                              </div>
                           </div>

                           <div className={styles.timeSlider}>
                              <div className={styles.timeSlideTrack} ref={hour2Ref}>
                                 {hour1 === 3 || hour1 === 0 ? <span>3</span> : <span>9</span>}

                                 <span>0</span>
                                 <span>1</span>
                                 <span>2</span>
                                 <span>3</span>
                                 <span>4</span>
                                 <span>5</span>
                                 <span>6</span>
                                 <span>7</span>
                                 <span>8</span>
                                 <span>9</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className={`${styles.countItem} ${styles.item3}`}>
                        <span className={styles.label}>Minutes</span>

                        <div className={styles.timeWrap}>
                           <div className={styles.timeSlider}>
                              <div className={styles.timeSlideTrack} ref={minute1Ref}>
                                 <span>5</span>

                                 <span>0</span>
                                 <span>1</span>
                                 <span>2</span>
                                 <span>3</span>
                                 <span>4</span>
                                 <span>5</span>
                              </div>
                           </div>

                           <div className={styles.timeSlider}>
                              <div className={styles.timeSlideTrack} ref={minute2Ref}>
                                 <span>9</span>

                                 <span>0</span>
                                 <span>1</span>
                                 <span>2</span>
                                 <span>3</span>
                                 <span>4</span>
                                 <span>5</span>
                                 <span>6</span>
                                 <span>7</span>
                                 <span>8</span>
                                 <span>9</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className={`${styles.countItem} ${styles.item4}`}>
                        <span className={styles.label}>Seconds</span>

                        <div className={styles.timeWrap}>
                           <div className={styles.timeSlider}>
                              <div className={styles.timeSlideTrack} ref={second1Ref}>
                                 <span>5</span>

                                 <span>0</span>
                                 <span>1</span>
                                 <span>2</span>
                                 <span>3</span>
                                 <span>4</span>
                                 <span>5</span>
                              </div>
                           </div>

                           <div className={styles.timeSlider}>
                              <div className={styles.timeSlideTrack} ref={second2Ref}>
                                 <span>9</span>

                                 <span>0</span>
                                 <span>1</span>
                                 <span>2</span>
                                 <span>3</span>
                                 <span>4</span>
                                 <span>5</span>
                                 <span>6</span>
                                 <span>7</span>
                                 <span>8</span>
                                 <span>9</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(Slide1)
