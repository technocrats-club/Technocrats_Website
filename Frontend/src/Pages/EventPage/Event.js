import React from "react";
import "./event.css";
import Domaincard from "../../Components/Domaincard/Domaincard";
import { Link } from "react-router-dom";
import technoverse from "../../Assets/technoverse.jpg";

const data = [
  {
    name: "Technocrats- Club Launch",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "WEB 3 SANGAM",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "CLUB Spotlight",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "DevSprint 1.0",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "Website Launch",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "GDSC-ABESEC",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "Nitish Singh (Session)",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "DevBlend",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "THE HACKER'S MEETUP",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "TECHNOVERSE",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "Design Bridge",
    addon: "date here ",
    img: technoverse,
  },
  {
    name: "LATEX Workshop",
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
