import styles from './style';
import { Navbar, Home, Card, TryThese } from './components';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => (
  <div className='bg-darkBlue w-full overfow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <Navbar />
    </div>
    {/* 
    <div>
      <Button1/>
    </div> */}
    <div className={`bg-darkBlue ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>
    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
      <div className={`container`}>
        <Card />
      </div>
    </div>

    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <TryThese />
      </div>
    </div>


  </div>

);


export default App