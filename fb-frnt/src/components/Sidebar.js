import React from 'react'
import './SIdebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SidebarItems from './SidebarItems';
import SchoolIcon from '@mui/icons-material/School';

function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarItems Icon={RssFeedIcon} title="feed"/>
        <SidebarItems Icon={ChatIcon} title="chat"/>
        <SidebarItems Icon={PlayCircleIcon} title="videos"/>
        <SidebarItems Icon={GroupIcon} title="groups"/>
        <SidebarItems Icon={BookmarkIcon} title="bookmarks"/>
        <SidebarItems Icon={HelpIcon} title="questions"/>
        <SidebarItems Icon={WorkIcon} title="jobs"/>
        <SidebarItems Icon={EventNoteIcon} title="events"/>
        <SidebarItems Icon={SchoolIcon} title="courses"/>
    </div>
  )
}

export default Sidebar
