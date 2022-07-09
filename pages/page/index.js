import styles from "../../styles/Home.module.css";
import styled from "styled-components";
import { PageTransition } from "@steveeeie/react-page-transition";
import { useState } from "react";
import { Section } from "../../components/home/section";
import { ProfilePicture } from "../../components/home/profilePicture";

export default function Page() {
  const [contador, setContador] = useState(0);

  function contar() {
    console.log("teste");
    setContador(contador + 1);
  }

  return (
    <div>
      this is a page
      <Square>
        <PageTransition preset={"foldTopFromBottom"} transitionKey={contador}>
          {contador % 2 === 0 ? (
            <Section title="About Me"></Section>
          ) : (
            <Square2 onClick={contar}>BBB</Square2>
          )}
        </PageTransition>
      </Square>
    </div>
  );
}

const Square = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  overflow: hidden;
  padding: 50px;
  background-color: grey;
  height: 800px;
  width: 800px;
`;

const Square2 = styled.div`
  background-color: azure;
  height: 700px;
  width: 700px;
`;
