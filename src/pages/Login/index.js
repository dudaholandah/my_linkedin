import styles from './style.module.scss'
import SignIn from './SignIn'
import { Link } from 'react-router-dom'
import config from '../../config/config'

function Login(){
  return (
    <div className={styles.login}>
      <aside>
        <img src={config.icon} className={styles.icon} alt='opus'/>
        <h1>LinkedIn</h1>
      </aside>
      <main>
        <SignIn/>
        <div className={styles.signupOption}>
          
          <p>Novo aqui?</p>

          <Link to="signUp"  className={styles.linkRoute}>
            <p>Cadastrar!</p>
          </Link>

        </div>
      </main>
    </div>
  )
}

export default Login