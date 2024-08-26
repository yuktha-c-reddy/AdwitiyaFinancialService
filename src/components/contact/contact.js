import React, { useState, useRef } from 'react';
import './contact.css'; // Ensure you have this CSS file for styling
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const form = useRef();

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
        .sendForm('service_q08ii5o', 'template_572ozkr', form.current, {
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
    <div className='contact-div'>
      <div className='contact-page'>
        <h1 className='heading-contact' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <span>"CON </span><span>TACT"</span>
        </h1>
        <div className='contact'>
          <div className="form-container">
            <div className="form">
              <form ref={form} onSubmit={sendEmail}>
                <span className="heading">GET IN TOUCH!</span>
                
                <input
                  placeholder="Name"
                  type="text"
                  className="input"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <input
                  placeholder="Phone"
                  type="text"
                  className="input"
                  value={phone}
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <input
                  placeholder="Email address"
                  type="email"
                  className="input"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <textarea
                  placeholder="Message"
                  rows="10"
                  cols="30"
                  className="textarea"
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

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

        <div className='map'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.485644197293!2d77.59525107449137!3d13.068378687255962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae190023ecfec3%3A0x96a569bf11ef9bc8!2sADWITIYA%20FINANCIAL%20SERVICES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1721391587431!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
