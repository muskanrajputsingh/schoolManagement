import React from 'react';
import './About.css';
import Tab from '../Tabs/Tab';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TbTargetArrow } from "react-icons/tb";
import { BsEyeSlashFill } from "react-icons/bs";
import { RiFocus3Fill } from "react-icons/ri";

const About = () => {
  const callAboutPage=async ()=>{
   try{
   const res = await fetch('/about',{
    method:"GET",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    credentials:"include"
   });

  const data = await res.json();
  console.log(data);

  if(!res.status === 200){
    const error = new Error(res.error);
    throw error;
  }

   }catch(err){
    console.log(err);
   }
  }

  useEffect(()=>{
    callAboutPage();
    AOS.init({duration:2000})
    })

  return (
    <>
      <div className="about-box">
        <div className="about1">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Hibbing_High_School_2014.jpg/1200px-Hibbing_High_School_2014.jpg" alt="" />
        </div>
        <div className="about2">
          <h1>new horizon school</h1>
          <p>This schhol established in year 1999,Founder of this school is shri Narenra singh.
          The Duration Of Study In This Stage Is 4-5 Years. Common Subjects Include English, Hindi, Mathematics, Environmental Science And General Knowledge. Middle Stage Of Education Covering 3-4 Years Of Academic Study Is Formed By 5th-8thclass Consisting Of Students Aged Between 12 To 14 Years.Primary Stage Of Education Covering 2-3 Years Of Academic Study Starts With Classes 8th-10th. Eg. This Is Called Primary School Students.<br />
          Senior Secondary Education In India Is Of Only 2 Years. There Is Uniformity On This Level Of Education In Terms Of Duration And Classes I.E. All The States/UTs Follow This 10+2 Pattern. Senior Secondary Schools In India Include Classes 11th To 12th. At This Level Of Education Students Have The Freedom To Choose Their Preferred Stream And Subjects. They Can Pursue Arts, Commerce, Science (Medical & Non Medical).
          </p>
        </div>
      </div>

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

    <Tab />
    </>
  )
}

export default About