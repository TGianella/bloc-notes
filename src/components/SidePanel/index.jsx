import React from 'react';
import SideNote from '../SideNote/index'
import Button from '../Button/index'
import './style.scss'

function SidePanel() {

  return (
    <div className="panel">
      <p>SidePanel</p>
      <Button content="Add note" />      
      <SideNote title="Ma note" content="Le contenu de ma note" />
    </div>
  )
}

export default SidePanel;
