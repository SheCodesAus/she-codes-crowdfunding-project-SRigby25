import React from 'react'
import title from './ceo.png';

console.log(title); 

function Title() {
    return (
      <div id="logo-main">
      <img src={title} alt="Logo" />;
      </div>
    )
  }

export default Title