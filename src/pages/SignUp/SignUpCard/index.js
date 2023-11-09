import styles from './style.module.scss'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


function SignUpCard(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const navigate = useNavigate()

  const signUp = (e) => {
    navigate('/');
  };

  return (
    <div className={styles.signUp}>
      
      <h2>Cadastrar</h2>
      <form onSubmit={signUp}>
        
        <input className={styles.inputText} type="text" name="email" placeholder='Email' onChange={(e)=> {setEmail(e.target.value)}} />
        
        <input className={styles.inputText} type="password" name="password" placeholder='Senha' onChange={(e) => {setPassword(e.target.value)}} />
        
        <input className={styles.inputSubmit} type="submit" value="Cadastrar" />

      </form>
      
    </div>
  )
}

export default SignUpCard

