import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import Login from '../Components/Pages/Login/Login';
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
                
            }
          
        ]
    },

        
  
    {
        
        path:'*',
        element: <PageNotFound></PageNotFound>
        
      
    },
   

])

export default router;