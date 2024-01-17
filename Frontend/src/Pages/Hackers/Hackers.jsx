import React from 'react';
import { Link } from 'react-router-dom';
import './Hackers.css';
import Pic from './1.png';
import Pic2 from './2.png';
import Pic3 from './31.jpg';

function Hackers() {
  return (
    <div className="box  ">
      <div className="pic">
        <img className="pic3 w-[700px] md:w-[800px]" src={Pic3} alt="foccu" />
      </div>
      <div className="flex flex-col justify-center">
        <img className='pic2' src={Pic2} />
        <div className="">
          <h1 className="heading ">
            KIET
            <span className='head'>CHAPTER</span>
          </h1>
          <h2 className='next'> The Hacker's Meet-up</h2>
          <p className="">
            “The Hackers Meet-up" is a monthly must attend Meet-up which features in the calendars of security researchers, hackers and professionals around the nation. The event aims to bring together primarily security researchers, hackers, business leaders, entrepreneurs but also includes practitioners from academics, industry, government organizations as well as students to elaborate and discuss the IT Security challenges that we are facing today and also about the next generation computer security issues.
          </p>
          <div className="btn">
            <Link to="/register">
              <button className="btn-1">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Hackers;
