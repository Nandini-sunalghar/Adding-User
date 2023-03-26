import React from 'react'

//css files
import './Card.css';

function Card(props) {
  return (
    <div className={`${"card"} ${props.className}`}>{props.children}</div>
  )
}

export default Card;