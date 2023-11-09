import './style.scss'
import styled from 'styled-components'
import * as React from 'react'
import {useState} from 'react';

const Options = styled.div`
display: ${p => (p.display === true ? "block" : "none")};
`

function ButtonOptions(){
  
  const [toggle, setToggle] = useState(false)
  
  const showOptions = () => {
    setToggle(!toggle)
  }
  
  return(
    <div className='buttonOptions'>
      
      <button className='button' onClick={showOptions}>
        ...
      </button>

      <Options className='menu' display={toggle}>
        <div>Denunciar?</div>
        <div>Edit</div>
        <div>Exclude</div>
      </Options>

    </div>
  )
}

export default ButtonOptions