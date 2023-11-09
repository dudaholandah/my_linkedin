import styles from './style.module.scss'
import SignUpCard from './SignUpCard'
import { Link } from 'react-router-dom'
import config from '../../config/config'

function SignUp(){
  return (
    <div className={styles.login}>
      <aside>
      <img src={config.icon} className={styles.icon} alt='opus'/>
        <h1>LinkedIn</h1>
      </aside>
      <main>
        <SignUpCard/>
        <div className={styles.signupOption}>
          
          <p>Possui conta?</p>

          <Link to="/"  className={styles.linkRoute}>
            <p>Entre agora!</p>
          </Link>

        </div>
      </main>
    </div>
  )
}

export default SignUp
