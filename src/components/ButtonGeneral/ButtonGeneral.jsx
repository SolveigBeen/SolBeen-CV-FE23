import React from 'react'
import './ButtonGeneral.css'

const ButtonGeneral = ({ onClick, className, title }) => {
  return (
    <button className={`${className} buttonGen`} onClick={onClick}>
     {title}
    </button>
  )
}

export default ButtonGeneral