import React,{useEffect} from 'react';
import './Achivers.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Achivers = () => {
  useEffect(()=>{
    AOS.init({duration:1800})
    })
  return (
    <>
   <div className="bodddd" data-aos="fade-up">
    <div className="headingg">
        <h1>Our Top Students 🏅</h1>
    </div>
    <div className="sliderr">
      <div className="slidee-trackk" data-aos="flip-right">
       <div className="slidee">
        <img src="https://t3.ftcdn.net/jpg/01/98/89/78/360_F_198897861_8pAuWSMuFC7BiOnSJR2UaQhl8x8DgLNf.jpg" alt="" />
        <span>Pihu Singh</span>
        </div>
       <div className="slidee">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2MmYM4TVdGXwSrR9d26YomYg3WognYkOrPi2dwIGrDoXa1RkN8A6u1uM3ErWOsXke7PE&usqp=CAU" alt="" />
        <span>Rohan Gupta</span>
        </div>
       <div className="slidee">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_JoDOGPI8NCwWiJfZgyqeL_6NmPI5Ebglw&usqp=CAU" alt="" />
        <span>Priya Sharma</span>
       </div>
       <div className="slidee">
        <img src="https://www.stedwardsshimla.org/images/toppers2020_21/7_NIRUPAM%20KAPUR_90.8.jpg" alt="" />
        <span>Rahul verma</span>
       </div>
      
       </div>
    </div>
    </div>

    </>
  )
}

export default Achivers

