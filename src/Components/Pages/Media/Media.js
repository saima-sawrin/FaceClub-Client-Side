import { MoreVert, MoreVertRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../Home/Post/Post.css';


const Media = ({p}) => {
  
    const [like,setLike] = useState(p?.like)
    const [isLiked,setIsLiked] = useState(false)
  
    const likeHandler =()=>{
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
    }
    const [Users , setUsers] = useState();
    useEffect(()=>{
        fetch('Users.json')
        .then(res=> res.json())
        .then(data => setUsers(data))
    },[])

      


  return (
    <div className="post">

        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src={Users?.filter((u) => u.id === p?.userId)[0]?.profilePicture}
                alt=""
              />
              <span className="postUsername">
                {Users?.filter((u) => u.id === p?.userId)[0]?.username}
              </span>
              <span className="postDate">{p?.date}</span>
            </div>
            <div className="postTopRight">
            <MoreVertIcon ></MoreVertIcon>
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{p?.desc}</span>
            <img className="postImg" src={p?.photo} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="Asset/like.png" onClick={likeHandler} alt="" />
              <img className="likeIcon" src="Asset/heart.png" onClick={likeHandler} alt="" />
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{p?.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
  );
}


export default Media;