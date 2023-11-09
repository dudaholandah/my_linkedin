import styles from './style.module.scss';
import * as Icons from '@fortawesome/free-solid-svg-icons'
import ButtonIcons from '../../../components/ui/Button/ButtonIcons';
import ProfilePhoto from '../../../components/ProfilePhoto';

function NewPost(){
  return(
    <div className={styles.newPost}>
        
      <form className={styles.newPostForm}>
        <ProfilePhoto image="default-profile.png" size="60px"/>
        <textarea className={styles.form} placeholder='Nova Publicação' />
      </form>

      <div className={styles.newPostOptions}>
        <ButtonIcons name="Foto" icon={Icons.faImage} />
        <ButtonIcons name="Vídeo" icon={Icons.faVideo} />
        <ButtonIcons name="Evento" icon={Icons.faCalendarDays} />
        <ButtonIcons name="Escrever artigo" icon={Icons.faNewspaper} />
      </div>

    </div>
  )
}

export default NewPost