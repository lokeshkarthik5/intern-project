import React from 'react'
import '../Dashboard.css';
import support from '../assets/Group 46.png'
import logo from '../assets/moptro logo.png'
import home from '../assets/home.png'
import user from '../assets/icons8-user-30.png'
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className='card'>
      <img className="support-img" src={support} alt=""/>
      <img className="logo-img" src={logo} alt=""/>
      <div className="circle"><p>4</p></div>
      <div className="employ-card">
        <div className="employ-btn">Employee Productivity Dashboard</div>
        <div className="employ-prod1">
            <div className="monday">
              <p>Productivity on Monday</p>
              <ProgressBar completed = {4} bgColor = "green" baseBgColor=""  animateOnRender = {true} />
            </div>
            <span className="percent1">4%</span>
        </div>
        <div className="employ-prod2">
            <div className="tuesday">
              <p>Productivity on Tuesday</p>
              <ProgressBar completed = {92} bgColor = "green" baseBgColor="" isLabelVisible={false} animateOnRender = {true} />
            </div>
            <span className="percent2">92%</span>
        </div>
        <div className="employ-prod2">
            <div className="tuesday">
              <p>Productivity on Wednesday</p>
              <ProgressBar completed = {122} bgColor = "green" baseBgColor="" isLabelVisible={false} animateOnRender = {true} />
            </div>
            <span className="percent2">122%</span>
        </div>
        <div className="employ-prod2">
            <div className="tuesday">
              <p>Productivity on Thursday</p>
              <ProgressBar completed = {93} bgColor = "green" baseBgColor="" isLabelVisible={false} animateOnRender = {true} />
            </div>
            <span className="percent2">93%</span>
        </div>
        <div className="employ-prod2">
            <div className="tuesday">
              <p>Productivity on Friday</p>
              <ProgressBar completed = {89} bgColor = "green" baseBgColor="" isLabelVisible={false} animateOnRender = {true} />
            </div>
            <span className="percent2">89%</span>
        </div>
        <div className="employ-prod2">
            <div className="tuesday">
              <p>Productivity on Saturday</p>
              <ProgressBar completed = {98} bgColor = "green" baseBgColor="" isLabelVisible={false} animateOnRender = {true} />
            </div>
            <span className="percent2">98%</span>
        </div>
      </div>
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

export default Dashboard