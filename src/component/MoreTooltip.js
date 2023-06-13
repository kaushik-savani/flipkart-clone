import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadIcon from '@mui/icons-material/Download';
import '../style/MoreTooltip.css'


const MoreTooltip = () => {
  return (
    <div className="more_tooltip">
      <div>
          <NotificationsIcon/>
          <p>Notification Prefernces</p>
      </div>
      <hr/>
      <div>
          <LiveHelpIcon/>
          <p>24x7 Customer Care</p>
      </div>
      <hr/>
      <div>
          <TrendingUpIcon/>
          <p>Advertise</p>
      </div>
      <hr/>
      <div>
          <DownloadIcon/>
          <p>Download App</p>
      </div>
    </div>

  )
}

export default MoreTooltip