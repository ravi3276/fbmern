import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    <div className="header">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
        alt="Facebook"
        />

        <div className="header__search">
            <SearchIcon />
            <input placeholder="Search for friend,post or video"/>
        </div>

        <div className="header__icons">
                <IconButton>
                <HomeIcon />
                </IconButton>
                <IconButton>
                <AssistantPhotoIcon />
                </IconButton>
                <IconButton>
                <PersonIcon />
                </IconButton>
                <IconButton>
                <ChatIcon />
                </IconButton>
                <IconButton>
                <NotificationsIcon />
                </IconButton>
        </div>

        <Avatar className="avatar"/>
    </div>
  )
}

export default Header
