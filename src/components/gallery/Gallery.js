import React from 'react';
import './Gallery.css'; 
import gimg1 from '../../img1.jpeg'
import gimg2 from '../../gimg2.jpeg'
import gimg3 from '../../gimg3.jpeg'
import gimg4 from '../../gimg4.jpeg'
import gimg5 from '../../gimg5.jpeg'
import gimg6 from '../../gimg6.jpeg'
import gimg7 from '../../img7.jpeg'
import gimg8 from '../../img8.jpeg'
import gimg9 from '../../img9.jpeg'
import gimg10 from '../../img10.jpeg'
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const Gallery = () => {
  return (
    <div className='gallery-page'>
    <div className='blog-content'>
      <h2  style={{textAlign:"center"}}  className='blog-headings'>STEP INTO OUR WORLD!</h2>
      <div >
        <p>
        At Adwitiya Financial Services, we believe in the power of financial freedom. Our gallery reflects our journey, our clients' successes, and the moments that define our commitment to helping individuals and businesses achieve their financial goals.</p>
      </div>
        {/* <div className='gallery-page'>
      <div className="responsive">
        <div className="gallery">
          <a >
            <img src={gimg1} alt="Cinque Terre" width="600" height="400" />
          </a>
          
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a >
            <img src={gimg2} alt="Forest" width="600" height="400" />
          </a>
         
        </div>
      </div>
      </div> */}
      <div class="responsive-container-block teamcard-container">
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container1">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={gimg1} />
        </div>
        
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container1">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={gimg2} />
        </div>
        
      </div>

    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container1">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={gimg6} />
        </div>
        
      </div>

    </div>
    
   
    
  </div>
  <div class="responsive-container-block teamcard-container">
  <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container1">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={gimg3} />
        </div>
        
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container1">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={gimg4} />
        </div>
        
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container1">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={gimg5} />
        </div>
        
      </div>

    </div>
    </div>
    <div class="responsive-container-block teamcard-container">
  <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container1">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={gimg8} />
        </div>
        
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container1">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={gimg7} />
        </div>
        
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container1">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={gimg9} />
        </div>
        
      </div>

    </div>
    </div>
    <div class="responsive-container-block teamcard-container">
  <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container1">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={gimg10} />
        </div>
        
      </div>
    </div>
    {/* <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container1">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={gimg7} />
        </div>
        
      </div>
    </div> */}
    {/* <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container1">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={gimg9} />
        </div>
        
      </div>

    </div> */}
    </div>
    </div>
    </div>
  );
};

export default Gallery;
