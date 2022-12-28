
import React from 'react';
import './OnlineFrnds.css';
const OnlineFrnds = ({user}) => {
    const {profilePicture , username} = user;
    return (
      <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{username}</span>
    </li>
      );
    }

export default OnlineFrnds;