import React from 'react';
import { useState , useRef } from 'react';
import './about.css'; // // Assuming you have a CSS file for styling
import DialogBox from '../DialogBox/DialogBox';
import emailjs from '@emailjs/browser';

const About = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };
  const form1 = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q08ii5o', 'template_572ozkr', form1.current, {
        publicKey: 'gBGUWAEKgUiiZt5aP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Successfully sent!")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send!")
        },
      );
  };
  return (
    <div className="about-page">
    <DialogBox/>
      <h1 className="about">
        <span>a</span>
        <span>b</span>
        <span>o</span>
        <span>u</span>
        <span>t</span>
        <span>&ensp;</span>
        <span>u</span>
        <span>s</span>
      </h1>

<div className='about-wrapper'>
<div class="wrapper"> 
<div id='one' style={{background:"#fff"}}>
<img src='https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' width="450" height="300" alt='Responsive 2-column layout'/>
</div> 
  <div id='two'>
  <h1 className='home-headings'>WHO WE ARE?</h1>
    <p>As a leading home loan agency in Bangalore, the AFS Team is unique service provider in the financial sector.<br/><br/>
      We understand that the process of buying a home in India can be complex and daunting for individuals. That’s why we offer a hassle-free and transparent home loan process. We will work with you to understand your needs and choose the right loan for you. We will also provide you with guidance and support throughout the loan application process.<br/><br/>
      We take pride in not only providing crucial financial assistance but also in realizing the dreams of our clients. Situated in the heart of India’s financial landscape, Silicon Valley, Bangalore, we have established ourselves as the go-to financial institution in the startup capital and investor hub of India, Namma Bengaluru.
     </p> </div>
</div>
</div>
<div className='about-wrapper'>
<div class="wrapper"> 
<div id='one' style={{backgroundColor:"#fff"}}>
<img  style={{backgroundColor:"fff"}} src='https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' width="450" height="300" alt='Responsive 2-column layout'/>
</div> 
  <div id='two'  style={{background:"#fff"}}>
  <h1 className='home-headings'>HOW WE THINK?</h1>
    <p>As a team, we at AFS have a thorough understanding of the Indian customer market and banking system. With a proven track record of satisfying thousands of customers, we take a tailored approach to help individuals achieve their needs and dreams. Whether it’s managing finances or providing loans from top banks, we are here to support you every step of the way.<br/><br/>
     Throughout our journey, we’ve served diverse segments, spanning different industries and backgrounds. We look forward to extending our expertise to you, with the hope that you too will join the ranks of our satisfied customers. Trust MFS for all your home loan needs in Bangalore.
     </p></div>
</div>
</div>
<div className='about-wrapper'>
<div class="wrapper">   
<div id='one'  style={{background:"#fff"}}>
<img src='https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' width="450" height="300" alt='Responsive 2-column layout'/>
</div> 
  <div id='two'>
  <h1 className='home-headings'>WHY CHOOSE US?</h1>
    <p>
    <ul  className='about-ul'>
      <li>🟦
        
        We are a team of experienced and qualified professionals who are passionate about helping our customers achieve their homeownership goals.
        </li>
      <li>🟦
        
       
        We offer a wide range of home loan products to suit the needs of all our customers, including first-time homebuyers, investors, and those who are looking to refinance their existing mortgages.
        </li>
      <li>🟦
        
        
        We are committed to providing our customers with the highest level of service and support. We understand that the home buying process can be complex and stressful, so we are here to help our customers every step of the way.
        </li>
      <li>🟦
        
We are also committed to providing our customers with competitive interest rates and flexible repayment options. We want to make sure that our customers can find the right home loan for their needs and budget.
</li>
    </ul>
    </p>
    </div>
</div>
</div> 
      <div class="container-block container">
  <p class="text-blk team-head-text">
    Our Team
  </p>
  <div class="responsive-container-block teamcard-container">
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"/>
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg"/>
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg"/>
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"/>
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg"/>
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg"/>
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"/>
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg"/>
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg"/>
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"/>
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg" alt=" "/>
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg" alt="" />
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className='get-in-touch1'>
        <div className='get-in-touch-img1'>
            <img  src="https://meritfinancial.in/wp-content/uploads/2023/10/home_baner.jpg" alt="home"/>
        </div>
        
        <div className='get-in-touch-form1 form-container' style={{backgroundColor:"transparent"}}>
        <div className="form" id='contact-us'>
        <form ref={form1} onSubmit={sendEmail}>
            <span className="heading" style={{fontFamily:"Barlow",color:"#000070"}}>READY TO TAKE THE NEXT STEP?</span>
            <h5 className='get-in-touch-line' style={{fontFamily:"Barlow",color:"#48efff"}}>Get in touch with our team today for a personalized consultation. Let’s turn your homeownership dreams into reality.</h5>
            <input
              placeholder="Name"
              type="text"
              className="input"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Phone"
              type="text"
              className="input"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              placeholder="Email address"
              type="email"
              className="input"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
           
            <div className="button-container">
              <div className="send-button" onClick={sendEmail}>
                Send
              </div>
              <div className="reset-button-container">
                <div className="reset-button" onClick={handleReset}>
                  Reset
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
    </div>
    </div>
  );
};

export default About;
