import React,{useEffect} from 'react';
import './Facility.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Facility = () => {
  useEffect(()=>{
    AOS.init({duration:1800})
    })
  return (
    <>
   <div className="bod" data-aos="fade-up">
    <div className="heading">
        <h1>Our Facilities</h1>
    </div>
    <div className="slider">
      <div className="slide-track">
       <div className="slide">
        <img src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
       </div>
       <div className="slide">
        <img src="https://images.pexels.com/photos/5063450/pexels-photo-5063450.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
       </div>
       <div className="slide">
        <img src="https://images.pexels.com/photos/18435546/pexels-photo-18435546/free-photo-of-a-yellow-school-bus-with-the-words-school-bus-in-arabic.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
       </div>
       <div className="slide">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU" alt="" />
       </div>
       <div className="slide">
        <img src="https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
       </div>
       <div className="slide">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Ktj7dZNUd3hzWy6YFIYdgamjLp3dxpvgXA&usqp=CAU" alt="" />
       </div>
       <div className="slide">
        <img src="https://images.pexels.com/photos/5896813/pexels-photo-5896813.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
       </div>
       <div className="slide">
        <img src="https://images.pexels.com/photos/5384588/pexels-photo-5384588.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
       </div>
       <div className="slide">
        <img src="https://images.pexels.com/photos/10637647/pexels-photo-10637647.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
       </div>
       <div className="slide">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePHgD1t3NWthbQIuVje00RWoNtNuOz4Uhzw&usqp=CAU" alt="" />
       </div>
       <div className="slide">
        <img src="https://images.pexels.com/photos/8926848/pexels-photo-8926848.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
       </div>
       <div className="slide">
        <img src="https://images.pexels.com/photos/8926639/pexels-photo-8926639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
       </div>
    </div>
    </div>

    </>
  )
}

export default Facility