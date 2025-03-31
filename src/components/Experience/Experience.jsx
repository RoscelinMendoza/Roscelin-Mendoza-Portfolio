

import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
// import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};


























// export const Experience = () => {

  
//   return (
//     <section className={styles.container} id="experience">
//       <h2 className={styles.title}>Experience & Technical Training </h2>
//       <div className={styles.content}>
//         <div className={styles.skills}>
//           <div className={styles.skills}>
//             <div className={styles.skill}>
//                <div className={styles.skillImageContainer}>
//                  <img src={"/assets/skills/html.png"} alt= "HTML icon" />
//                   </div>
//                     <p>HTML</p>
//              </div>
//           </div>
          
//           <div className={styles.skills}>
//             <div className={styles.skill}>
//                <div className={styles.skillImageContainer}>
//                  <img src={"/assets/skills/css.png"} alt= "CSS icon" />
//                   </div>
//                     <p>CSS</p>
//              </div>
//           </div>
          
//           <div className={styles.skills}>
//             <div className={styles.skill}>
//                <div className={styles.skillImageContainer}>
//                  <img src={"/assets/skills/react.png"} alt= "React icon" />
//                   </div>
//                     <p>React</p>
//              </div>
//           </div>
          
//           <div className={styles.skills}>
//             <div className={styles.skill}>
//                <div className={styles.skillImageContainer}>
//                  <img src={"/assets/skills/node.png"} alt= "Node icon" />
//                   </div>
//                     <p>Node</p>
//              </div>
//           </div>
          
//           <div className={styles.skills}>
//             <div className={styles.skill}>
//                <div className={styles.skillImageContainer}>
//                  <img src={"/assets/skills/javascript.png"} alt= "JavaScript icon" />
//                   </div>
//                     <p>JavaScript</p>
//              </div>
//           </div>
//           <div className={styles.skills}>
//             <div className={styles.skill}>
//                <div className={styles.skillImageContainer}>
//                  <img src={"/assets/skills/mongodb.png"} alt= "MongoDB icon" />
//                   </div>
//                     <p>MongoDB</p>
//              </div>
//           </div>
          
//           <div className={styles.skills}>
//             <div className={styles.skill}>
//                <div className={styles.skillImageContainer}>
//                  <img src={"/assets/skills/figma.png"} alt= "Figma icon" />
//                   </div>
//                     <p>Figma</p>
//              </div>
//           </div>
//         </div>
//        <section className={styles.history}>
//            <div  className={styles.historyItem}>
//              <div className={styles.historyItemDetails}>
//                <h3>Trainee, NPower</h3>
//                <p> September,2024 - April, 2025</p>
//                <p>Completed an intensive 24-week Full Stack Developer training program, gaining hands-on experience in both front-end and back-end development technologies</p>
//              </div>
//            </div>
//        </section>
//       </div>
//     </section>
//   );
// };
