import React from "react";
import styles from "./Teamsection.module.css";
const Teamsection = () => {
  return (
    <div className={styles.team_wrapper} id="team">
      <div className={styles.bgname}> TEAM</div>
      <div className={styles.team_text}>
        The People Who Drive <div>Our Mission</div>{" "}
      </div>

      <div>
        <div></div>
        <div className={styles.team_content}>
          Mission: Acclaiming innovative reverence through technological
          devotion optimistic of designing a realm of creative exploration and
          collaborative innovation along the objective of visionary evolution in
          the pursuit of technological pinnacle, the mission of 'Technocrats'
          traces the picture of a passionate community which stands appreciative
          of versatility in diversity, through an odyssey of hands-on
          experiences and knowledge-sharing to empower tech enthusiasts in
          shaping an ingenious future.
          <div className={styles.team_content_2}>
            Vision: Premeiring as a dedicated precision towards the cultuvation
            of technological innovation in creative enthusiasm of interactive
            leadership among the scholars of the Institute, 'Technocrats'
            envisions a furturistic community with a motivational complexity,
            empowering members past the constraints of the orthodox.
          </div>
        </div>
      </div>
      <button className={styles.teambtn}>View All</button>
    </div>
  );
};

export default Teamsection;
