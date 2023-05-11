import React from 'react';
import './style.scss';

function Button({ onClick, content }) {

  return (
    <button className="button" onClick={onClick}>{content}</button>
  )
}

export default Button;
