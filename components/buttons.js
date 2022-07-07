import styled from "styled-components";
import { Button } from "react-bootstrap";
import { $color1, $color2, $textColor1, $textColor2 } from "../utils/config";

const Button1Base = styled.button`
  border-style: solid;
  border-radius: 0;
  background-color: ${$color2};
  border-width: 2px;
  border-color: ${$color2};
  color: ${$textColor2};
  transition-duration: 0.12s;

  &:hover {
     {
      /*background-color: transparent;*/
    }
    border-color: ${$color2};
    transition-duration: 0.16s;
    transform: scale(1.12);
  }

  &:focus {
    transform: scale(1.12);
    transition-duration: 0.5s;
    box-shadow: 0 0 0 0.2rem rgb(255 76 96 / 50%);
  }
`;

export const Button1 = (props) => {
  return (
    <Button1Base className={props.className} style={props.style}>
      {props.children}
    </Button1Base>
  );
};

const Button2Base = styled(Button1Base)`
  background-color: transparent;
  &:hover {
    transition-duration: 0.16s;
     {
      /*background-color: ${$color2};*/
    }
  }

  &:focus {
    transition-duration: 0.5s;
  }
`;

export const Button2 = (props) => {
  return (
    <Button2Base className={props.className} style={props.style}>
      {props.children}
    </Button2Base>
  );
};
