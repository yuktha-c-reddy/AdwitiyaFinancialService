import React from 'react';
import './Gallery.css'
import gimg1 from '../../img1.jpeg'
import gimg2 from '../../gimg2.jpeg'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="g">
        <a href="" target="_blank" rel="noopener noreferrer">1
          <img
            src={gimg1}
            alt="Image 1"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">2
          <img
            src={gimg2}
            alt="Image 2"
          />
        </a>
        
        {/* <a href="https://unsplash.com/photos/GfAC-LoRqMU" target="_blank" rel="noopener noreferrer">
          <img
            src="https://images.unsplash.com/photo-1553870587-ffe7752a5b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1330&q=80"
            alt="Image 4"
          />
        </a> */}
      </div>
      <article>
        <h1 className='blog-headings '>Step into our world!</h1>
        <p>
        
At Adwitiya Financial Services, we believe in the power of financial freedom. Our gallery reflects our journey, our clients' successes, and the moments that define our commitment to helping individuals and businesses achieve their financial goals.
        </p>
      </article>
    </div>
  );
};

export default Gallery;
