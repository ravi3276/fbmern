import React from 'react'
import Online from './Online';
import './Rightbar.css';
import {Users} from '../dummyData.js';
function Rightbar() {

    return (
    <div className="rightbar">
        <div className="rightbar__header">
            <img 
            src="https://p.kindpng.com/picc/s/67-679560_christmas-present-with-blue-ribbon-vector-illustration-birthday.png"
            alt=""
            />

            <span>
                <b>foster</b> and <b>3 other friends</b> have a birthday today
            </span>
        </div>
        <img src="assets/ad.png" alt="add" />
            <h4>online friends</h4>
            {
                Users.map(user => (
                    <div className="rightbar__info" key={user.id}>
                        <Online profile={user.profilePicture} username={user.username}/>
                    </div>

                ))
            }
    </div>
  )
}

export default Rightbar
