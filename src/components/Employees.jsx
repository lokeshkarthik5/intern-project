import React,{useState} from 'react'
import '../Employees.css'
import { useNavigate } from 'react-router-dom'

import searchpic from '../assets/search.png'
import support from '../assets/Group 46.png'
import logo from '../assets/moptro logo.png'
import home from '../assets/home.png'
import user from '../assets/icons8-user-30.png'
const Employees = () => {
    const navigate = useNavigate();
    const users = [
        {
        EMPID: "1",
        Name: "Arjun",
        DOB: "16-11-2000",
        Role:"Software Engineer"
        },
        {
            EMPID: "2",
            Name: "Mahesh",
            DOB: "16-10-2000",
            Role:"Web Developer"
        },
        {
            EMPID: "3",
            Name: "Madhan",
            DOB: "16-09-2000",
            Role:"Software Engineer"
        },
        {
            EMPID: "4",
            Name: "Karthik",
            DOB: "16-11-1999",
            Role:"Human Resources"
        },
        {
            EMPID: "5",
            Name: "Sundar",
            DOB: "16-11-2001",
            Role:"Full Stack Engineer"
        },
        {
            EMPID: "6",
            Name: "Arya",
            DOB: "16-11-2001",
            Role:"Frontend Developer"
        },
    ];
    
    const [search,setSearch] = useState('')
    const [filterusers,setFilterusers] = useState(users)

    const handleChange=(e)=>{
        e.preventDefault();
        const searchTerm = e.target.value;
        setSearch(searchTerm)

        const filteredUsers = users.filter((user)=>
        user.Name.toLowerCase().includes(search.toLowerCase()))
        setFilterusers(filteredUsers);
        
    }
    function Info (props){
      return (
        
        <div>
        <div className='cardss'>
            <div className='id-flex'>
            <p className='id'>EMP ID: <span>{props.EMPID}</span></p>
            <p className='empid'> {props.EMPID}</p>
            </div>
            <p className='name'>Name: <span>{props.Name} </span></p>
            <p className='dob'>DOB: <span>{props.DOB}</span></p>
            <p className='role'>Role: <span>{props.Role}</span></p>
         </div>
         </div>
      )

          
    }
          
     
     
     
     
     
     
          
     
    
    
    
  
  return (
    <div className="card">
      <img className="support-img" src={support} alt=""/>
      <img className="logo-img" src={logo} alt=""/>
      <div className="circle"><p>4</p></div>
      <div className='search-bar'>
        <input type="search" className='search-input' value={search} placeholder="Search with name" onChange={handleChange} />
        <img src={searchpic} className='search' alt="" />
      </div>
      
        {filterusers.map(user=> 

        <Info
          Name={user.Name}
          DOB={user.DOB}
          Role={user.Role}
          EMPID={user.EMPID}
        />

       
        )}
      <div className="dir-btn">
          <div className='home-btn' onClick={()=>navigate('/dashboard',{replace:true})}>
            <img className='home-logo' src={home} alt="" />
          </div>
          <div className="user-btn" onClick={()=>navigate('/employees',{replace:true})}>
            <img className='user-logo' src={user} alt=""/>
          </div>

      </div>
    </div>
    
  )
}

export default Employees
        
        

      

      



