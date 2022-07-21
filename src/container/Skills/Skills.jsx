import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";

// import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    { name: "Java Script", icon: images.javascript },
    { name: "React", icon: images.react },
    { name: "Redux JS", icon: images.redux },
    { name: "TypeScript", icon: images.typescript },
    { name: "Node JS", icon: images.node },
    { name: "Express", icon: images.express },
    { name: "PostgreSql", icon: images.postgresql },
    { name: "Git", icon: images.git },
    { name: "HTML", icon: images.html },
    { name: "CSS", icon: images.css },
    { name: "MU5", icon: images.mu5 },
    { name: "sass", icon: images.sass },
  ];
  const experiences = [
    {
      name: "Estudiante",
      company: "Henry",
      desc: "Bootcamp con +800 horas de programación basadas en prácticas y proyectos reales.",
      year: 2022,
    },
    {
      name: "Technical Assistant",
      company: "Henry",
      desc: "Coordinar a un grupo de estudiantes para lograr la integración al equipo de estudio.",
      year: 2022,
    },
    {
      name: "Fullstack Developer",
      company: "Henry",
      desc: "Diseñar y desarrollar una App para la venta de E-Tickets",
      year: 2022,
    },
  ];

  return (
    <>
      <h2 className="head-text">Skills & Experiencias</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={experience.name}
                    key={experience.name}
                  >
                    <h4 className="bold-text">{experience.name}</h4>
                    <p className="p-text">{experience.company}</p>
                    <p className="p-text">{experience.desc}</p>
                  </motion.div>
                </>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");
