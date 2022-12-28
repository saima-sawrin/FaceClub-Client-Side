import React from 'react';
import LeftSide from './LeftSide';
import NewsFeed from './NewsFeed';
import User from './NewsFeed';
// import './Home.css';
import RightSide from './RightSide';
const Home = () => {
  
        return (
      
        <div className='Container flex ' >
          <LeftSide></LeftSide>
          <NewsFeed></NewsFeed>
         <RightSide></RightSide>
        </div>
 
        );
      };

export default Home;