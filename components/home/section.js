import styled from "styled-components";
import { $color2, $color3 } from "../../utils/config";

export function Section(props) {
  return (
    <section className="p-4 p-lg-5 pt-4b">
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
    <section className="p-4 p-lg-5 pt-0">
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
  return (
    <>
      <Square className="mt-3" />
      <Line />
    </>
  );
}

const Square = styled.div`
  width: 55px;
  height: 9px;
  background-color: ${$color2};
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${$color3};
`;
