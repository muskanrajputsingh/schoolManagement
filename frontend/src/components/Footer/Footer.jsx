import React,{useEffect} from 'react';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <>
    <div className="last" data-aos="zoom-in">
      <h2>the capacity to learn is a gift;<br />the ability to learn is a skill;<br />the willingness to learn is a choice!<br /><p>~by william shakespeare</p></h2>
    </div>
    <footer data-aos="fade-up">
    <div className="row">
      <div className="col e">
        <img src="https://i.pinimg.com/originals/54/26/4a/54264a84e2f96cb7a5c32efa99b4714d.jpg" alt="logo" className='logo1 ' />
        <p>Education is the first right for all the students girls and boys both have equall right to study and achive their goals.</p>
      </div>
      <div className="col e">
        <h2>New Horizon School 🏫</h2>
        <p>Aloopi Nagar </p>
        <p>Goregaon, Mumbai</p>
        <p>Maharashtra, PIN 567893, India</p>
        <p className="email-id">Horizoneducation.com</p>
        <h4>+91 - 0234567892</h4>
      </div>
      <div className="col">
        <h2>Menu-Links</h2>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Academic</a></li>
          <li><a href="">Courses</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">LogIn</a></li>
     </ul>
        </div>
      <div className="col">
        <h2>Mail Us ✉️</h2>
        <form>
        <i className="ri-mail-open-line"></i>
          <input type="email" placeholder='enter your email id' />
          <button type='submit'><i className="ri-arrow-right-line arr"></i></button>
        </form>
        <div className="social-icons">
        <i className="ri-facebook-line a"></i>
        <i className="ri-instagram-line a"></i>
        <i className="ri-twitter-line a"></i>
        <i className="ri-github-line a"></i>
        </div>
      </div>
</div>
<hr />
<p className='copyright'>New Horizon @ 2023-All RightsReserved</p>
   </footer>
    </>
  )
}

export default Footer