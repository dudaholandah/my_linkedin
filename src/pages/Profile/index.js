import styles from "./style.module.scss";
import Navbar from '../../components/Navbar';
import ProfileCard from './ProfileCard';
import ProfileProjects from './ProfileProjects';

function Perfil(){

  return(
    <><Navbar />
      <div className={styles.profile}>
        <main className={styles.main}>
          
          <ProfileCard/>
          <ProfileProjects/>

        </main>
      </div>
    </>
  )
}

export default Perfil;