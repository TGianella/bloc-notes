import React from 'react';
import './style.scss';

function TitleForm({ value, onChange }) {

  return (
    <input
      type="text"
      value={value} 
      onChange={(e) => onChange("title", e.target.value)}
    >
    </input>
  )
}

export default TitleForm;
