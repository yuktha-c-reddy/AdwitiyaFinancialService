import React from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 
import DialogBox from '../DialogBox/DialogBox';
import emailjs from '@emailjs/browser';
import img from '../../img1.jpeg'
import contactImage from '../../contact.png'

const Home = () => {
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
  const phoneform = useRef();
  const sendEmailphone = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q08ii5o', 'template_rl3b2hg', phoneform.current, {
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
    <div className="home">
    <DialogBox/>
    <div className="home-image-container">
    <img src="https://assets-news.housing.com/news/wp-content/uploads/2019/11/02110936/How-to-get-a-home-loan-to-construct-your-own-house-FB-1200x700-compressed-1200x700.jpg" alt="image" />
	    <div className="overlay-text">
        <p style={{color:"white"}}>Home Loan Solutions for Every Dream Home</p>
        <h1 className='home-tagline' >YOUR PATH TO HOMEOWNERSHIP<br/> STARTS HERE</h1>
        <p>Get a free Check with our unique service provider. Take the first step towards your future today!</p>
        <form ref={phoneform}>
        <input placeholder="Enter phone number" name="phonenumber" className="input-style" type="text"/><br/><br/>
        <button className="home-enquiry-btn" onClick={sendEmailphone}>Submit</button>
        </form>
	    </div>
    </div>
    <div className='welcome'>
        <h1 className='home-headings1'>Welcome to AFS</h1>
        <h1 className='tagline'>Unique Service Provider</h1>
        <p  className='welcome-text' style={{textAlign:"center"}}>At Adwitiya Financial Services, we understand that purchasing a home is not just a financial decision but a deeply personal milestone. Our mission is to empower you on your journey to homeownership, providing expert guidance and flexible home loan solutions tailored to your unique needs.
<br/><br/>
With years of industry experience, our team of dedicated professionals is committed to making your dream of owning a home a reality. Whether you’re a first-time buyer or looking to refinance, trust Adwitiya to be your partner every step of the way. We provide property loans in Bangalore, partnering with SBI, HDFC, Federal Bank, LIC, ICICI , PNB , BOB and BOI  for your financial success.</p>
    </div>
   
    <div className="widget">
  <div className="widget-card">1<p>Location</p></div>
  <div className="widget-card">15+<p>Employees</p></div>
  <div className="widget-card">1700+ <p>Happy Customers</p></div>
  <div className="widget-card">1560+ <p>Satisfaction</p></div>
</div>

    <div className='our-services'>
        <h1 className='home-headings'>Our Services</h1>
        <div className="main">
  <ul className="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img  className='services-img' src="https://plus.unsplash.com/premium_photo-1661425407118-e64871d1ab65?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGxvYW58ZW58MHx8MHx8fDA%3D"/></div>
        <div class="card_content">
          <h2 class="card_title">Home Purchase Loans</h2>
          <p>AFS offers loan services in partnership with a reputable Bangalore-based agency.</p>
         
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img  className='services-img' src="https://img.money.com/2023/12/Best-Mortgage-Refinance-Companies-mbci_mb6w3__bhv7ew.jpg?quality=85"/></div>
        <div class="card_content">
          <h2 class="card_title">Refinance Solutions</h2>
           <p>Explore options to optimize your mortgage terms and save on your monthly payments.</p>
         
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img className='services-img' src="https://st.depositphotos.com/1011643/4430/i/450/depositphotos_44308801-stock-photo-young-indian-family-with-the.jpg"/></div>
        <div class="card_content">
          <h2 class="card_title">Expert Advice</h2>
           <p>Get professional guidance on navigating the complexities of the home loan process.</p>
        </div>
      </div>
    </li>
  </ul>
</div>

    </div>
    <div className='why-choose-us' style={{backgroundColor:"#fff"}}>
    <svg width="100%" height="10%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 110.14285714285714,137.75 220.28571428571428,125.5 333,140 C 445.7142857142857,154.5 561,195.75 700,185 C 839,174.25 1001.7142857142858,111.5 1129,97 C 1256.2857142857142,82.5 1348.142857142857,116.25 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#000070" fillOpacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
     <div className='wrapper' style={{width:"100%"}}>
     <div id='one' style={{backgroundColor:"#fff"}}>
     <img src="https://i0.wp.com/www.trillionbits.com/wp-content/uploads/2022/09/business-support-services.png?fit=1000%2C1000&ssl=1" width="450" height="300"  style={{height:"90vh"}} alt='Responsive 2-column layout'/>

     </div>
     <div id='two' >
     <h1 className='home-headings' style={{marginTop:0}}>Why Choose Us?</h1>
     <ul  className='home-ul'>
      <li>
        <span className="li">
        Expert Guidance
        </span>
        
        <p>Our seasoned experts bring a wealth of knowledge to the table, ensuring you have the right information to make informed decisions.</p>
      </li>
      {/* <li>
        <span className="li">
        Tailored Solutions
        </span>
       
        <p>We offer a wide range of best home loan options, each designed to suit different financial situations and goals.</p>
      </li> */}
      <li>
        <span className="li">
        Streamlined Process
        </span>
        
        <p>Our efficient application process ensures you get the answers you need promptly, making your journey hassle-free.</p>
      </li>
      <li>
        <span className="li">
        Transparent Communication
        </span>
        
        <p>We believe in open, honest communication, so you can trust us to keep you informed throughout the process.</p>
      </li>
      <li>
        <span className="li">
        Committed Support
        </span>
        
        <p>Your satisfaction is our priority. Our team is here to support you from the first consultation to the moment you step into your new home.</p>
      </li>
    </ul>
    </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000070" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,197.3C672,192,768,160,864,128C960,96,1056,64,1152,74.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    
    </div>
    <div className='reviews'>
        <h1 className='home-headings'>Recent Google Reviews</h1>
        <figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>
MOST RECOMMENDED..........!!! Right kind of service with these guys. Iam really happy and glad to have contacted ADWITIYA FINANCIAL SERVICES for my HOME  loan.</p>
</blockquote>
    <h3>RK Nivas</h3>
   
  </figcaption>
</figure>
{/* <figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>SBI home loans xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz </p>
    </blockquote>
    <h3>Placeholder</h3>
  </figcaption>
</figure>
<figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>They are transparent and really want to help customers. The guys were friendly and  Diligent follow ups and quick process by the team it's good  to see honest companies like this... </p>
      </blockquote>
      <h3>RK Nivas</h3>
  </figcaption>
</figure>
<figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>SBI home loans xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz </p>
    </blockquote>
    <h3>Placeholder</h3>
  </figcaption>
</figure>
<figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>SBI home loans xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz </p>
    </blockquote>
    <h3>Placeholder</h3>
  </figcaption>
</figure>
<figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>SBI home loans xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz </p>
    </blockquote>
    <h3>Placeholder</h3>
  </figcaption>
</figure> */}
    </div>
    <div className='latest-articles'>
        <h1 className='home-headings'>Latest Articles</h1>
        <div className='main'>
        <ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img  className='services-img' src="https://plus.unsplash.com/premium_photo-1661425407118-e64871d1ab65?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGxvYW58ZW58MHx8MHx8fDA%3D"/></div>
        <div className="card_content">
          <h2 className="card_title">Home Purchase Loans</h2>
          <p>AFS offers loan services in partnership with a reputable Bangalore-based agency.</p>
          <Link  to="/blog"className="btn card_btn">Read More</Link>
        </div>
      </div>
    </li>
    </ul>
    </div>
    </div>
    <h1 className='home-headings'>Enquiry</h1>
      <div className='get-in-touch1' >
      
        <div className='get-in-touch-img1'>
            <img src={contactImage} alt="home"/>
        </div>
        <div className='get-in-touch-form1 form-container' style={{ borderLeft:"5px solid #12c6c9", backgroundColor:"transparent",color:"#78c4c6"}}>
        <div className="form" id='contact-us'>
        <form ref={form1} onSubmit={sendEmail}>
            <span className="heading" style={{fontFamily:"Barlow",color:"#000070"}}>READY TO TAKE THE NEXT STEP?</span>
            <h5 className='get-in-touch-line' style={{fontFamily:"Barlow",color:"#000"}}>Get in touch with our team today for a personalized consultation. Let’s turn your homeownership dreams into reality.</h5>
            <input
              placeholder="Name"
              type="text"
              id="name"
              className="input"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Phone"
              type="text"
              id="phone"
              className="input"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              placeholder="Email address"
              type="email"
              id="email"
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
  );
};

export default Home;
