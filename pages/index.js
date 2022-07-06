import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const ContainerHalf = styled.div`
  height: 100vh;
  width: 50vw;

  &.left {
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
        <MainContainer className="d-flex">
          <ContainerHalf className="left d-flex justify-content-center align-items-center">
            <h1>Eduardo</h1>
          </ContainerHalf>
          <ContainerHalf className="right d-flex justify-content-center align-items-center">
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
          </ContainerHalf>
        </MainContainer>
      </main>
    </div>
  );
}
