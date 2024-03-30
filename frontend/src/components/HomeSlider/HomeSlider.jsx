import React, { useEffect, useState } from 'react';
import imageSlide from './HomeSliderData';
import './HomeSlider.css';

const HomeSlider = () => {
    const[currentState,setCurrentState]=useState(0)
    useEffect(()=>{
     const timer=setTimeout(() => {
        if(currentState===2){
            setCurrentState(0)
        }else{
            setCurrentState(currentState+1)
        }
     },4000);
     return ()=> clearTimeout(timer)
    },[currentState])

    const bgImageStyle={
        backgroundImage:`url(${imageSlide[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'100%'
    }
    const goToNext=(currentState)=>{
        setCurrentState(currentState)
    }
  return (
    <div className="big">
    <div className="container-style">
     <div style={bgImageStyle}>
        <div className="trans-background"></div>
        <div className="description">
        <div>
            <h1>{imageSlide[currentState].title}</h1>
            <p>{imageSlide[currentState].body}</p>
        </div>
        <div className="carousel-boullt">
          {
            imageSlide.map((imageSlide,currentState)=>(
                <span key={currentState} onClick={()=>goToNext(currentState)}></span>
            ))
          }
        </div>
        </div>
     </div>
    </div>
    </div>
  )
}

export default HomeSlider