import React from 'react'
import './SidebarItems.css';

function SidebarItems({Icon,title}) {
  return (
    <div className="sidebarItems">
         {Icon && <Icon />}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarItems
