import React from 'react';
import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()
    const[user,setUser]=useState({
        email:"",password:""
        });
      
       let name,value;
   
     const handleInputs=(e)=>{
       name=e.target.name;
       value=e.target.value;
       setUser({...user,[name]:value});
       console.log({...user,[name]:value});
     }
   
     const postData=async(e)=>{
       e.preventDefault();
       const {email,password} = user;
   
       const res = await fetch("/logindashboard",{
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
           email,password
        })
       });
       const data = await res.json();
       if(data.status === 422 || !data){
        window.alert("invalid login");
        console.log("invalid login");
       }else{
        window.alert(" login successfull");
        toast("login successfull");
        console.log(" login successfull");
        navigate('/');
       }
       }
     
   return (
       <>
       <ToastContainer />
       <div className="back">
        <div className="mainn">
            <br /> <br />
           <div className="reggg">
               <h2>Login ✍️</h2>
               <form id='register' method='POST'>
                 <label>email:</label>
                 <br />
                 <input type="email" name='email' value={user.email} onChange={handleInputs} id='email' placeholder='📧 email'/>
                 <br />


                 <label>password:</label>
                 <br />
                 <input type="password" name='password' value={user.password} onChange={handleInputs} id='password' placeholder='🔒 password'/>
                 <br />
                 <input  className='botn' type="submit" value="Submit" onClick={postData} />
               </form>
           </div>
        </div>
        </div>
       </>
   
   )
}

export default Login