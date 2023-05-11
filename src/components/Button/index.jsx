import React from 'react';
import './style.scss';

function Button({ onClick, content, color, size }) {

  return (
    <button
      className={`button ${color} ${size}`}
      onClick={onClick}
    >
      {content}
    </button>
  )
}

export default Button;
