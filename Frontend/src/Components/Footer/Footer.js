import React from "react";
import styles from "./Footer.module.css";
import {
  TiLocation,
  TiMail,
  TiPhone,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.foter_blocks_1}>
        <div>HOME</div>
        <div>ABOUT US</div>
        <div>DOMAINS</div>
        <div>TESTIMONIALS</div>
      </div>
      <div className={styles.foter_blocks_2}>
        <div>GALLERY</div>
        <div>ACHIEVEMENTS</div>
        <div>BLOGS</div>
        <div>MEET OUR TEAM</div>
      </div>
      <div className={styles.foter_blocks_3}>
        <div className={styles.iconcont}>
          <TiLocation className={styles.icon} /> KIET GROUP OF
          INSTITIUTIONS
        </div>

        {/* <div className={styles.iconcont}>
          {" "}
          <TiPhone className={styles.icon} />
          +91-7302855302
        </div> */}
        <div className={styles.iconcont}>
          <TiMail className={styles.icon} />
          technocrats@kiet.edu
        </div>
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
