import styled, { ThemeContext } from "styled-components";
import { Button } from "react-bootstrap";
import { $color1, $color2, $textColor1, $textColor2 } from "../utils/config";
import { useContext } from "react";

const Button1Base = styled.button`
  border-style: solid;
  border-radius: 0;
  background-color: ${(props) => $color2[props.mode]};
  border-width: 2px;
  border-color: ${(props) => $color2[props.mode]};
  color: ${(props) => $textColor2[props.mode]};
  transition-duration: 0.12s;

  &:hover:not(.static) {
     {
      /*background-color: transparent;*/
    }
    border-color: ${(props) => $color2[props.mode]};
    transition-duration: 0.16s;
    transform: scale(1.12);
  }

  &:focus:not(.static) {
    transform: scale(1.12);
    transition-duration: 0.5s;
    box-shadow: 0 0 0 0.2rem rgb(255 76 96 / 50%);
  }
`;

export const Button1 = (props) => {
  const mode = useContext(ThemeContext);

  return (
    <Button1Base
      type={props.type}
      className={props.className}
      style={props.style}
      mode={mode}
    >
      {props.children}
    </Button1Base>
  );
};

const Button2Base = styled(Button1Base)`
  background-color: transparent;
  &:hover:not(.static) {
    transition-duration: 0.16s;
     {
      /*background-color: ${(props) => $color2[props.mode]};*/
    }
  }

  &:focus:not(.static) {
    transition-duration: 0.5s;
  }
`;

export const Button2 = (props) => {
  const mode = useContext(ThemeContext);

  return (
    <Button2Base
      type={props.type}
      className={props.className}
      style={props.style}
      mode={mode}
    >
      {props.children}
    </Button2Base>
  );
};
