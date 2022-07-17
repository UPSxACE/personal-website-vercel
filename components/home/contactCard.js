import styled from "styled-components";
import { $color2 } from "../../utils/config";

export function ContactCard(props) {
  return (
    <ContactDiv className="d-flex justify-content-center align-items-center h-100 flex-column">
      {props.children}
    </ContactDiv>
  );
}

const ContactDiv = styled.div`
  min-height: 150px;

  .icon {
    color: ${$color2};
  }

  .icon path {
    stroke: ${$color2};
  }
`;
