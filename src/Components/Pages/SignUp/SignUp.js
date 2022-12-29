import React, { useContext, useState } from 'react';
import img from '../../../Asset/login.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';


import { AuthContext } from '../../../Context/AuthProvider';


const SignUp = () => {

    const {createUser } = useContext(AuthContext);
    const[error , setError] = useState('');
   
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
   
     const handleSubmit = event => {
         event.preventDefault();
         const form = event.target;
         const name = form.name.value;
         const email = form.email.value;
         const password = form.password.value;
         console.log(name, email, password);
        
         createUser(email, password)
         .then( result => {
             const user = result.user;
             alert('Successfully Registered ');
             navigate(from, {replace:true});
             console.log(user);
             form.reset();
            
             
         })
         .catch( e => {
             alert(e)
             setError(e.message)
 
         });
         
         
     }
   
 
   
    return (
        <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <img src={img} alt="" />
          </div>
          <div className="loginRight">
            <form onSubmit={handleSubmit} action="">
            <div className="loginBox">
              <input  name='name' placeholder="Username" className="loginInput" />
              <input  name='email' placeholder="Email" className="loginInput" />
              <input  name='password' placeholder="Password" className="loginInput" />
              {/* <input  name='name' placeholder="Password Again" className="loginInput" /> */}
              <button className="loginButton">Sign Up</button>
              <h3>  Already have an Account ?</h3>
              <button className="loginRegisterButton">
              <Link to='/login'> Login Here</Link>
              </button>
              <p className='text-red-500'>{error}</p>
            </div>
            </form>
          </div>
        </div>
      </div>
    
   
);
};


export default SignUp;