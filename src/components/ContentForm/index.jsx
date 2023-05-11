import React from 'react';
import './style.scss';

function ContentForm({ value, onChange }) {

  return (
    <textarea
      placeholder="Write your note here."
      value={value}
      onChange={(e) => onChange("content", e.target.value)}
    >
    </textarea>
  )
}

export default ContentForm;
