import styles from './App.module.scss'
import Slide1 from './components/Slide1'
import Slide2 from './components/Slide2'

function App() {
   return (
      <div className={styles.App}>
         <div className={styles.slider}>
            <div className={styles.slideTrack}>
               <Slide1 />
               <Slide2 />
            </div>
         </div>
      </div>
   )
}

export default App
