import React, { useRef, useEffect } from 'react';
import './DialogBox.css'

const DialogBox = () => {
  const bottomRef = useRef(null);

  // const handleYesClick = () => {
   
  //   const scrollPosition = document.body.scrollHeight - window.innerHeight - (window.innerHeight * 0.5);
  //    console.log('Scroll Position:', scrollPosition); 
  // window.scrollTo({
  //     top: scrollPosition,
  //     behavior: 'smooth'
  //   });
  //   document.querySelector('.dialog-box').style.display = 'none';
  //   };
  const handleYesClick = () => {
    const contactUsElement = document.getElementById('contact-us');
    const scrollPosition = contactUsElement.offsetTop;
    if (contactUsElement) {
      contactUsElement.scrollIntoView({
        
        top: scrollPosition,
            behavior: 'smooth',
            block: 'start' // You can also use 'center', 'end', etc., depending on your needs
          });
    }
    //   const scrollPosition = contactUsElement.offsetTop;
    //   console.log('Scroll Position:', scrollPosition); 
    //   // scrollIntoView
    //   // window.scrollTo({
    //   //   top: scrollPosition,
    //   //   behavior: 'smooth',
    //   //   block: 'start'
    //   // });
    //   contactUsElement.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start' // You can also use 'center', 'end', etc., depending on your needs
    //   });
    
    
    document.querySelector('.dialog-box').style.display = 'none';
  };

  const handleNoClick = () => {
    // window.history.back();
    document.querySelector('.dialog-box').style.display = 'none';
  };

  return (
    <div className='dialog-box'>
    <div className="dialog-card">
      <div className="dialog-header">
        <span className="dialog-icon">
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fillRule="evenodd"></path>
          </svg>
        </span>
        <p className="dialog-alert">Nice to see you!</p>
      </div>

      <p className="dialog-message">
        Click on the enquire button and get in touch with our team members to plan a personalized solution for every situation.
      </p>

      <div className="dialog-actions">
        <button className="dialog-read" onClick={handleYesClick}>
          Yes, let's go!
        </button>
        <button className="dialog-mark-as-read" onClick={handleNoClick}>
          No, thanks
        </button>
      </div>
      <div ref={bottomRef} />
    </div>
    </div>
  );
};

export default DialogBox;
