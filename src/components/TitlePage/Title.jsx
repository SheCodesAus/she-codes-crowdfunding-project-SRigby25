import React from 'react'
import title from './ceo.png';
import "./title.css";

console.log(title); 

function Title() {
    return (
      <img src={title} alt="DrunkCEO" />
    )
  }

export default Title