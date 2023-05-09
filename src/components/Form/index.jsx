
import React from 'react';
import './style.scss';

function Form({ style }) {
  console.log(style);

  return (
    <input type="text" className="form" style={style}></input>
  )
}

export default Form;
