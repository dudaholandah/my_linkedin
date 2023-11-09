import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ButtonIcons(props){
  return(
    <button className='buttonIcons'><FontAwesomeIcon icon={props.icon}/>{props.name}</button>
    )
  }

export default ButtonIcons