import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";

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

const Arrow = styled.span`
  height: 30px;
  width: 30px;

  &.arrow1 {
    position: absolute;
    border-left: 3px solid black;
    border-top: 3px solid black;
    top: 30px;
    left: 30px;
  }
  &.arrow2 {
    position: absolute;
    border-right: 3px solid black;
    border-top: 3px solid black;
    top: 30px;
    right: 30px;
  }
  &.arrow3 {
    position: absolute;
    border-left: 3px solid black;
    border-bottom: 3px solid black;
    bottom: 30px;
    left: 30px;
  }
  &.arrow4 {
    position: absolute;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
    bottom: 30px;
    right: 30px;
  }
`;

const OverlayDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /*background-color: red;*/
  height: 100%;
  width: 100%;
`;

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
            <Arrow className="arrow1"></Arrow>
            <Arrow className="arrow2"></Arrow>
            <Arrow className="arrow3"></Arrow>
            <Arrow className="arrow4"></Arrow>
            <OverlayDiv className="d-flex justify-content-center align-items-center flex-column">
              <h1>A</h1>
              <h1>B</h1>
              <h1>C</h1>
              <h1>D</h1>
              <h1>E</h1>
            </OverlayDiv>
          </ContainerHalf>
        </MainContainer>
      </main>
    </div>
  );
}
