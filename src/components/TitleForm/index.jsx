import React from 'react';
import './style.scss';

function TitleForm({ value, onChange }) {

  return (
    <input type="text" value={value} onChange={onChange}></input>
  )
}

export default TitleForm;
