import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Group 3.png';

import '../Home.css'

function Home() {
  const navigate = useNavigate();
  const [email,setEmail] =  useState('');
  const [password,setPassword] = useState('')
 
  const database = [
    {
      emailId: "admin1@xyz.com",
      pass: "admin1"
    },
    {
      email: "user@xyz.com",
      pass: "pass"
    }
  ];

  const handleSubmit=(event)=>{
    event.preventDefault();

    const userData = database.find((user)=>user.emailId == email)
    
    

    if(userData){
      if(userData.pass == password){
        navigate('/dashboard',{replace:true})
      }
      else{
        alert("Password incorrect")

      }
    }
  }
  
  
  

  return (
   <div className="card">
      <img src={logo} alt=""/>
      <h1>#We are Electric</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input className="email" type="email" placeholder='E-mail' required onChange={(e)=>setEmail(e.target.value)}/>
        <input className="password" type="password" placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <h2>Forgot Password?</h2>
   </div>
  )
}
      
      
      

      

export default Home
