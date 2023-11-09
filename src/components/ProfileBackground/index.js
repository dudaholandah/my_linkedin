import config from '../../config/config'
import './style.scss'
import styled from 'styled-components'

const Background = styled.div`
  background-image: url("images/${p => p.image}");
`

const background = config.profile.background; 

function ProfileBackground(props){
  return( 
    <Background
      className='profileBackground' 
      image={background} 
    /> 
  )
}

export default ProfileBackground