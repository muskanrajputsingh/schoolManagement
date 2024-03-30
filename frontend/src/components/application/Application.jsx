import React, { useEffect, useState } from 'react';
import './Application.css';

const Application = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch("/register" ,{
            method:"GET",
        })
        .then((res)=>res.json())
        .then((data)=>{
         console.log(data);
         setData(data.data);
        });
    },[]);
  return (
    <>
    <div className="app-box">
    <div className="application-head">
        <div className="logooo">
         <img src="https://i.pinimg.com/originals/54/26/4a/54264a84e2f96cb7a5c32efa99b4714d.jpg" alt="" />
        </div>
        <div className="school-nm">
         <h1>New Horizon School</h1>
        </div>
        <div className="app-classs">
         <p>class</p>
        </div>
        <div className="app-date">
          <p>Date</p>
        </div>
    </div>

    <div className="application-box1">
      <div className="intro">
       <div className="introq">
        <h4>STUDENT NAME</h4>
        <h4>DATE OF BIRTH</h4>
        <h4>CLASS</h4>
        <h4>PHONE NO</h4>
        <h4>GENDER</h4>
       </div>
       <div className="introa">
         <h4>name</h4>
         <h4>date of birth</h4>
         <h4>class</h4>
         <h4>9770626211</h4>
         <h4>male</h4>
       </div>
      </div>
      <div className="profilee">
       <img src="https://t3.ftcdn.net/jpg/01/98/89/78/360_F_198897861_8pAuWSMuFC7BiOnSJR2UaQhl8x8DgLNf.jpg" alt=""/>
      </div>
    </div>
    <div className="otherr-head">
      <div className="quali-head">
        <h5>qualification details</h5>
      </div>
      <div className="personal-head">
       <h5>personal details</h5>
      </div>
    </div>
    <div className="otherr">
     <div className="quali">
      <div className="qualiq">
       <h4>school name</h4>
       <h4>class</h4>
       <h4>percentage</h4>
       <h4>year of passing</h4>
       <h4>city</h4>
      </div>
      <div className="qualia">
       <h4>maharishi</h4>
       <h4>class 10</h4>
       <h4>80</h4>
       <h4>2013</h4>
       <h4>raipur</h4>
      </div>
     </div>
     <div className="divide"></div>
     <div className="personal">
     <div className="qualiq">
       <h4>Father name</h4>
       <h4>Mother name</h4>
       <h4>phone no</h4>
       <h4>city</h4>
       <h4>state</h4>
      </div>
      <div className="qualia">
       <h4>rahul sinha</h4>
       <h4>pinky sinha</h4>
       <h4>9993910027</h4>
       <h4>raipur</h4>
       <h4>chhattisgarh</h4>
      </div>
     </div>
    </div>
  </div>
  <br /> 
    </>
  )
}
export default Application

    

    {/* {data.map((i)=>{
        return(
            <>
             <div className="app-box">
    <div className="application-head">
        <div className="logooo">
         <img src="https://i.pinimg.com/originals/54/26/4a/54264a84e2f96cb7a5c32efa99b4714d.jpg" alt="" />
        </div>
        <div className="school-nm">
         <h1>New Horizon School</h1>
        </div>
        <div className="app-classs">
         <p>{i.course}</p>
        </div>
        <div className="app-date">
          <p>Date</p>
        </div>
    </div>

    <div className="application-box1">
      <div className="intro">
       <div className="introq">
        <h4>STUDENT NAME</h4>
        <h4>DATE OF BIRTH</h4>
        <h4>CLASS</h4>
        <h4>PHONE NO</h4>
        <h4>GENDER</h4>
       </div>
       <div className="introa">
         <h4>{i.name}</h4>
         <h4>date of birth</h4>
         <h4>class</h4>
         <h4>9770626211</h4>
         <h4>{i.gender}</h4>
       </div>
      </div>
      <div className="profilee">
       <img src="https://t3.ftcdn.net/jpg/01/98/89/78/360_F_198897861_8pAuWSMuFC7BiOnSJR2UaQhl8x8DgLNf.jpg" alt=""/>
      </div>
    </div>
    <div className="otherr-head">
      <div className="quali-head">
        <h5>qualification details</h5>
      </div>
      <div className="personal-head">
       <h5>personal details</h5>
      </div>
    </div>
    <div className="otherr">
     <div className="quali">
      <div className="qualiq">
       <h4>school name</h4>
       <h4>class</h4>
       <h4>percentage</h4>
       <h4>year of passing</h4>
       <h4>city</h4>
      </div>
      <div className="qualia">
       <h4>maharishi</h4>
       <h4>class 10</h4>
       <h4>80</h4>
       <h4>2013</h4>
       <h4>raipur</h4>
      </div>
     </div>
     <div className="divide"></div>
     <div className="personal">
     <div className="qualiq">
       <h4>Father name</h4>
       <h4>Mother name</h4>
       <h4>phone no</h4>
       <h4>city</h4>
       <h4>state</h4>
      </div>
      <div className="qualia">
       <h4>rahul sinha</h4>
       <h4>pinky sinha</h4>
       <h4>9993910027</h4>
       <h4>raipur</h4>
       <h4>chhattisgarh</h4>
      </div>
     </div>
    </div>
    </div>
  <br />
         </>
        )
    })} */}
// export default Application



// return (
//     <>
//     <div className="app-container">
    
//        <div className="mappp">
//         <p>email</p>
//         <p>phone</p>
//        </div>
//        <p>hjghjf</p>
//         {
//             data?.map((user)=>{
//                 return(
//                  <>
//                  <div key={user.id}>
//                     <p>{user.email}</p>
//                     <p>{user.phone}</p>
//                     <p>email</p>
//                  </div>
//                  </>
//                 );
//             })
            
//         }
//         </div>
//     </>
//   )