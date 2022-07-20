import styled, { ThemeContext } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { projects } from "../../utils/projects";
import { Carousel, Col, Modal } from "react-bootstrap";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { $color2 } from "../../utils/config";
import Link from "next/link";

let movement_transition_duration = 0.3;

export function ProjectGallery() {
  const [filter, setFilter] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [projectToShow, setProjectToShow] = useState(0);
  const mode = useContext(ThemeContext);

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
      <ProjectModal
        size="xl"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="project-modal"
      >
        <Modal.Header
          className="ps-3 pe-3 ps-md-4 pe-md-4 ps-xl-5 pe-xl-5"
          closeButton
        >
          <Modal.Title id="project-modal" className="h3force">
            {projects[projectToShow].title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column justify-content-center p-3 p-md-4 p-xl-5 pt-4 pt-md-4 pt-xl-4">
          <PicturesCarousel
            indicators={<div>a</div>}
            mode={mode}
            variant="dark"
          >
            <Carousel.Item interval={5000}>
              <Image
                className="d-block w-100"
                alt="Project main picture"
                src={projects[projectToShow].medPic}
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Image
                className="d-block w-100"
                alt="Project main picture"
                src={projects[projectToShow].medPic}
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Image
                className="d-block w-100"
                alt="Project main picture"
                src={projects[projectToShow].medPic}
              />
            </Carousel.Item>
          </PicturesCarousel>
          <h4 className="pt-3">Project Info:</h4>
          <p className="h5 fw-300 mb-0">{projects[projectToShow].info}</p>
          <h4 className="pt-3">Project Details</h4>
          {projects[projectToShow].status && (
            <>
              <div>
                <span className="h5 textColor1">Status: </span>
                <span className="h5 fw-300">
                  {projects[projectToShow].status}
                </span>
              </div>
              <hr className="mt-2 mb-2" />
            </>
          )}
          {projects[projectToShow].technologies && (
            <>
              <div>
                <span className="h5 textColor1">Technologies: </span>
                <span className="h5 fw-300">
                  {projects[projectToShow].technologies}
                </span>
              </div>
              <hr className="mt-2 mb-2" />
            </>
          )}

          {projects[projectToShow].startdate && (
            <>
              <div>
                <span className="h5 textColor1">Start Date: </span>
                <span className="h5 fw-300">
                  {projects[projectToShow].startdate}
                </span>
              </div>
              <hr className="mt-2 mb-2" />
            </>
          )}

          {projects[projectToShow].finishdate && (
            <>
              <div>
                <span className="h5 textColor1">Finish Date: </span>
                <span className="h5 fw-300">
                  {projects[projectToShow].finishdate}
                </span>
              </div>
              <hr className="mt-2 mb-2" />
            </>
          )}

          {projects[projectToShow].demo && (
            <>
              <div>
                <span className="h5 textColor1">Demo: </span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={projects[projectToShow].demo}
                  className="url"
                >
                  <span className="h5 fw-300">
                    {projects[projectToShow].demo}
                  </span>
                </a>
              </div>
              <hr className="mt-2 mb-2" />
            </>
          )}
        </Modal.Body>
      </ProjectModal>
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
                  <ProjectCard
                    onClick={() => {
                      setProjectToShow(index);
                      setModalShow(true);
                    }}
                    className="d-sm-none"
                  >
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
                  <ProjectCard
                    onClick={() => {
                      setProjectToShow(index);
                      setModalShow(true);
                    }}
                    className="d-none d-sm-flex"
                  >
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
    cursor: pointer;
  }
`;

const ProjectModal = styled(Modal)`
  @media (max-width: 1199px) {
    .modal-xl {
      max-width: 900px !important;
    }
    .modal-dialog {
      margin: 0.75rem auto !important;
    }
  }

  @media (max-width: 911px) {
    .modal-dialog {
      margin: 0.75rem !important;
    }
  }

  @media (min-width: 1199px) {
    .modal-xl {
      max-width: 1058px !important;
      width: max-content;
    }
  }
`;

const PicturesCarousel = styled(Carousel)`
  .carousel-control-prev-icon {
    background-image: url("/prev-arrow-pink.png");
    background-size: contain;
    filter: none;
  }
  .carousel-control-next-icon {
    background-image: url("/next-arrow-pink.png");
    background-size: contain;
    filter: none;
  }

  .carousel-indicators {
    align-items: center;
  }

  .carousel-indicators button {
    height: 15px;
    width: 15px;
    background-color: ${(props) => $color2[props.mode]}!important;
    border-radius: 100%;
    opacity: 0.5;
  }

  .carousel-indicators button.active {
    height: 15px;
    width: 15px;
    background-color: ${(props) => $color2[props.mode]}!important;
    border-radius: 100%;
    opacity: 1;
  }
`;
