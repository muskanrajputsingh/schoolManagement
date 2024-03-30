import React from 'react';
import './Admission.css';
import { useState } from 'react';

const Admission = () => {
     const[user,setUser]=useState({
     name:"",email:"",phone:"",state:"",city:"",password:""
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
    const {name,email,phone,state,city,password} = user;

    const res = await fetch("/regdashboard",{
     method:"POST",
     headers:{
       "Content-Type" : "application/json"
     },
     body:JSON.stringify({
		name,email,phone,state,city,password
     })
    });
    const data = await res.json();
    if(data.status === 422 || !data){
     window.alert("invalid registration");
     console.log("invalid registration");
    }else{
     window.alert(" registration successfull");
     console.log(" registration successfull");
     }
    }
  
return (
	<>
	<div className="back">
     <div className="mainn">
		<div className="regg">
			<h2>registration ✍️</h2>
			<form id='register' method='POST'>
              <label>name:</label>
			  <br />
			  <input type="text" name='name' value={user.name} onChange={handleInputs} id='name' placeholder='enter your name'/>
			  <br />

			  <label>phone:</label>
			  <br />
			  <input type="number" name='phone' value={user.phone} onChange={handleInputs} id='phone' placeholder=' phone no'/>
			  <br />

			  <label>city:</label>
			  <br />
			  <input type="text" name='city' value={user.city} onChange={handleInputs} id='city' placeholder='city'/>
			  <br />

			  <label>state:</label>
			  <br />
			  <input type="text" name='state' value={user.state} onChange={handleInputs} id='state' placeholder='state'/>
			  <br />
			  <label>email:</label>
			  <br />
			  <input type="email" name='email' value={user.email} onChange={handleInputs} id='email' placeholder='email'/>
			  <br />
			  <label>password:</label>
			  <br />
			  <input type="password" name='password' value={user.password} onChange={handleInputs} id='password' placeholder='password'/>
			  <br />
			  <input  className='botn' type="submit" value="Submit" onClick={postData} />
			</form>
		</div>
	 </div>
	 </div>
    </>

)
}
  
export default Admission
