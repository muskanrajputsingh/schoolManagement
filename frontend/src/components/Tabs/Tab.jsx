import React, { useState ,useEffect} from 'react';
import './Tab.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tab = () => {
    const[toggleState,setToggleState]=useState(1);
      useEffect(()=>{
      AOS.init({duration:1800})
      })
    const toggleTab=(index)=>{
       setToggleState(index);
    }
  return (
    <div className="tab-box" data-aos="fade-right">
        <div className="tab-box1" data-aos="flip-left">
         <img src="https://www.pngall.com/wp-content/uploads/8/Child-Student-PNG-Picture.png" alt="" />
        </div>
        <div className="container1"><br />
         <h1>Our Courses 📚</h1>
            <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(1)}><h1>Primary Level</h1></div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(2)}><h1>Secondary Level</h1></div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(3)}><h1>Optional</h1></div>
            </div>
         <div className="content-tabs">
         <div className={toggleState === 1 ? "content active-content" : "content"}>
            <h2>Nursery - 10th</h2>
            <hr />
            <div className="nurr">
            <div className="emoj">
            <p> 🕉️</p>
            <p> 🅰️</p>
            <p> 🔢</p>
            <p>👑</p>
            <p> 🌍</p>
            <p> 💻</p>
            <p> 🖌️</p>
            <p> 🏀</p>
            </div>
            <div className="sery">
            <p>Hindi </p>
            <p>English </p>
            <p>Maths </p>
            <p>SST </p>
            <p>Science </p>
            <p>computer </p>
            <p>Drawing </p>
            <p>Sport </p>
            </div>
            <div className="paranur">
             <p>The duration of study in this stage is 4-5 years. Common subjects include English, Hindi, Mathematics, Environmental Science and General Knowledge.
             Middle stage of education covering 3-4 years of academic study is formed by 5th-8thclass consisting of  students aged between 12 to 14 years.primary Stage of education covering 2-3 years of academic study starts with classes 8th-10th. eg. this is called primary school students. 
             </p>
            </div>
            </div>
           </div>
         <div className={toggleState === 2 ? "content active-content" : "content"}>
            <h2>11th-12th</h2>
            <hr />
            <div className="nurr">
            <div className="emoj">
               <p>🔢</p>
               <p>  💀</p>
               <p>  🔢+🧑‍⚕️</p>
               <p> 💰</p>
               <p>👮</p>
               <p>💻</p>
               <p>🅰️</p>
               <p> 🕉️</p>
            </div>
            <div className="sery">
               <p>PCM  </p>
               <p>PCB   </p>
               <p>PCMB  </p>
               <p>Commerce</p>
               <p>Arts</p>
               <p>computer</p>
               <p>English </p>
               <p>Hindi</p>
            </div>
            <div className="paranur">
             <p>Senior Secondary Education in India is of only 2 years. There is uniformity on this level of education in terms of duration and classes i.e. all the States/UTs follow this 10+2 pattern. Senior Secondary Schools in India include classes 11th to 12th. At this level of education students have the freedom to choose their preferred stream and subjects. They can pursue Arts, Commerce, Science (medical & non medical). 
             </p>
            </div>
            </div>
         </div>
         <div className={toggleState === 3 ? "content active-content" : "content"}>
            <h2>Optional</h2>
            <hr />
            <div className="nurr">
            <div className="emoj">
            <p> 🎵</p>
            <p> 🎨</p>
            <p> 🏅</p>
            <p>💻</p>
            <p> 🏀</p>
            <p>💃</p>
            <p> 🏊</p>
            <p> 🙏</p>
            </div>
            <div className="sery">
            <p>Music </p>
            <p>Drawing </p>
            <p>Physical Education </p>
            <p>computer </p>
            <p>Sports </p>
            <p>Dance </p>
            <p>swimming </p>
            <p>Yoga </p>
            </div>
            <div className="paranur">
             <p>Extracurricular activities are an essential part of a well-rounded education. These activities enable students to apply academic skills in a real-world context. They also allow students to reinforce the lessons learned in the classroom. Many colleges and universities value extracurricular activities because they contribute to developing the "whole student."
             At this level of education students have the freedom to choose their preferred passion.
             </p>
            </div>
            </div>
         </div>
        </div>
    </div>
    </div>
  )
}

export default Tab