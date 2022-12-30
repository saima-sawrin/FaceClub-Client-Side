import { Label } from '@mui/icons-material';
import { Box, Button, FormControl, FormGroup, Modal, Typography } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import '../Login/Login.css';
import { AuthContext } from '../../../Context/AuthProvider';

const About = () => {
    const{user}= useContext(AuthContext)
    const[open, setOpen]= useState(false);
    const[close, setClose]= useState(false);
    const [name, setName] = useState(user?.displayName);
    const photoURLRef = useRef(user?.photoURL);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = e =>{
        setName(e.target.value)
    }
    const handleOpen= ()=>{
     setOpen(true);
    }
    const handleClose= ()=>{
     setClose(true);
    }
  
    return (
        <div >
           
        <h3>User Profile Information</h3>
        <form onSubmit={handleSubmit} className='infoForm'>

        <FormGroup className="mb-3" controlId="formBasicPassword">
            <Label>Your Name</Label>
            <input onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name"   />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicEmail">
            <Label>Email address</Label>
            <input  defaultValue={user?.email} type="email" placeholder="Enter email"   ></input>
            </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicPassword">
            <Label>Photo URL</Label>
            <input ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL"  />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicPassword">
            <Label>Address</Label>
            <input  type="text" placeholder="Address"  />
        </FormGroup>
      
              <Button onClick={handleOpen}>Edit</Button>
<Modal className='Model'
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box >
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Edit Your Information
    </Typography>
    <FormGroup className="mb-3" controlId="formBasicPassword">
            <Label>Your Name</Label>
            <input onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name"   />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicEmail">
            <Label>Email address</Label>
            <input  defaultValue={user?.email} type="email" placeholder="Enter email"   ></input>
            </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicPassword">
            <Label>Photo URL</Label>
            <input ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL"  />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicPassword">
            <Label>Address</Label>
            <input  type="text" placeholder="Address"  />
        </FormGroup>
    <button onClick={handleClose} className='loginRegisterButton'>Submit</button>
  </Box>
</Modal>
  
        
    </form>
  
       </div>
    );
};

export default About;