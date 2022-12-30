import { Share } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import Media from './Media';
import './Media.css';

const MediaPost = () => {
  const [posts , setPosts] = useState();
  useEffect(()=>{
      fetch('https://face-club-server-side.vercel.app/post')
      .then(res=> res.json())
      .then(data => setPosts(data))
  },[])
    return (
      <div className="feed">
      <div className="feedWrapper">
       
        {posts?.map((post) => (
         
          <Media key={post.id} post={post} />
        ))}
      </div>
  
    </div>
    );
};

export default MediaPost;