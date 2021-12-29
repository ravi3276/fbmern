import React from 'react';
import './FeedSender.css';
import Avatar from '@mui/material/Avatar';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import {Users} from '../dummyData.js';

function FeedSender() {
  return (
    <div className="feedSender">
      <div className="messageSender__top">
                <Avatar src={Users[0].profilePicture}/>

                <form>
                    <input type="text" placeholder="What's on your mind"/>
                    {/* <input type="text" placeholder="image URL (optional)"/> */}
                    <button type="submit">submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__bottonIcon">
                    <VideocamIcon className="video"/>
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender__bottonIcon">
                   <PhotoLibraryIcon className="photo"/>
                   <h4>Photo/Video</h4> 
                </div>
                <div className="messageSender__bottonIcon">
                    <InsertEmoticonIcon className="emoji"/>
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
    </div>
  )
}

export default FeedSender
