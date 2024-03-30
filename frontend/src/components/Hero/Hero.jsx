import React, { useEffect} from 'react';
import './Hero.css';
import { TbTargetArrow } from "react-icons/tb";
import { BsEyeSlashFill } from "react-icons/bs";
import { RiFocus3Fill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css'
import HomeSlider from '../HomeSlider/HomeSlider';
import Tab from '../Tabs/Tab';


const Hero = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
    })
   
  return (
    <>
     <div className="container"> 
          <HomeSlider />
             
          <div className="box" data-aos="zoom-in">  
          <div className="box1" data-aos="flip-right">
           <div className="o"><TbTargetArrow className='ic'/></div>
           <div className="n"><h2>Mission</h2></div>
           <div className="er"><p>Our mission  is to nurture our students to realize their own potential and identify and achieve their goals in  environment of rich tutelage, joyful and harmonious.</p></div>
          </div>
          <div className="box2" data-aos="flip-right">
           <div className="t"><BsEyeSlashFill  className='ic'/> </div>
           <div className="w"><h2>Vision</h2></div>
           <div className="er"><p>Our vision is to prepare our children for life by:-<br />
          ➤	broadening their horizons so that their world encompasses the whole of mankind.</p></div>
          </div>
          <div className="box3" data-aos="flip-right">
            <div className="h"><RiFocus3Fill className='ic'/></div>
            <div className="r"><h2>Focus</h2></div>
            <div className="er"><p>➤	To provide pedagogy which will promote the learning of Science & Technology, liberal Arts, language learning according to the aptitude and potential of the students.</p>
            </div>
          </div>
       </div>
       </div>

       <Tab />
    </>
    
  )
}

export default Hero



