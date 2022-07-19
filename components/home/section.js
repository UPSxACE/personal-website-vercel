import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { $color2, $color3 } from "../../utils/config";

export function Section(props) {
  return (
    <section
      className={
        "p-4 p-lg-5 pt-lg-4" +
        (props.dh100 ? " d-flex flex-column mh100" : "") +
        (props.className ? " " + props.className : "")
      }
    >
      {props.title && (
        <>
          <h1>{props.title}</h1>
          <LineDiv></LineDiv>
        </>
      )}
      {props.children}
    </section>
  );
}

export function OtherSection(props) {
  return (
    <section className="p-4 p-lg-5 pt-lg-0 pt-0">
      {props.title && (
        <>
          <h1>{props.title}</h1>
          <LineDiv></LineDiv>
        </>
      )}
      {props.children}
    </section>
  );
}

export function SubSection(props) {
  return (
    <>
      {props.title && (
        <>
          <h2 className="">{props.title}</h2>
        </>
      )}
      {props.children}
    </>
  );
}

function LineDiv() {
  const mode = useContext(ThemeContext);

  return (
    <>
      <Square mode={mode} className="mt-3" />
      <Line mode={mode} />
    </>
  );
}

const Square = styled.div`
  width: 55px;
  height: 9px;
  background-color: ${(props) => $color2[props.mode]};
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => $color3[props.mode]};
`;
