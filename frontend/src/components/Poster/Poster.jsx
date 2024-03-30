import React, { useEffect, useState } from 'react';
import './Poster.css' ;
import AOS from 'aos';
import 'aos/dist/aos.css';


// import ReactPlayer from 'react-player';


const Poster = ({images}) => {
  const [current,setCurrent]=useState(0);
  const [autoPlay,setAutoPlay]= useState(true);
  let timeOut=null;

  
  useEffect(()=>{
    AOS.init({duration:2000})
    timeOut=autoPlay &&
    setTimeout(() => {
      slideRight();
    }, 2500);
  })

  const slideRight=()=>{
    setCurrent(current === images.length -1 ? 0 :current + 1)
 
  };
  const slideLeft=()=>{
    setCurrent(current === 0 ? images.length -1 :current - 1);
  }
  return (
    <>
    <div className="bodd" data-aos="fade-right">
          {/* <div className='gallery'>
        <h1> Our Students Gallery 😄</h1>
     </div> */}
      <div className='Appp'>
      <div className='carousel' onMouseEnter={()=>{setAutoPlay(false);clearTimeout(timeOut);}} onMouseLeave={()=>{setAutoPlay(true);}}>
        <div className='carousel_wrapper'>
          {images.map((image,index)=>{
            return(
              <div key={index} className={index == current ? "carousel_card carousel_card-active" : "carousel_card"}>
                <img className='card_image' src={image.image} alt="crousel" />
                <div className='card_overlay'>
                 <h2 className='card_title'></h2>
                </div>
                </div>
            );
          })}
          <div className='carousel_arrow_left' onClick={slideLeft}>&lsaquo;</div>
          <div className='carousel_arrow_right' onClick={slideRight}>&rsaquo;</div>
        </div>
      </div>
      </div>
      </div>
     
{/* student work */}
      <div className="stu-wrk">
      <h1>Students Work</h1>
     </div>
    <div className="stu">
     <div className="wrk1" data-aos="flip-right">
      <img className='rimg1' src="https://m.media-amazon.com/images/I/51A6J4DHJAL._AC_UF1000,1000_QL80_.jpg" alt="" />
     </div>
     <div className="wrk2">
      <div className="wrk3" data-aos="flip-right">
        <img className='rimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcGBACw2uyZ8Vht54xkURGifHjIn6hS5S26g&usqp=CAU" alt="" />
        <img className='rimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoz2yGkjR1NA_6csfazYB41F8LSzcqgF47bg&usqp=CAU" alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpjWNcm3KKq_u5HHSIadAYWD5m-cKbG0I8V8I0ljN6-SZVaYngmYySvCwQzdqCkN66Kw&usqp=CAU" alt="" />
      </div>
      <div className="wrk4" data-aos="flip-right">
        <img className='rimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKKMswjCDipPiEllo3PITi5N7GWla0qYjCw&usqp=CAU" alt="" />
        <img className='rimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReF6nEQ0jh6PkbGrpzha3EiPRTsBN30DCWNg&usqp=CAU" alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0uvt2if8J-9RvpPoAki3rrNAsVoYi6lT1qFx4t1fe78-dH2-tkb6Y1FnwQoSpAp8KxPo&usqp=CAU" alt="" />
      </div>
     </div>
    </div>
     </>
  )
}

export default Poster ;