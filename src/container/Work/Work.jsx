import React, { useRef } from "react";
import "./Work.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { SiVercel } from "react-icons/si";
import { ImGithub } from "react-icons/im";

const Work = () => {
  const carousel = useRef();
  const projects = [
    {
      title: "Pokemon App",
      url: "https://app-pokedex-pi.vercel.app/",
      imgUrl: images.pokemon,
      urlR: "https://github.com/Elevattd/Pokedex",
      description:
        "Node.js, Express, Sequelize, PostgreSQL, HTML, CSS, Javascript, React, Redux, entre otras..",
    },
    {
      title: "yoVoy!",
      url: "https://yovoy-frontend.herokuapp.com/",
      imgUrl: images.yovoy,
      urlR: "https://github.com/Elevattd/yoVoy-",
      description:
        "Typescript, HTML, CSS, React, Redux, Json Web Token, Material UI.",
    },
    {
      title: "youEconomy",
      url: "https://you-economy-vercel.vercel.app/",
      imgUrl: images.youEconomy,
      urlR: "https://github.com/Elevattd/youEconomy",
      description:
        "React Js, Node Js, Redux Toolkit, Express, Sequelize, Jsonwebtoken, Boostrap. ",
    },
    {
      title: "Netflix Clone",
      url: "",
      imgUrl: images.netflix,
      urlR: "",
      description: "",
    },
  ];

  return (
    <div>
      <h2 className="head-text">
        Proyectos <span>realizados</span>
      </h2>
      <motion.div ref={carousel} className="slider-container">
        <motion.div
          drag="x"
          dragConstraints={{ left: -350, right: 0 }}
          className="slider"
        >
          {projects.map((project, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__work-item"
              key={project.title + index}
            >
              <div className="Card_bg">
                <img
                  src={project.imgUrl}
                  draggable="false"
                  alt={project.title}
                />
                <div className="Card_bg_li">
                  {project.urlR !== "" ? (
                    <a href={project.urlR} target="_blank">
                      <ImGithub size={20} />
                      <p>Repositorio</p>
                    </a>
                  ) : null}

                  {project.url !== "" ? (
                    <a href={project.url} target="_blank">
                      <ImGithub size={20} />
                      <p>Deploy</p>
                    </a>
                  ) : null}
                </div>
              </div>
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {project.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppWrap(MotionWrap(Work, "app__work"), "work", "app__whitebg");
