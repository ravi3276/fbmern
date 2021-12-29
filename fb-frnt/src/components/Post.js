import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Users} from '../dummyData.js';

function Post({photo,desc,date,like,comment}) {
   const [likes,setLikes]=useState(like)
   const [islike,setIsLike]=useState(false)

   const likesBtn=()=>{
        setLikes(islike ? likes-1 :likes+1);
        setIsLike(!islike);
   }
  return (
    <div className="post">
        <div className="post__header">
            <div className="post_hright">
            <Avatar className="post__profile" src={Users[0].profilePicture}/>
            <h4>{Users[0].username}</h4>
            <p>{date}</p>
            </div>
            <MoreVertIcon />
        </div>

        <div className="post__info">
            <h3>{desc}</h3>
            <img src={photo}
            alt="post" 
            />
        </div>

        <div className="post__action">
            <div className="action">
                <FavoriteIcon color="warning" onClick={likesBtn}/>
                <ThumbUpIcon color="primary"/>
                <span>{likes} people like it</span>
            </div>
            <span>{comment} comments</span>
        </div>
    </div>
  )
}

export default Post
