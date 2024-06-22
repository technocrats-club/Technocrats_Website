import React from "react";
import "./event.css";
import Domaincard from "../../Components/Domaincard/Domaincard";
import { Link } from "react-router-dom";
import technoverse from "../../Assets/technoverse.jpg";

const data = [
  {
    name: "Technocrats- Club Launch",
    addon: "",
    img: technoverse,
  },
  {
    name: "WEB 3 SANGAM",
    addon: "",
    img: technoverse,
  },
  {
    name: "CLUB Spotlight- Tech Education",
    addon: "",
    img: technoverse,
  },
  {
    name: "DevSprint 1.0 (React Bootcamp)",
    addon: "",
    img: technoverse,
  },
  {
    name: "Technocrats - Website Launch",
    addon: "",
    img: technoverse,
  },
  {
    name: "GDSC-ABESEC",
    addon: "",
    img: technoverse,
  },
  {
    name: "Speaker Session-Nitish Singh (Online)",
    addon: "",
    img: technoverse,
  },
  {
    name: "DevBlend (AR/VR Bootcamp) ",
    addon: "",
    img: technoverse,
  },
  {
    name: "THE HACKER'S MEETUP",
    addon: "",
    img: technoverse,
  },
  {
    name: "TECHNOVERSE (Speaker session)",
    addon: "",
    img: technoverse,
  },
  {
    name: "Design Bridge (UI/UX Bootcamp)",
    addon: "",
    img: technoverse,
  },
  {
    name: "LATEX Workshop",
    addon: "",
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
