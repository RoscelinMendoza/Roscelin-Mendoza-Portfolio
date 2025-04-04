import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../../assets/hero/heroimage.jpeg";

export const Hero = () => {

  
  return  (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Roscelin</h1>
        <p className={styles.description} > I'm full stock developer </p>

        <a href="mailto:mendozaroscelin@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

