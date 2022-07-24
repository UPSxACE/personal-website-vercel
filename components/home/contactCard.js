import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import {
  $borderColor,
  $borderColor2,
  $color2,
  $color7,
  $componentBackground,
} from "../../utils/config";

export function ContactCard(props) {
  const mode = useContext(ThemeContext);

  return (
    <ContactDiv
      mode={mode}
      className="d-flex justify-content-center align-items-center h-100 flex-column"
    >
      {props.children}
    </ContactDiv>
  );
}

const ContactDiv = styled.div`
  min-height: 150px;
  border: 1px solid ${(props) => $borderColor2[props.mode]};
  //background-color: ${(props) => $color7[props.mode]};
  background-color: white;

  .icon {
    color: ${(props) => $color2[props.mode]};
  }

  .icon path {
    stroke: ${(props) => $color2[props.mode]};
  }
`;
