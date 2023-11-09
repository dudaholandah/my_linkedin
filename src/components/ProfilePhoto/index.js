import './style.scss'
import styled from 'styled-components'
import config from '../../config/config'

const Photo = styled.div`
  background-image: url("images/${p => p.image}");
  width: ${p => p.size};
  height: ${p => p.size};
  margin-left: ${p => p.margin};
  margin-top: ${p => p.top && "-90px"};
`

const photo = config.profile.picture;

function ProfilePhoto(props){
  return(
    <Photo 
      className="profilePhoto" 
      image={photo}
      size={props.size}
      margin={props.margin} 
      top={props.top}
    />
  )
}

export default ProfilePhoto