import ProfileBackground from '../../../components/ProfileBackground';
import ProfilePhoto from '../../../components/ProfilePhoto';
import styles from './style.module.scss';
import * as Constants from '../../../data/constants';

function Sidebar(){
  return (
    <div className={styles.sideBar}>
      <ProfileBackground image="background.jpg" />
      <ProfilePhoto image="default-profile.png" size="100px" top={true}/>
      <p className={styles.sideBarName}>{Constants.PROFILE_INFOS.nome}</p>
      <p className={styles.sideBarJob}>{Constants.PROFILE_INFOS.cargo}</p>
    </div>
  )
}

export default Sidebar