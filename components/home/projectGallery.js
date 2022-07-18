import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const options = ["All", "trrr", "brrr"];
const projects = [
  { Name: "AAA", Type: "One" },
  { Name: "BBB", Type: "One" },
  { Name: "CCC", Type: "One" },
  { Name: "DDD", Type: "Two" },
  { Name: "EEE", Type: "Two" },
  { Name: "AAA", Type: "One" },
  { Name: "BBB", Type: "One" },
  { Name: "CCC", Type: "One" },
  { Name: "DDD", Type: "Two" },
  { Name: "EEE", Type: "Two" },
  { Name: "AAA", Type: "One" },
  { Name: "BBB", Type: "One" },
  { Name: "CCC", Type: "One" },
  { Name: "DDD", Type: "Two" },
  { Name: "EEE", Type: "Two" },
];

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
        duration: 0.12,
        delay: 0.18,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.12, delay: 0 },
    },
  };

  return (
    <>
      <div className="d-flex w-100">
        <ProjectFilterSpan
          className="h3"
          onClick={() => {
            setFilter(null);
          }}
        >
          All
        </ProjectFilterSpan>
        <ProjectFilterSpan
          className="h3"
          onClick={() => {
            setFilter("One");
          }}
        >
          One
        </ProjectFilterSpan>
        <ProjectFilterSpan
          className="h3"
          onClick={() => {
            setFilter("Two");
          }}
        >
          Two
        </ProjectFilterSpan>
      </div>
      <motion.div layout className="d-flex flex-wrap">
        <AnimatePresence exitBeforeEnter={false}>
          {projects.map((project, index) => {
            if (filter === null || filter === project.Type) {
              return (
                <motion.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  key={project.Name + index}
                  variants={animation_variants}
                  layout
                  transition={{
                    duration: 0.14,
                    delay: 0,
                  }}
                >
                  <ProjectCard>
                    <span>
                      <strong className="h3">Name:</strong> {project.Name}
                    </span>
                    <span>
                      <strong className="h3">Type:</strong> {project.Type}
                    </span>
                  </ProjectCard>
                </motion.div>
              );
            }
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

const ProjectFilterSpan = styled.span``;

const ProjectCard = styled.div`
  height: 200px;
  width: 200px;
  margin: 20px;
  border: 2px solid black;
`;
