import React, { useState } from "react";

import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";
import closeIcon from "../../../assets/nav/closeIcon.png";
import menuIcon from "../../../assets/nav/menuIcon.png";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ResumeLink = "https://docs.google.com/document/d/1X4bP5HTjYxBMXsqH0cpjAHOLEHTTufG0mLOTPI2OwT8/edit?usp=sharing";

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        My Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? {closeIcon}
              : {menuIcon}
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href={ResumeLink}>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
