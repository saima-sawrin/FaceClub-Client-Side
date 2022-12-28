
import React from 'react';

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