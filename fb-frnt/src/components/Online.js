import React from 'react'
import './Online.css';
import { Avatar } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Online({profile,username}) {
  return (
    <div className="online">
        <div className="icons">
            <Avatar src={profile}/>
            <FiberManualRecordIcon />
            </div>

            <h3>{username}</h3>
    </div>
  )
}

export default Online
