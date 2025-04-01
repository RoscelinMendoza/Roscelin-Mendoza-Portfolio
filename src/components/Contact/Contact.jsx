import React from "react";

import styles from "./Contact.module.css";
import emailicon from "../../../assets/contact/emailIcon.png";
import githubicon from "../../../assets/contact/githubIcon.png";
import linkedinicon from "../../../assets/contact/linkedinIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailicon} alt="Email icon" />
          <a href="mailto:myemail@email.com">mendozaroscelin@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinicon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/roscelin-mendoza/">linkedin.com/roscelin-mendoza</a>
        </li>
        <li className={styles.link}>
          <img src={githubicon} alt="Github icon" />
          <a href="https://github.com/RoscelinMendoza">github.com/RoscelinMendoza</a>
        </li>
      </ul>
    </footer>
  );
};
