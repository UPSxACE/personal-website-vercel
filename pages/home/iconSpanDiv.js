import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { $color2 } from "../../utils/config";

export function IconSpanDiv(props) {
  return (
    <div className="d-flex mt-1 mb-1">
      <IconWrapper className={props.flip && "flip"}>{props.icon}</IconWrapper>
      <Span>{props.children}</Span>
    </div>
  );
}
const IconWrapper = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: calc(1.3rem + 0.6vw);
    color: ${$color2};
    width: auto;
  }

  &.flip svg {
    transform: scale(-1, 1);
  }
`;
const Span = styled.span`
  line-height: 2em;
`;
