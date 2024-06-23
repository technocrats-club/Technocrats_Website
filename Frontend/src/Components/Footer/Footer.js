import React from "react";
import styles from "./Footer.module.css";
import {
  TiLocation,
  TiMail,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.foter_blocks_1}>
        <a href="/">
          <div>HOME</div>{" "}
        </a>
        <a href="/about">
          <div>ABOUT US</div>
        </a>
        <a href="#domains_here">
          <div>DOMAINS</div>
        </a>
      </div>
      <div className={styles.foter_blocks_2}>
        <a href="#gallery_here">
          <div>GALLERY</div>
        </a>
        <div>ACHIEVEMENTS</div>

        <a href="/team">
          <div>MEET OUR TEAM</div>
        </a>
      </div>
      <div className={styles.foter_blocks_3}>
        <a href="https://maps.app.goo.gl/NTZJvrnw9kVrYDpk7" target="_blank">
          <div className={styles.iconcont}>
            <TiLocation className={styles.icon} /> KIET GROUP OF INSTITIUTIONS
          </div>
        </a>

        {/* <div className={styles.iconcont}>
          {" "}
          <TiPhone className={styles.icon} />
          +91-7302855302
        </div> */}
        <a href="mailto:technocrats@kiet.edu">
          <div className={styles.iconcont}>
            <TiMail className={styles.icon} />
            technocrats@kiet.edu
          </div>
        </a>
        <div>
          <div className={styles.social_handles}>
            <a href="https://www.linkedin.com/company/technocrats-kiet/">
              <TiSocialLinkedin
                className={styles.icon}
                style={{ backgroundColor: "white" }}
              />
            </a>
            <a href="https://x.com/Technocrats_?t=lzevmiGsTKuZHYumdZkKIA&s=08  ">
              <TiSocialTwitter
                className={styles.icon}
                style={{ backgroundColor: "white" }}
              />
            </a>
            <a href="https://www.instagram.com/technocrats.kiet/">
              <TiSocialInstagram
                className={styles.icon}
                style={{ backgroundColor: "white" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
