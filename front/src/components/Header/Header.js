import styles from './header.module.css'
import { Link } from 'react-router-dom'
import Toggle from '../Toggle/Toggle'
import { useThemeContext } from '../../context/themeContext'




function Header() {

  const { isLightTheme , setTheme} = useThemeContext()

  return (
    <>
    {isLightTheme &&  <header className={styles.header_light}>
    <div className={`${styles.header_top_container_light}`}> 
        <div className={styles.header_logo_light}>
        NEAR ME   
        </div>
        <div className={`${styles.header_top_container_light}`}> 
          <Link className={styles.head_links_light} to='/mainpage'><i className="fas fa-home"></i> Home</Link>
          <Link className={styles.head_links_light} to='/places'><i className="fas fa-map-marker-alt"></i> Places</Link>
          <Link className={styles.head_links_light} to='/cardinput'><i className="fas fa-user"></i> Profile</Link>
          <Link className={styles.head_links_light} to='/login'> <i className="fas fa-sign-in-alt"></i> Login</Link>
          <Link className={styles.head_links_light} to='/logout'> <i className="fas fa-sign-out-alt"></i> Logout</Link>
          <Link className={styles.head_links_light} to='/register'> <i className="fas fa-clipboard-check"></i> Register</Link>
        </div>
        <div className={styles.header_toggle_light}>
        <Toggle/>
        </div>
      </div>
    </header>}
    
    {!isLightTheme &&  <header className={styles.header_dark}>
      <div className={`${styles.header_top_container_dark}`}> 
         <div className={styles.header_logo_dark}>
        NEAR ME   
        </div>
        <div className={`${styles.header_top_container_dark}`}>       
          <Link className={styles.head_links_dark} to='/mainpage'><i className="fas fa-home"></i> Home</Link>
          <Link className={styles.head_links_dark} to='/places'><i className="fas fa-map-marker-alt"></i> Places</Link>
          <Link className={styles.head_links_dark} to='/cardinput'><i className="fas fa-user"></i> Profile</Link>
          <Link className={styles.head_links_dark} to='/login'> <i className="fas fa-sign-in-alt"></i> Login</Link>
          <Link className={styles.head_links_dark} to='/logout'> <i className="fas fa-sign-out-alt"></i> Logout</Link>
          <Link className={styles.head_links_dark} to='/register'> <i className="fas fa-clipboard-check"></i> Register</Link>
        </div>
        <div className={styles.header_toggle_dark}>
        <Toggle/>
        </div>
      </div>
    </header>}
    </>
  
  )
}

export default Header
