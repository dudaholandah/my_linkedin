import ProfileBackground from '../../../components/ProfileBackground';
import ProfilePhoto from '../../../components/ProfilePhoto';
import styles from './style.module.scss';
import * as Constants from '../../../data/constants';

function ProfileCard(){
  return (
    <div className={styles.profileCard}>

      <ProfileBackground image="background.jpg" width="100%" height="37.25%"/>      
      <ProfilePhoto image="profile.jpg" size="150px" margin="50px" top={true}/>
      
      <div className={styles.infoProfile}>
        <div className={styles.infoProfileText}>
          <ul className={styles.infoProfileTextList}>
            <li className={styles.info1Text}>{Constants.PROFILE_INFOS.nome}</li>
            <li className={styles.info2Text}>{Constants.PROFILE_INFOS.cargo}</li>
            <li className={styles.info3Text}>{Constants.PROFILE_INFOS.local}<b style={{ color: "#1a75ff", paddingLeft: "5px", cursor: "pointer" }} className="info">Informações de contato</b></li>
            <li className={styles.info4Text}> <span style={{ cursor: "pointer" }} className={styles.infoCon}>298 conexões</span></li>
          </ul>
        </div>
        <div className={styles.infoProfileBottom}>
          <ul className={styles.infoProfileList}>
            <li className={styles.info1Profile}>Tenho interesse em...</li>
            <li className={styles.info2Profile}>Adicionar seção do perfil</li>
            <li className={styles.info3Profile}>Mais</li>
          </ul>
        </div>
      </div>
      <div className={styles.carrouselProfile}>
        <ul className={styles.listProfile}>
          <li className={styles.listItemProfile}>
            <div className={styles.carrouselDiv}>
              <h6 style={{ color: 'black' }}>Buscando Emprego</h6>
              <h6>Cargos de Estagiário e Desenvolvedor Junior</h6>
              <h6 style={{ color: "#1a75ff" }}>Ver todos os detalhes</h6>
            </div>
          </li>
          <li className={styles.listItemProfile}>
            <div className={styles.carrouselDiv}>
              <h6 style={{ color: 'black' }}>Prestação de serviços</h6>
              <h6>Desenvolvimento Web</h6>
              <h6 style={{ color: "#1a75ff" }}>Ver todos os detalhes</h6>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileCard