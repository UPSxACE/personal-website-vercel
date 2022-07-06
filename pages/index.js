import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import useMeasure from "react-use-measure";
import { $padding1 } from "../utils/config";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { TypedSpanDiv } from "../components/text";
import { Main } from "../components/main";

export default function Home() {
  useEffect(() => {
    const typed = new Typed("#typed", {
      strings: [
        "Hi",
        "I'm EDUARDO BOTELHO",
        "I'm DEVELOPER",
        "I'm EDUARDO BOTELHO",
        "I'm DEVELOPER",
        "I'm EDUARDO BOTELHO",
        "I'm DEVELOPER",
        "I'm EDUARDO BOTELHO",
        "I'm DEVELOPER",
        "I'm EDUARDO BOTELHO",
        "I'm DEVELOPER",
      ],
      typeSpeed: 35,
      backSpeed: 27,
      backDelay: 2000,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Eduardo Botelho</title>
        <meta
          name="description"
          content="Personal porfolio, created using the awesome technology of Next.js and Vercel"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <MainContainer className="g-0" fluid>
          <Row className="g-0 h-100">
            <ResizableContainerHalfCol
              xs={12}
              lg={6}
              className="g-0 left d-flex justify-content-center align-items-center flex-column"
              style={{ zIndex: 90 }}
            >
              <TypedSpanDiv>
                <span id="typed"></span>
              </TypedSpanDiv>
            </ResizableContainerHalfCol>

            <ResizableContainerHalfCol
              lg={6}
              className="d-none g-0 right d-flex justify-content-center align-items-center"
              dNoneToBlock="lg"
            >
              <Arrow
                className="arrow1"
                animate={{ top: $padding1, left: $padding1 }}
                transition={{
                  ease: "easeIn",
                  delay: 1,
                  default: { duration: 1.05 },
                }}
              ></Arrow>
              <Arrow
                className="arrow2"
                animate={{ top: $padding1, right: $padding1 }}
                transition={{
                  ease: "easeIn",
                  delay: 1,
                  default: { duration: 1.05 },
                }}
              ></Arrow>
              <Arrow
                className="arrow3"
                animate={{ bottom: $padding1, left: $padding1 }}
                transition={{
                  ease: "easeIn",
                  delay: 1,
                  default: { duration: 1.05 },
                }}
              ></Arrow>
              <Arrow
                className="arrow4"
                animate={{ bottom: $padding1, right: $padding1 }}
                transition={{
                  ease: "easeIn",
                  delay: 1,
                  default: { duration: 1.05 },
                }}
              ></Arrow>
              <OverlayDiv
                animate="show"
                initial="initial"
                variants={overlayDivParentAnimation}
                className="d-flex justify-content-center align-items-center flex-column"
                transition={{ delay: 2, default: { duration: 1.65 } }}
              >
                <Picture variants={overlayDivChildAnimation} />
                <motion.h1 variants={overlayDivChildAnimation}>
                  Eduardo Botelho
                </motion.h1>
                <motion.ul
                  className="d-flex unstyled noMnoP"
                  variants={overlayDivChildAnimation}
                >
                  <motion.li className="h3" variants={overlayDivChildAnimation}>
                    i
                  </motion.li>
                  <motion.li className="h3" variants={overlayDivChildAnimation}>
                    i
                  </motion.li>
                  <motion.li className="h3" variants={overlayDivChildAnimation}>
                    i
                  </motion.li>
                </motion.ul>
                <motion.h3 variants={overlayDivChildAnimation}>HOME</motion.h3>
                <motion.h3 variants={overlayDivChildAnimation}>
                  ABOUT ME
                </motion.h3>
                <motion.h3 variants={overlayDivChildAnimation}>
                  PROJECTS
                </motion.h3>
                <motion.h3 variants={overlayDivChildAnimation}>
                  CONTACT ME
                </motion.h3>
              </OverlayDiv>
            </ResizableContainerHalfCol>
          </Row>
        </MainContainer>
      </Main>
    </div>
  );
}

const MainContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
`;

const Picture = styled(motion.img)`
  display: inline-block;
  height: 9rem;
  width: 9rem;
  padding: 4.5rem;
   {
    /* make it a perfect circle */
  }
  background-color: black;
  border-radius: 100%;
`;

function ResizableContainerHalfCol(props) {
  let [ref, { width }] = useMeasure();

  return (
    <Col
      className={
        props.dNoneToBlock ? "d-none d-" + props.dNoneToBlock + "-block" : ""
      }
      style={props.style}
      xs={props.xs}
      lg={props.lg}
      xl={props.xl}
      ref={ref}
    >
      <motion.div
        className="h-100"
        animate={{ width }}
        transition={{ type: "tween" }}
      >
        <ContainerHalf
          className={
            props.className + " h-100" + " d-" + props.dNoneToBlock + "-block"
          }
        >
          {props.children}
        </ContainerHalf>
      </motion.div>
    </Col>
  );
}

const ContainerHalf = styled.div`
  &.left {
    z-index: 90;
    background-color: grey;
  }

  &.right {
    position: relative;
  }
`;

const Arrow = styled(motion.span)`
  height: 45px;
  width: 45px;

  &.arrow1 {
    position: absolute;
    top: calc(50% + 90px);
     {
      /* maybe should be configurable later */
    }
    left: calc(50% + 90px);
     {
      /* maybe should be configurable later */
    }

    box-shadow: inset 8px 8px 0px 0px black;
  }
  &.arrow2 {
    position: absolute;

    top: calc(50% + 90px);
     {
      /* maybe should be configurable later */
    }
    right: calc(50% + 90px);
     {
      /* maybe should be configurable later */
    }
    box-shadow: inset -8px 8px 0px 0px black;
  }
  &.arrow3 {
    position: absolute;
    bottom: calc(50% + 90px);
     {
      /* maybe should be configurable later */
    }
    left: calc(50% + 90px);
     {
      /* maybe should be configurable later */
    }

    box-shadow: inset 8px -8px 0px 0px black;
  }
  &.arrow4 {
    position: absolute;
    bottom: calc(50% + 90px);
     {
      /* maybe should be configurable later */
    }
    right: calc(50% + 90px);
     {
      /* maybe should be configurable later */
    }

    box-shadow: inset -8px -8px 0px 0px black;
  }
`;

const OverlayDiv = styled(motion.div)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  /*background-color: red;*/
  height: 100%;
  width: 100%;

  * {
    opacity: 0;
  }
`;

const overlayDivChildAnimation = {
  initial: { opacity: 0 },
  show: { opacity: 1 },
};

const overlayDivParentAnimation = {
  show: { opacity: 1 },
};
