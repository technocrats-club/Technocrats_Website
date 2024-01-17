
import React from 'react';
import './event.css';
import hacker from '../../Assets/hacker2.png';
import Domaincard from '../../Components/Domaincard/Domaincard';
import { Link } from 'react-router-dom';

const data = [
  {
    name: "Hacker's MeetUp",
    addon: "",
    img: hacker,
  },
 
];

const Event = () => {
  return (
    <div className="domain_wrapper">
      <div className="bgname">Events</div>
      <div className="test_text">
      Highlighted Upcoming <div>Milestones </div>{" "}
      </div>
      <div className="domain_container">
        {data.map((event) => (
          <Link
            key={event.name}
            style={{ textDecoration: 'none' }}
            to={`/hackers?name=${encodeURIComponent(event.name)}`}
          >
            <Domaincard
              addon={event.addon}
              name={event.name}
              img={event.img}
              data={event.data}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Event;
