import React from 'react'
import { Link } from 'react-router-dom'
import renovation from '../../renovation.png'
import finance from '../../finance.png'
import { useState , useRef} from 'react';
import emailjs from '@emailjs/browser';
import contactImage from '../../contact.png'

import "./RenovationLoan.css"

function RenovationLoan() {
     const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const form1 = useRef();

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  const validateForm = () => {
    let formErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      formErrors.name = "Name is required.";
    }

    if (!phone || !phoneRegex.test(phone)) {
      formErrors.phone = "Valid phone number is required (10 digits).";
    }

    if (!email || !emailRegex.test(email)) {
      formErrors.email = "Valid email address is required.";
    }

    return formErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm('service_q08ii5o', 'template_572ozkr', form1.current, {
          publicKey: 'gBGUWAEKgUiiZt5aP',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("Successfully sent!");
            handleReset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("Failed to send!");
          },
        );
    } else {
      setErrors(formErrors);
    }
  };
    return (
        <div>
        <div class="home-image-container" style={{width:"100%" , height:"70vh"}}>
            <img src={renovation} alt="image" />
	        {/* <div class="overlay-text" style={{textAlign:"left",left:"20%"}}>
        <h1 className='home-headings' style={{color:"#fff",fontFamily:"Barlow", letterSpacing:"1.1px" , fontSize:"3rem"}}>HOME RENOVATION<br/> LOAN</h1>
        
	    </div> */}
    </div>

    <div className='intro-loan' >
    <h1 className='home-headings' >HOME RENOVATION LOAN</h1>
        
        <p className='welcome-text' style={{textAlign:"center", marginLeft:"10%"}}>
        A home extension and renovation loan is a type of loan that is used to finance the extension or renovation of an existing home. It is a secured loan, which means that the borrower has to pledge a collateral as security for the loan. The collateral is typically the home that is being extended or renovated.
<br/><br/>
Home extension and renovation loans are typically offered by banks and other financial institutions. The interest rates on these loans may be higher than other types of loans, such as home loans for purchase of an existing home. This is because home extension and renovation loans are considered to be a higher risk loan.</p>
    </div>


<div className='benefits' style={{marginBottom:"0px" , paddingBottom:"0px"}}>
<h1 className='home-headings' style={{marginTop:"10px", paddingTop:"10px"}}>BENEFITS</h1>
    <p className='welcome-text' style={{textAlign:"center", marginLeft:"10%"}}>There are a number of benefits to taking out a home extension and renovation loan, including:</p>

<div id="carouselExample2" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
  <img  class="d-block w-50  mx-auto" alt="..." src="https://www.incharge.org/wp-content/uploads/2016/06/lowest-interest-rate.jpg"/>
            <div class="carousel-caption d-none d-md-block">
            
        </div>
          </div>
          <div class="carousel-item active">
  <img  class="d-block w-50  mx-auto" alt="..." src={finance}/>
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
<img src='https://i0.wp.com/www.trillionbits.com/wp-content/uploads/2022/09/business-support-services.png?fit=1000%2C1000&ssl=1' width="450" height="300" alt='Responsive 2-column layout'/>
</div>
  <div id='two'style={{backgroundColor:"lightblue"}}>
  
  <h1 className='home-headings'>ELIGIBILITY</h1>
    <p style={{fontSize:"23px" ,marginTop:"40px",  lineHeight:"2"}}>To be eligible for a home extension and renovation loan, the borrower must meet the following criteria:
    <br/><br/>
    <ul  style={{fontFamily:"monospace"}}>

    <li>
Must be the owner of the home that is being extended or renovated</li>
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
		<div class="back-fold" style={{width:"100%",height:"90%"}}></div>
		<div class="letter">
			<div class="letter-border"></div>
			<div class="letter-title">DOCUMENTS REQUIRED</div>
			<div class="letter-context">
            To apply for a home extension and renovation loan, the borrower must submit the following documents to the lender: <ul className='ul-docs' style={{fontFamily:"monospace"}}>
            <li>Application form</li>
            <li>Income tax returns for the past 2 years</li>
            <li>Proof of identity</li>
            <li>Proof of home ownership</li>
            <li>Plans for the extension or renovation</li>
</ul></div>
			<div class="letter-stamp">
				<div class="letter-stamp-inner"></div>
			</div>
		</div>
		<div class="top-fold" style={{width:"100%"}}></div>
		<div class="body" style={{width:"100%"}}></div>
		<div class="left-fold"></div>
	</div>
	<div class="shadow"></div>
</div>
    </div>

    <div className='conclusion-loan'>
    <h1 className='home-headings' style={{marginTop:"0"}}>CONCLUSION</h1>
        
        <p className='welcome-text' style={{textAlign:"center", marginLeft:"10%"}}>
        Home extension and renovation loans are a great way to finance the extension or renovation of your existing home. They offer a number of benefits, such as access to a wide range of lenders, the ability to finance the extension or renovation of your home without having to sell it, and tax benefits. If you are considering extending or renovating your home, a home extension and renovation loan may be the right option for you.</p> </div>
        
      
      <div className='get-in-touch1' >
        <div className='get-in-touch-img-div'>
        <div className='get-in-touch-img1'>
            <img src={contactImage} alt="home"/>
        </div>
        </div>
        <div className='get-in-touch-form1 form-container' style={{ backgroundColor: "transparent" }}>
          <div className="form" id='contact-us'>
            <form ref={form1} onSubmit={sendEmail}>
              <span className="heading" style={{ fontFamily: "Barlow", color: "#000070" }}>READY TO TAKE THE NEXT STEP?</span>
              <h5 className='get-in-touch-line' style={{ fontFamily: "Barlow", color: "#000070" }}>Get in touch with our team today for a personalized consultation. Let’s turn your homeownership dreams into reality.</h5>
              <input
                placeholder="Name"
                type="text"
                className="input"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="errorhome">{errors.name}</p>}

              <input
                placeholder="Phone"
                type="text"
                className="input"
                value={phone}
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <p className="errorhome">{errors.phone}</p>}

              <input
                placeholder="Email address"
                type="email"
                className="input"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="errorhome">{errors.email}</p>}

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
    
    )
}
export default RenovationLoan;
