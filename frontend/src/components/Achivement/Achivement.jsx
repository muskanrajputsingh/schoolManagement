import React,{useEffect} from 'react';
import './Achivement.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Achivers from '../Achivers/Achivers';

const Achivement = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
    })

  return (
    <>
    <div className="boddd" data-aos="zoom-in">
    <div className="heading">
        <h1> Achivements 🏆</h1>
    </div>
    <div className="achive">
      <div className="achivement1" data-aos="fade-right">
       <div className="ment">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPWctMtu-scZMlOL4uAilxpJu8Pw-Llhpw7es80xXM1ykigmruSUnzvPDgGL_sMiLIpE&usqp=CAU" alt="" />
       </div>
       <div className="para1">
        <h2>School With Best Management</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dignissimos optio corrupti eveniet aperiam ab tenetur nostrum illum aspernatur rem.</p>
       </div>
       </div>
       <div className="achivement2" data-aos="fade-left">
       <div className="para1">
        <h2>Educational Excellence Award 2020 | 2022 | 2023</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dignissimos optio corrupti eveniet aperiam ab tenetur nostrum illum aspernatur rem.</p>
       </div>
       <div className="ment">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-KmTFNSNJ-IrUoL86Rtmp0VCODLoRnrAa0ne1TafXETIS4D2EuqKeOzXZlbWAo4vh7g&usqp=CAU" alt="" />
       </div>
       </div>
     </div>
    </div>

    <Achivers />
     

   
    </>

  )
}

export default Achivement