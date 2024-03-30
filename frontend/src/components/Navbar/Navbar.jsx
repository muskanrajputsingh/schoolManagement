import React,{useState} from 'react';
import {SiConsul} from 'react-icons/si';
import { FaUserGraduate } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const[active,setActive]=useState('navbarMenu')
    const shownavbar =()=>{
        setActive('navbarMenu shownavbar')
    }
    const removenavbar=()=>{
        setActive('navbarMenu')
    }
  return (
    <>
    <div className="navbar flex">
        <div className="navbarOne flex">
            <div>
                <SiConsul className='icon'/>
            </div>

            <div className="none flex">
                <li className='flex'><FaUserGraduate className='icon'/>Admission</li>
                <li className='flex'><FaPhone className='icon'/>Query</li>
                <li className='flex'><FaEnvelope className='icon' />Mail</li>
         </div>
         <div className="atb flex">
           <Link to={'/login'}><span id='in'>SignIn</span></Link>
             <span> SignOut</span>
         </div>
        </div>

        <div className="navbarTwo flex">
            <div className="logodiv">
                <img className='logo' src="https://i.pinimg.com/originals/54/26/4a/54264a84e2f96cb7a5c32efa99b4714d.jpg" alt="" height={100} width={250}/>
            </div>
            <div id='lists' className={active}>
         <ul className="menu flex">
        <Link to={'/school/'}><li onClick={removenavbar} className="listItem">Home</li></Link>
        <Link to={'/about'}><li onClick={removenavbar} className="listItem">About</li></Link>
        <Link to={'/achivement'}><li onClick={removenavbar} className="listItem">Achivement</li></Link>
        <Link to={'/contact'}><li onClick={removenavbar} className="listItem">Courses</li></Link>
        <Link to={'/register'}><li onClick={removenavbar} className="listItem">Register</li></Link>
          </ul>
          </div>
          <div className='menu'>
            <Link to={'/application'}><button className="btn flex btnOne"> Apply Now </button></Link> 
            </div>

            <div onClick={shownavbar} className="toggleIcon">
             <TiThMenu className='icon' />
            </div>
        </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br />
    
    </>
  )
}

export default Navbar