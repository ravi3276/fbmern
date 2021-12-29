import React from 'react'
import './Feed.css';
import FeedSender from './FeedSender';
import Post from './Post';
import {Posts} from '../dummyData.js';

function Feed() {
  return (
    <div className="feed">
      <FeedSender />
    {
      Posts.map(post =>(
        <Post key={post.id} photo={post.photo} date={post.date} desc={post.desc} like={post.like} comment={post.comment}/>
      ))
    }
    </div>
  )
}

export default Feed
