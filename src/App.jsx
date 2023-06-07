import styles from './App.module.scss'
import Slide1 from './components/Slide1'

function App() {
   return (
      <div className={styles.App}>
         <div className={styles.slider}>
            <div className={styles.slideTrack}>
               <Slide1 />

               <div className={`${styles.slide} ${styles.slide2}`}>222222222</div>
               <div className={`${styles.slide} ${styles.slide3}`}>333333333</div>
               <div className={`${styles.slide} ${styles.slide4}`}>444444444</div>
               <div className={`${styles.slide} ${styles.slide5}`}>555555555</div>
               <div className={`${styles.slide} ${styles.slide6}`}>666666666</div>
            </div>
         </div>
      </div>
   )
}

export default App
