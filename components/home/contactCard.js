import styled from "styled-components";
import {
  $borderColor,
  $color2,
  $componentBackground,
} from "../../utils/config";

export function ContactCard(props) {
  return (
    <ContactDiv className="d-flex justify-content-center align-items-center h-100 flex-column">
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
