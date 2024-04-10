import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hackers.css';
import tech from '../../Assets/technoverse.jpg';

function Hackers() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle screen size changes
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Update state based on screen width
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize(); // Initial check on component mount
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <div className="box flex-wrap overflow-hidden">

      <div className="pic ">
        <img className={`pic1 ${isMobile ? 'w-[100%]' : 'w-[700px] md:w-[800px]'}`} src={tech} alt="Technoverse" />
      </div>


      <div className="flex flex-col justify-center">
        <br />
        <div className="">
          <h1 className="heading">
            TECHNOVERSE
            <span className="head"></span>
          </h1>
          <div className= "flex-wrap" >
            <p>
              Discover the future of technology at "Technoverse: Navigating the Future," hosted by Club Technocrats on April 23rd. Join us for an engaging tech talk featuring prominent speakers. This event promises to be insightful and enlightening for anyone curious about the cutting-edge advancements shaping our world. Don't miss out on this opportunity to explore the Technoverse with us!
              <br />
              <br />
              <h2>
                <b>Mark your Calendars:</b>
              </h2>
              <br />
              <b>Date</b>: April 23rd, 2024
              <br />
              <b>Venue</b>: KIET Auditorium
            </p>
            <div className="btn">
              <Link to="/register">
                <button className="btn-1">Register Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hackers;
