import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faBell, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import config from '../../config/config';

function Navbar(){
  return (
    <div className="navbar">
            
      <div className="search">
        <img src={config.icon} alt='opus'/>
        <input placeholder="Pesquisar"></input>
      </div>

      <div className="navbarIcons">
          
        <Link to="/home"  className="linkRoute">
          <div className="eachIcon"><FontAwesomeIcon icon={faHouseChimney} className="iconImg" />Início</div>
        </Link>

        <Link to="/notification" className="linkRoute"> 
          <div className="eachIcon"><FontAwesomeIcon icon={faBell} className="iconImg" />Notificação</div>
        </Link>

        <Link to="/profile" className="linkRoute">
          <div className="eachIcon"><FontAwesomeIcon icon={faUser} className="iconImg" />Perfil</div>
        </Link>

        <Link to="/" className="linkRoute">
          <div className="eachIcon"><FontAwesomeIcon icon={faSignOut} className="iconImg" />&nbsp;&nbsp;Sair&nbsp;&nbsp;</div>
        </Link>

      </div>

    </div>
  )
}
 
export default Navbar