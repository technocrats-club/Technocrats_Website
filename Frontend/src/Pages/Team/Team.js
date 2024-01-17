import React from "react";
import styles from "./Team.module.css";
import Teamcard from "../../Components/TeamCard/Teamcard";
import teamsample from '../../Assets/team/team.JPG'
import aryan from '../../Assets/team/aryan.png'
import Prashant from '../../Assets/team/prashant.png'
import kushagra from '../../Assets/team/kushagra.png'
import raj from '../../Assets/team/raj.png'
import garvit from '../../Assets/team/garvit.png'
import veer from '../../Assets/team/narwar.png'
import raunak from '../../Assets/team/raunak.png'
import utlarsh from '../../Assets/team/utkarsh.png'
import sanskriti from '../../Assets/team/vats.png'
import Jhalak from '../../Assets/team/jhalak.png'
import tushar from '../../Assets/team/tushar.png'

const data = [
  {
    name: "Prashant Rai",
    role: "Co-Founder",
    img: Prashant
  },
  {
    name: "Kushagra Srivastava",
    role: "Co-Founder",
    img: kushagra
  },
  
  {
    name: "Harveer Narwar",
    role: "President",
    img: veer
  },
  {
    name: "Raj Pandey",
    role: "Community Manager",
    img: raj
  },

  {
    name: "Sanskriti Vats",
    role: "General Secretary",
    img:sanskriti 
  },
  
  {
    name: "Aryan Tiwari",
    role: "Web Lead",
    img: aryan
  },
  {
    name: "Garvit Agarwal",
    role: "ML Lead",
    img:garvit
  },
  {
    name: "Raunak Seth",
    role: "Android Lead",
    img: raunak
  },
  {
    name: "Utkarsh Shukla",
    role: "AR/VR Lead",
    img:utlarsh
  },
  {
    name: "Jhalak Saxena",
    role: "Content Lead",
    img:Jhalak
  },
  {
    name: "Tushar Singh",
    role: "UI/UX Lead",
    img:tushar
  },
];

const Team = () => {
  return (
    <div className={styles.testimonial_wrapper}>
      <div className={styles.bgname}> TEAM</div>
      <div className={styles.test_text}>
        The People who Drive <div>our Mission </div>{" "}
      </div>
      <div className={styles.mainimgdiv}><img className={styles.team_img} src={teamsample} alt="illust"/></div>
      <div className={styles.team_container}>
{data.map((e)=><Teamcard key={e.name} name={e.name} img={e.img} role={e.role}/>)}
      </div>
    </div>
  );
};

export default Team;
