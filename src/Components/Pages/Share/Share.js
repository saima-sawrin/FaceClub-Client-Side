import React from 'react';
import "./Share.css";
import {PermMedia, Label,Room, EmojiEmotions, IosShare} from "@mui/icons-material"

const Share = () => {
    return (
        <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/Asset/person/1.jpg" alt="" />
          <input
            placeholder="What's in your mind ?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText"><button>Photo or Video</button></span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
         
            <button className="shareButton"> <IosShare></IosShare> Share</button>
        </div>
      </div>
    </div>
    );
};

export default Share;