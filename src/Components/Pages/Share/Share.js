import React, { useContext, useEffect, useState } from 'react';
import "./Share.css";
import {PermMedia, Label,Room, EmojiEmotions, IosShare} from "@mui/icons-material"
import { AuthContext } from '../../../Context/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const Share = () => {
  const {user}= useContext(AuthContext);
  // const {} = useLoaderData(); 
  
  const [posts , setPosts] = useState();
  useEffect(()=>{
      fetch('http://localhost:5000/post')
      .then(res=> res.json())
      .then(data => setPosts(data))
  },[])

  const  handleAddPost = (event)=>{
    event.preventDefault();
    
const form = event.target;
const id = form.id.value;
const photo = form.photo.value;

const desc = form.desc.value;

const post = {
    id,
    photo: photo,
    desc:desc,


}
    fetch('http://localhost:5000/post',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(post),
    })
    .then(res=> res.json())
    .then(data=> {
        if(data.acknowledged){
            alert('Post successfully')
            event.target.reset();
        }
    })
}

    return (
        <div className="share">
      <div className="shareWrapper">
      <form  onSubmit={handleAddPost}>
        <div className="shareTop">
          <img name="img" className="shareProfileImg" src='Asset/person/1.jpg' alt="" />
          <input
            placeholder="What's in your mind ?"
            className="shareInput"
            name="desc"
          />
        </div>
        <hr className="shareHr"/>
        
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <input className='text-decoration-none' placeholder='Photo or video' type="file" name="photo" id="" /> 
                    {/* <span className="shareOptionText">Photo or Video</span> */}
                  
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
         
            {/* <button  className="shareButton"> <IosShare></IosShare> Share</button> */}
            <input className='shareButton' type="submit" value="Share" />
        </div>
        </form>
      </div>
    </div>
    );
};

export default Share;