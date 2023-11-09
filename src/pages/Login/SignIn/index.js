import styles from './style.module.scss'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function SignIn(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const navigate = useNavigate()

  const signIn = (e) => {
    navigate('/home');
  };


  return (
    <div className={styles.signIn}>
      
      <h2>Entrar</h2>
      <form onSubmit={signIn}>
        
        <input className={styles.inputText} type="text" name="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />
        
        <input className={styles.inputText} type="password" name="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
        
        <input className={styles.inputSubmit} type="submit" value="Entrar" />

      </form>
      
    </div>
  )
}

export default SignIn