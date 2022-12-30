import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import Login from '../Components/Pages/Login/Login';

import MediaPost from '../Components/Pages/Media/MediaPost';
import Share from '../Components/Pages/Share/Share';
import SignUp from '../Components/Pages/SignUp/SignUp';

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
                path: '/',
                loader:()=>fetch('http://localhost:5000/post'),
                element : <Share></Share>
                
            },
            {
                path: '/media',
              
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