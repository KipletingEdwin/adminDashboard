import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className="logo">lamaadmin</span>
        </div>
        <div className='topRight'>
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
            <Settings />
            <img src='https://cdn1.unitedinfocus.com/uploads/14/2024/02/GettyImages-2010375051-scaled.jpg' alt='avatar' className="topAvatar"/> 
          </div>
        </div>

      </div>
    </div>
  )
}
