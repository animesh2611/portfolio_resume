import styles from "../../styles/AboutMe.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const AboutMe = () => {
  return (
    <div id="AboutMe" className={styles.container} data-aos="fade-right">
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.para}>
        I am a Final Year student at{" "}
        <span style={{ fontWeight: "bold" }}>
          Indian Institute of Technology, Jodhpur
        </span> currently pursuing my bachelors in Mechanical Engineering.
      </p>
      <p className={styles.para}>
      Welcome to my portfolio! I am a passionate and ambitious mechanical engineering student, fueled by a relentless curiosity and a drive to explore innovative intersections between fields. 
        <br /> Fast forward to today, With a knack for <span style={{ fontWeight: "400" }}>machine learning</span>, <span style={{ fontWeight: "400" }}>Software development</span>, and a flair for<span style={{ fontWeight: "400" }}> UI design</span>,
         I thrive on creative approaches that merge mechanical engineering with the world of coding.
      </p>
    </div>
  );
};

export default AboutMe;
