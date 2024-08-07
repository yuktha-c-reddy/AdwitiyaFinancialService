import React, { useState } from 'react';
import './landing.scss';
import { Link } from 'react-router-dom';

const House = () => {
  const [rooms, setRooms] = useState(6);

  const handleRoomChange = (event) => {
    setRooms(parseInt(event.target.value, 10));
  };

  return (
    <div className='house-cont' style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
    <h1 className='home-headings' style={{marginBottom:"0vh",marginTop:"5vh",fontSize:"9vh"}}>Welcome to AFS</h1>
    <h1 className='home-headings' style={{color:"#79AAFF", marginTop:"1vh",marginBottom:"10vh",fontSize:"5vh",fontFamily:"monospace"}}>Unique Service Provider</h1>
   
    <div className="house" data-rooms={rooms}>
      <div className="house-wings" data-flip-key="wings">
        <div className="house-left-wing">
          <div className="house-window"></div>
          <div className="house-window"></div>
          <div className="house-sparkle">
            <div className="house-sparkle-dots"></div>
          </div>
        </div>
        <div className="house-right-wing">
          <div className="house-window"></div>
          <div className="house-window"></div>
          <div className="house-sparkle">
            <div className="house-sparkle-dots"></div>
          </div>
        </div>
        <div className="house-roof">
          <div className="house-ledge"></div>
        </div>
      </div>
      <div className="house-front" data-flip-key="front">
        <div className="house-chimney"></div>
        <div className="house-facade"></div>
        <div className="house-window">
          <div className="house-sparkle">
            <div className="house-sparkle-dots"></div>
          </div>
        </div>
        <div className="house-doorway">
          <div className="house-stairs"></div>
          <div className="house-door"></div>
        </div>
        <div className="house-gable">
          <div className="house-roof">
            <div className="house-ledge"></div>
          </div>
        </div>
      </div>
      <label className="house-label" htmlFor="range"  style={{marginTop:"35vh"}}>Rooms</label><br/>
      <input style={{width:"30vh"}}
        type="range"
        min="3"
        max="6"
        step="1"
        value={rooms}
        id="range"
        onChange={handleRoomChange}
      />
    </div>
    <div style={{marginTop:"22vh"}}></div>
    <Link to="/home">
    <button class="house-button"  style={{marginBottom:"5vh",  display:"flex",alignItems:"center",justifyContent:"center"}}>Explore AFS</button>
    </Link>
    </div>
  );
};

export default House;
