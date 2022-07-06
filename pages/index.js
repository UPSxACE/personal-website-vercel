import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import useMeasure from "react-use-measure";

const MainContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
`;

const GreenMotion = styled(motion.div)`
  background-color: green;
  z-index: 99;
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

const ContainerHalfMotion = motion(ContainerHalf);

const Arrow = styled(motion.span)`
  height: 45px;
  width: 45px;

  &.arrow1 {
    position: absolute;
    top: calc(50% + 90px);
    left: calc(50% + 90px);

    box-shadow: inset 8px 8px 0px 0px black;
  }
  &.arrow2 {
    position: absolute;

    top: calc(50% + 90px);
    right: calc(50% + 90px);
    box-shadow: inset -8px 8px 0px 0px black;
  }
  &.arrow3 {
    position: absolute;
    bottom: calc(50% + 90px);
    left: calc(50% + 90px);

    box-shadow: inset 8px -8px 0px 0px black;
  }
  &.arrow4 {
    position: absolute;
    bottom: calc(50% + 90px);
    right: calc(50% + 90px);

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
export default function Home() {
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

      <main className={styles.main}>
        <MainContainer className="g-0" fluid>
          <Row className="g-0 h-100">
            <ResizableContainerHalfCol
              xs={12}
              lg={6}
              className="g-0 left d-flex justify-content-center align-items-center"
              style={{ zIndex: 90 }}
            >
              <h1>Eduardo</h1>
            </ResizableContainerHalfCol>

            <ResizableContainerHalfCol
              lg={6}
              className="d-none g-0 right d-flex justify-content-center align-items-center"
              dNoneToBlock="lg"
            >
              <Arrow
                className="arrow1"
                animate={{ top: 30, left: 30 }}
                transition={{
                  ease: "easeIn",
                  delay: 1,
                  default: { duration: 1.05 },
                }}
              ></Arrow>
              <Arrow
                className="arrow2"
                animate={{ top: 30, right: 30 }}
                transition={{
                  ease: "easeIn",
                  delay: 1,
                  default: { duration: 1.05 },
                }}
              ></Arrow>
              <Arrow
                className="arrow3"
                animate={{ bottom: 30, left: 30 }}
                transition={{
                  ease: "easeIn",
                  delay: 1,
                  default: { duration: 1.05 },
                }}
              ></Arrow>
              <Arrow
                className="arrow4"
                animate={{ bottom: 30, right: 30 }}
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
                <motion.h1 variants={overlayDivChildAnimation}>A</motion.h1>
                <motion.h1 variants={overlayDivChildAnimation}>B</motion.h1>
                <motion.h1 variants={overlayDivChildAnimation}>C</motion.h1>
                <motion.h1 variants={overlayDivChildAnimation}>D</motion.h1>
                <motion.h1 variants={overlayDivChildAnimation}>E</motion.h1>
              </OverlayDiv>
            </ResizableContainerHalfCol>
          </Row>
        </MainContainer>
      </main>
    </div>
  );
}
