import styles from './profilepage.module.css'
import CardInput from '../CardInput/CardInput'
import ServicePage from '../ServicePage/ServicePage'
import EditProfile from '../EditProfile/EditProfile'
import { useState } from 'react'



function ProfilePage() {
const [block, setBlock ] = useState('');


return (
  <>
  <div className={styles.profile_page_container}>
      <div className={styles.profile_page_menu}>
         <div className={styles.top_menu_block}>MENU</div>
        <button onClick={()=> setBlock(<ServicePage/>)} className={styles.menu_block}> <div >MY PLACES</div></button>
        <button onClick={()=> setBlock(<ServicePage/>)} className={styles.menu_block}> <div >LIKES</div></button>
        <button onClick={()=> setBlock(<EditProfile/>)} className={styles.menu_block}> <div >EDIT PROFILE</div> </button>
        <button onClick={()=> setBlock(<CardInput/>)} className={styles.menu_block}>  <div >ADD PLACE</div></button>
      </div>

      <div className={styles.profile_page_var}>
         {block}
      </div>
  </div>
  </>

)




}

export default ProfilePage
