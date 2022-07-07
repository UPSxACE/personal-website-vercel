import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import useMeasure from "react-use-measure";
import {
  $color1,
  $margin1,
  $padding1,
  $textColor1,
  $textColor1Alt,
} from "../utils/config";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { TypedSpanDiv } from "../components/text";
import { Main } from "../components/main";
import { Button1, Button2 } from "../components/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { HambuerguerMenuIcon } from "../components/hamburguer";

export default function Home() {
  useEffect(() => {
    const typed = new Typed("#typed", {
      strings: [
        "Hi",
        "I'm <em>EDUARDO BOTELHO</em>",
        "I'm <em>DEVELOPER</em>",
        "I'm <em>EDUARDO BOTELHO</em>",
        "I'm <em>DEVELOPER</em>",
        "I'm <em>EDUARDO BOTELHO</em>",
        "I'm <em>DEVELOPER</em>",
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
    <div>
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
            <Col
              className="phoneNav
             align-items-center"
              xs={12}
            >
              <h4 className="m-0">Eduardo</h4>
              <HambuerguerMenuIcon />
            </Col>
            <ResizableContainerHalfCol
              xs={12}
              lg={6}
              className="g-0 left d-flex justify-content-center align-items-center flex-column"
              style={{ zIndex: 90 }}
            >
              <TypedSpanDiv className="mb-2">
                <span id="typed"></span>
              </TypedSpanDiv>
              <ButtonPairWrapper className="d-flex justify-content-center mt-4 flex-wrap">
                <Button1 className="p-2 ps-3 pe-3">Download CV</Button1>
                <Button2 className="p-2 ps-3 pe-3">Contact Me</Button2>
              </ButtonPairWrapper>
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
                className="d-flex justify-content-center align-items-center flex-column frontpage"
                transition={{ delay: 2, default: { duration: 1.65 } }}
              >
                <Picture variants={overlayDivChildAnimation} />
                <motion.h3
                  className="myName"
                  variants={overlayDivChildAnimation}
                  style={{ marginTop: $margin1 }}
                >
                  Eduardo Botelho
                </motion.h3>
                <motion.ul
                  className="d-flex unstyled noMnoP iconList"
                  variants={overlayDivChildAnimation}
                  style={{ marginBottom: $margin1 }}
                >
                  <motion.li
                    className="clickable1"
                    variants={overlayDivChildAnimation}
                  >
                    <Link href={"/"}>
                      <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                    </Link>
                  </motion.li>
                  <motion.li
                    className="clickable1"
                    variants={overlayDivChildAnimation}
                  >
                    <Link href={"/"}>
                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </Link>
                  </motion.li>
                  <motion.li
                    className="clickable1"
                    variants={overlayDivChildAnimation}
                  >
                    <Link href={"/"}>
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </Link>
                  </motion.li>
                  <motion.li
                    className="clickable1"
                    variants={overlayDivChildAnimation}
                  >
                    <Link href={"/"}>
                      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    </Link>
                  </motion.li>
                </motion.ul>
                <Link href={"/"}>
                  <motion.h4
                    className="menuItem clickable1"
                    variants={overlayDivChildAnimation}
                  >
                    Home
                  </motion.h4>
                </Link>
                <Link href={"/"}>
                  <motion.h4
                    className="menuItem clickable1"
                    variants={overlayDivChildAnimation}
                  >
                    About Me
                  </motion.h4>
                </Link>
                <Link href={"/"}>
                  <motion.h4
                    className="menuItem clickable1"
                    variants={overlayDivChildAnimation}
                  >
                    Projects
                  </motion.h4>
                </Link>
                <Link href={"/"}>
                  <motion.h4
                    className="menuItem clickable1"
                    variants={overlayDivChildAnimation}
                  >
                    Contact Me
                  </motion.h4>
                </Link>
              </OverlayDiv>
            </ResizableContainerHalfCol>
          </Row>
        </MainContainer>
      </Main>
    </div>
  );
}

const ButtonPairWrapper = styled.div`
  button {
    margin: 0.75rem;
  }
`;

const MainContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
`;

const Picture = styled(motion.img)`
  display: inline-block;
  height: 8rem;
  width: 8rem;
  padding: 4rem;
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
        props.dNoneToBlock
          ? "contentCol d-none d-" + props.dNoneToBlock + "-block"
          : "contentCol "
      }
      style={props.style}
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      xxl={props.xxl}
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
    background-color: ${$textColor1};
    z-index: 90;
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

    box-shadow: inset 8px 8px 0px 0px ${$textColor1};
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
    box-shadow: inset -8px 8px 0px 0px ${$textColor1};
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

    box-shadow: inset 8px -8px 0px 0px ${$textColor1};
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

    box-shadow: inset -8px -8px 0px 0px ${$textColor1};
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

  &.frontpage .menuItem {
    margin-bottom: 2px;
  }

  &.frontpage .myName {
    font-weight: 500;
  }
`;

const overlayDivChildAnimation = {
  initial: { opacity: 0 },
  show: { opacity: 1 },
};

const overlayDivParentAnimation = {
  show: { opacity: 1 },
};
