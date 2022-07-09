import styled from "styled-components";
import { $color2 } from "../../utils/config";

export function Section(props) {
  return (
    <section className="p-5">
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
  background-color: rgba(0, 0, 0, 0.1);
`;
