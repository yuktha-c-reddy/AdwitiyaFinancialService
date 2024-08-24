import React from 'react';
import './Gallery.css'
import gimg1 from '../../img1.jpeg'
import gimg2 from '../../gimg2.jpeg'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="g">
        <a href="" >1
          <img
            src={gimg1}
            alt="Image 1"
          />
        </a>
        <a href="">2
          <img
            src={gimg2}
            alt="Image 2" 
          />
        </a>
        
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
