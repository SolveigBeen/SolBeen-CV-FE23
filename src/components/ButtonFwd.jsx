import React from 'react'
import '../styles/ButtonFwd.css'

const ButtonFwd = ({ onClick }) => {
  return (
    <button className='buttonFwd' onClick={onClick}>
      -&gt;
    </button>
  )
}

export default ButtonFwd