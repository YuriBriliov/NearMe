import styles from './header.module.css'
import { Link } from 'react-router-dom'


function Header() {

  return (
    <header className={styles.header}>
      <div className={`${styles.header_top_container} container`}> 
        
        <Link className={styles.head_links} to='/mainpage'><i className="fas fa-home"></i> Home</Link>
        <Link className={styles.head_links} to='/'><i className="fas fa-map-marker-alt"></i> Places</Link>
        <Link className={styles.head_links} to='/cardinput'><i className="fas fa-user"></i> Profile</Link>
        <Link className={styles.head_links} to='/login'> <i className="fas fa-sign-in-alt"></i> Login</Link>
        <Link className={styles.head_links} to='/logout'> <i className="fas fa-sign-out-alt"></i> Logout</Link>
        <Link className={styles.head_links} to='/register'> <i className="fas fa-clipboard-check"></i> Register</Link>
      
      </div>

      <div className={`${styles.header_bottom_container} container`}> 
       option field
      </div>

    </header>

  )




}

export default Header
