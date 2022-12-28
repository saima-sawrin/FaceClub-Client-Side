import React, { useEffect, useState } from 'react';
import { FaCamera} from 'react-icons/fa';
import Post from './Post/Post';

const NewsFeed = () => {
  const [posts , setPosts] = useState();
  useEffect(()=>{
      fetch('Posts.json')
      .then(res=> res.json())
      .then(data => setPosts(data))
  },[])
    return (
      <div className="feed">
      <div className="feedWrapper">
        {/* <Share /> */}
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
   
      );
    };

export default  NewsFeed;