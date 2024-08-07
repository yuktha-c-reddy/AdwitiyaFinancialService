import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useRef } from 'react';
import nri from '../../nri.png'
import "./NriLoan.css"
import emailjs from '@emailjs/browser';

function NriLoan() {
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
        <div>
        <div class="home-image-container" style={{width:"100%" , height:"90vh"}}>
            <img src={nri} alt="image" />
	        {/* <div class="overlay-text" style={{textAlign:"left",left:"20%"}}>
        <h1 className='home-headings' style={{color:"#fff",fontFamily:"Barlow", letterSpacing:"1.1px" , fontSize:"3rem"}}>HOME RENOVATION<br/> LOAN</h1>
        
	    </div> */}
    </div>

    <div className='intro-loan'>
    <h1 className='home-headings'>HOME LOAN FOR NRI</h1>
        
        <p className='welcome-text' style={{textAlign:"center", marginLeft:"10%"}}>
        A home loan for NRIs is a type of loan that is specifically designed for non-resident Indians (NRIs). It is a secured loan, which means that the borrower has to pledge a collateral as security for the loan. The collateral can be in the form of a property, such as a house or an apartment, located in India.
<br/><br/>
Home loans for NRIs are typically offered by banks and other financial institutions in India. The interest rates on these loans may be higher than other types of loans, such as home loans for resident Indians. This is because NRIs are considered to be higher-risk borrowers.
</p> </div>


<div className='benefits' style={{marginBottom:"0px" , paddingBottom:"0px"}}>
<h1 className='home-headings' style={{marginTop:"10px", paddingTop:"10px"}}>BENEFITS</h1>
    <p className='welcome-text' style={{textAlign:"center", marginLeft:"10%"}}>As an NRI, owning a home in India is a dream that can be easily realized with a home loan specifically designed for your needs. Home loans for NRIs offer a range of benefits, including:</p>

<div id="carouselExample2" class="carousel slide">
        <div class="carousel-inner">

        <div class="carousel-item active">
  <img  class="d-block w-50  mx-auto" alt="..." src="https://primewealth.co.in/wp-content/uploads/2023/11/Credit-Score-Essentials-for-NRIs-Building-and-Maintaining-Financial-Wellness.png"/>
            <div class="carousel-caption d-none d-md-block">
            
        </div>
          </div>
          <div class="carousel-item">
  <img  class="d-block w-50  mx-auto" alt="..." src="https://static.abeka.com/Abeka/images/PaymentPlan/ABA_PaymentPlanMark_PurpleBlue.png?update=2"/>
            <div class="carousel-caption d-none d-md-block">
            
        </div>
          </div>
          <div class="carousel-item">
  <img  class="d-block w-50  mx-auto" alt="..." src="https://www.incharge.org/wp-content/uploads/2016/06/lowest-interest-rate.jpg"/>
            <div class="carousel-caption d-none d-md-block">
            
        </div>
          </div>
          <div class="carousel-item">
  <img  class="d-block w-50  mx-auto" alt="..." src="https://i0.wp.com/blog.meqasa.com/wp-content/uploads/2019/04/housefull.jpg?resize=1140%2C760&ssl=1"/>
            <div class="carousel-caption d-none d-md-block">
            
        </div>
          </div>
          <div class="carousel-item">
  <img class="d-block w-50  mx-auto" alt="..." src="https://img.freepik.com/premium-photo/wooden-blocks-with-tax-benefits-iie-light-background-white-calculator-nearby-is-black-handle-business-concept_380694-8474.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=ais_user"/>
            
            <div class="carousel-caption d-none d-md-block">
            
        </div>
          </div>
        
          <div class="carousel-item">
  <img class="d-block w-50  mx-auto" alt="..." src="https://qph.cf2.quoracdn.net/main-qimg-3b6d1b0c2a649f52ab3f0035c6d9e12b-pjlq"/>

            <div class="carousel-caption d-none d-md-block">
            
        </div>
          </div>
           </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#add8e6" fill-opacity="1" d="M0,192L40,213.3C80,235,160,277,240,282.7C320,288,400,256,480,245.3C560,235,640,245,720,234.7C800,224,880,192,960,197.3C1040,203,1120,245,1200,261.3C1280,277,1360,267,1400,261.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    <div className='eligibility' style={{backgroundColor:"lightblue"}}>
    
    <div class="wrapper" style={{ backgroundColor:"lightblue" ,marginTop:"0px" ,width:"100%"}}>  
<div id='one'>
<img src='https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' width="450" height="300" alt='Responsive 2-column layout'/>
</div>
  <div id='two' style={{backgroundColor:"lightblue"}}>
  
  <h1 className='home-headings'>ELIGIBILITY</h1>
    <p style={{fontSize:"23px" ,marginTop:"40px",  lineHeight:"2"}}>To be eligible for a home loan for NRIs, the borrower must meet the following criteria:
    <br/><br/>
    <ul  style={{fontFamily:"monospace"}}>

    <li>

    Must be an NRI
</li>
<li>Must have a good credit score</li>
<li>
Must have a good credit score</li>
<li>Must have a down payment of at least 10% of the property value</li>
    </ul>
    </p> </div>
</div>
    </div>


   

    <div className='docs'>
    <div class="letter-image">
	<div class="animated-mail">
		<div class="back-fold"></div>
		<div class="letter">
			<div class="letter-border"></div>
			<div class="letter-title">DOCUMENTS REQUIRED</div>
			<div class="letter-context">
            Applying for a home loan for NRIs is a simple and straightforward process. You will need to provide the following documents:
            <ul className='ul-docs' style={{fontFamily:"monospace"}}>
            <li>Copy of your passport</li>
            <li>Copy of your visa</li>
            <li>Bank statements</li>
            <li>Proof of income</li>
            <li>Proof of Address</li>
</ul></div>
			<div class="letter-stamp">
				<div class="letter-stamp-inner"></div>
			</div>
		</div>
		<div class="top-fold"></div>
		<div class="body"></div>
		<div class="left-fold"></div>
	</div>
	<div class="shadow"></div>
</div>
    </div>

    <div className='conclusion-loan'>
    <h1 className='home-headings' style={{marginTop:"0"}}>CONCLUSION</h1>
        
        <p className='welcome-text' style={{textAlign:"center", marginLeft:"10%"}}>
        A home loan for NRIs is a great way to achieve your dream of owning a home in India. With a home loan from our bank, you can be sure of getting a competitive interest rate, flexible repayment options, and fast and efficient processing. Contact us today to learn more about our home loans for NRIs.
        </p> </div>
        
      
      <div className='get-in-touch1' >
      
        <div className='get-in-touch-img1'>
            <img src="https://meritfinancial.in/wp-content/uploads/2023/10/home_baner.jpg" alt="home"/>
        </div>
        <div className='get-in-touch-form1 form-container' style={{ borderLeft:"5px solid #12c6c9", backgroundColor:"transparent",color:"#78c4c6"}}>
        <div className="form" id='contact-us'>
        <form ref={form1} onSubmit={sendEmail}>
            <span className="heading" style={{fontFamily:"Barlow",color:"#000070"}}>READY TO TAKE THE NEXT STEP?</span>
            <h5 className='get-in-touch-line' style={{fontFamily:"Barlow",color:"#000"}}>Get in touch with our team today for a personalized consultation. Let’s turn your homeownership dreams into reality.</h5>
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
           
            <div className="button-container" >
              <div className="send-button"  style={{backgroundColor:"#12c6c9"}} onClick={sendEmail}>
                Send
              </div>
              <div className="reset-button-container">
                <div className="reset-button" style={{color:"#12c6c9"}} onClick={handleReset}>
                  Reset
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
	    </div>
    
    )
}
export default NriLoan;