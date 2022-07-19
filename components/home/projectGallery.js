import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { projects } from "../../utils/projects";
import { Col } from "react-bootstrap";
import Image from "next/image";
import { GoPlus } from "react-icons/go";

let movement_transition_duration = 0.3;

export function ProjectGallery() {
  const [filter, setFilter] = useState(null);

  const animation_variants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2, delay: 0 },
    },
  };

  return (
    <>
      <div className="d-flex w-100 z999">
        <ProjectFilterSpan
          className={
            "h4xsfix pe-3 clickable2" + (filter === null ? " active" : "")
          }
          onClick={() => {
            movement_transition_duration = 0.3;
            setFilter(null);
          }}
        >
          All
        </ProjectFilterSpan>
        <ProjectFilterSpan
          className={
            "h4xsfix ps-1 pe-3 clickable2" +
            (filter === "React" ? " active" : "")
          }
          onClick={() => {
            movement_transition_duration = 0.15;
            setFilter("React");
          }}
        >
          React.js
        </ProjectFilterSpan>
        <ProjectFilterSpan
          className={
            "h4xsfix ps-1 pe-3 clickable2" +
            (filter === "Yii2" ? " active" : "")
          }
          onClick={() => {
            movement_transition_duration = 0.15;
            setFilter("Yii2");
          }}
        >
          Yii2
        </ProjectFilterSpan>
        <ProjectFilterSpan
          className={
            "h4xsfix ps-1 pe-3 clickable2" +
            (filter === "Wordpress" ? " active" : "")
          }
          onClick={() => {
            movement_transition_duration = 0.15;
            setFilter("Wordpress");
          }}
        >
          Wordpress
        </ProjectFilterSpan>
        <ProjectFilterSpan
          className={
            "h4xsfix ps-1 pe-3 clickable2" +
            (filter === "Others" ? " active" : "")
          }
          onClick={() => {
            movement_transition_duration = 0.15;
            setFilter("Others");
          }}
        >
          Others
        </ProjectFilterSpan>
      </div>
      <motion.div className="d-flex flex-wrap row g-4">
        <AnimatePresence initial={false} exitBeforeEnter={false}>
          {projects.map((project, index) => {
            if (
              filter === null ||
              undefined !==
                project.typeArray.find((type) => {
                  return filter === type;
                })
            ) {
              return (
                <Col
                  as={motion.div}
                  xs={12}
                  md={6}
                  xxl={4}
                  className="g-4"
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  key={project.title + index}
                  variants={animation_variants}
                  layout
                  transition={{
                    duration: movement_transition_duration,
                    delay: 0,
                  }}
                >
                  <ProjectCard className="d-sm-none">
                    <div className="overlay">
                      <span className="h3 textColor2 text-center pb-1 pb-sm-3">
                        <GoPlus />
                      </span>
                      <span className="h5 fw-400 textColor2 text-center">
                        {project.title}
                      </span>
                      <span className="h5 fw-300 color2Alt text-center">
                        {project.typeString}
                      </span>
                    </div>
                    <Image alt="project preview" src={project.smlPic} />
                  </ProjectCard>
                  <ProjectCard className="d-none d-sm-flex">
                    <div className="overlay">
                      <span className="h3 textColor2 text-center pb-1 pb-sm-3">
                        <GoPlus />
                      </span>
                      <span className="h5 fw-400 textColor2 text-center">
                        {project.title}
                      </span>
                      <span className="h5 fw-300 color2Alt text-center">
                        {project.typeString}
                      </span>
                    </div>
                    <Image alt="project preview" src={project.medPic} />
                  </ProjectCard>
                </Col>
              );
            }
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

const ProjectFilterSpan = styled.span`
  z-index: 999;
`;

const ProjectCard = styled.div`
  display: flex;
  position: relative;
  z-index: 999;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease-in-out;
  }

  &:hover img {
    filter: blur(1px);
    transform: scale(1.05);
  }

  .overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    //transform: scale(0.001);
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.66);
    transition-duration: 0.5s;
    z-index: 91;
  }

  &:hover .overlay {
    opacity: 1;
    //transform: scale(1);
    transition-duration: 0.5s;
  }
`;
