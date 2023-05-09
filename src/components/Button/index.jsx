import React from 'react';
import './style.scss';

function Button({ onClick, content }) {

  return (
    <button onClick={onClick}>{content}</button>
  )
}

export default Button;
