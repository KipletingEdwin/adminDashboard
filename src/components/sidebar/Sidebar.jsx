import React from 'react'
import './Sidebar.css'
import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle/>
                        Home
                    </li>

                    <li className="sidebarListItem">
                        <Timeline/>
                        Analytics
                    </li>

                    <li className="sidebarListItem">
                        <LineStyle/>
                        Sales
                    </li>

                    <li className="sidebarListItem">
                        <TrendingUp/>
                        Home
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
