import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};


// {
//   "title": "Project C",
//   "imageSrc": "projects/project.png",
//   "description": "This is a project made to learn the latest languages by building an app.",
//   "skills": ["React", "Express", "Node"],
//   "demo": "https://www.example.com",
//   "source": "https://www.github.com"
// }