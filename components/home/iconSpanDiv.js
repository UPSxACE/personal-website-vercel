import styled, { ThemeContext } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { $color2 } from "../../utils/config";
import { useContext } from "react";

export function IconSpanDiv(props) {
  const mode = useContext(ThemeContext);

  return (
    <div className="d-flex mt-1 mb-1">
      <IconWrapper mode={mode} className={props.flip && "flip"}>
        {props.icon}
      </IconWrapper>
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
    color: ${(props) => $color2[props.mode]};
    width: auto;
  }

  &.flip svg {
    transform: scale(-1, 1);
  }
`;
const Span = styled.span`
  line-height: 2em;
`;
