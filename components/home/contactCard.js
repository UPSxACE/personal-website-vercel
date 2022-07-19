import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import {
  $borderColor,
  $color2,
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
  border: 1px solid ${$borderColor};
  background-color: ${$componentBackground};

  .icon {
    color: ${$color2};
  }

  .icon path {
    stroke: ${$color2};
  }
`;
