import React from "react";
import "./event.css";
import DomainCard from "../../Components/Domaincard/Domaincard";
import { Link } from "react-router-dom";
import technoverse from "../../Assets/technoverse.jpg";
import sangam from "../../Assets/sangamposter.jpg"

const data = [
  {
    name:"Inauguration",
    img:technoverse,
  },
  {
    name: "Technocrats-Website",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "WEB 3 SANGAM",
    addon: "date here ",
    img: sangam,
  },
  {
    name: "Technoverse",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "Carrer-Guide",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "THE HACKER'S MEETUP",
    addon: "date here ",
    img: technoverse,
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
            style={{ textDecoration: "none" }}
            to={`/hackers/${encodeURIComponent(event.name)}`}
          >
            <DomainCard addon={event.addon} name={event.name} img={event.img} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Event;
