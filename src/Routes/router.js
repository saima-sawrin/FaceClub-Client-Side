import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import NewsFeed from '../Components/Pages/Home/NewsFeed';
import Login from '../Components/Pages/Login/Login';
import Media from '../Components/Pages/Media/Media';
import MediaPost from '../Components/Pages/Media/MediaPost';
import SignUp from '../Components/Pages/SignUp/SignUp';
import NavBar from '../Components/Shared/NavBar';
import Main from '../Layout/Main';
import PageNotFound from '../PageNotFound/PageNotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element : <Home></Home>
                
            },
            {
                path: '/signup',
                element : <SignUp></SignUp>
                
            },
            {
                path: '/login',
                element : <Login></Login>
                
            },
            {
                path: '/media',
                // element : <NewsFeed></NewsFeed>
                element: <MediaPost></MediaPost>
                
            }
          
        ]
    },

        
  
    {
        
        path:'*',
        element: <PageNotFound></PageNotFound>
        
      
    },
   

])

export default router;