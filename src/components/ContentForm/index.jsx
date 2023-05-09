import React from 'react';
import './style.scss';

function ContentForm({ value, onChange }) {

  return (
    <textarea value={value} onChange={onChange}></textarea>
  )
}

export default ContentForm;
