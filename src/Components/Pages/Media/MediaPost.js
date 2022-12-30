import { Share } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import Media from './Media';
import './Media.css';

const MediaPost = () => {
    const [posts , setPosts] = useState();
  useEffect(()=>{
      fetch('http://localhost:5000/post')
      .then(res=> res.json())
      .then(data =>setPosts(data))
  },[])
    return (
        <div className="feed">
        <div className="feedWrapper">
          {posts?.map((p) => (
            <Media key={p.id} post={p} />
          ))}
        </div>
       
      </div>
    );
};

export default MediaPost;