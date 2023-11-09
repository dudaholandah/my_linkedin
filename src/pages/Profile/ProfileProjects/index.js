import {AiOutlinePlus} from 'react-icons/ai';
import {HiOutlinePencil} from 'react-icons/hi';
import styles from './style.module.scss';
import * as Constants from '../../../data/constants';
import ProfilePhoto from '../../../components/ProfilePhoto';

function ProfileProjects(){
  return (
    <div>
      <div className={styles.projects}>
        <header className={styles.head}>
          <h3>Experiência</h3>
          <ul className={styles.headList}>
            <li className={styles.content}> <button className={styles.invisible}><AiOutlinePlus size={26} color="grey" /></button></li>
            <li className={styles.content}> <button className={styles.invisible}><HiOutlinePencil size={26} color="grey" /></button></li>
          </ul>
        </header>
        {Constants.PROFILE_PROJECTS_1.map((val) => (
          <div className={styles.presentation}>
            <div className={styles.order}>            
              <ProfilePhoto size="60px" />      
              <div className={styles.parag}>
                <p style={{ color: 'black' }}>{val.name}</p>
                <p style={{ color: 'darkgray' }}>{val.company}</p>
                <p style={{ color: 'grey' }}>{val.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.projects}>
        <header className={styles.head}>
          <h3>Competências</h3>
          <ul className={styles.headList2}>
            <li className={styles.content2}> <button className={styles.competButton}>Fazer teste de competência</button></li>
            <li className={styles.content2}> <button className={styles.invisible}><AiOutlinePlus size={26} color="grey" /></button> </li>
            <li className={styles.content2}> <button className={styles.invisible}><HiOutlinePencil size={26} color="grey" /></button></li>
          </ul>
        </header>
        {Constants.PROFILE_PROJECTS_2.map((val) => (
          <div className={styles.presentation}>
            <div className={styles.order}>
              <ProfilePhoto size="60px" />  
              
              <div className={styles.parag}>
                <p style={{ color: 'black' }}>{val.name}</p>
                <p style={{ color: 'darkgray' }}>{val.place}</p>
                <p style={{ color: 'grey' }}>{val.recomendation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileProjects