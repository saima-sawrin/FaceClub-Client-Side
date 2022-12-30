import React, { useEffect, useState } from 'react';

import Share from '../Share/Share';
import Post from './Post/Post';

const NewsFeed = () => {
  const [posts , setPosts] = useState();
  useEffect(()=>{
      fetch('http://localhost:5000/post')
      .then(res=> res.json())
      .then(data => setPosts(data))
  },[])
    return (
      <div className="feed">
      <div className="feedWrapper">
      <Share></Share>
    
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
  
    </div>
   
      );
    };

export default  NewsFeed;