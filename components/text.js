import styled from "styled-components";
import {
  $color1,
  $color2,
  $color4,
  $textColor1,
  $textColor2,
} from "../utils/config";

export const TypedSpanDiv = styled.div`
  color: ${(props) => $textColor2[props.mode]}!important;

  .typed-cursor {
    color: ${(props) => $textColor2[props.mode]}!important;
  }

  span {
    font-size: calc(1rem + 1.5vw);
  }

  @media (max-width: 220px) {
    span {
      font-size: calc(0.8rem + 1.5vw);
    }
  }

  @media (min-width: 576px) {
    span {
      font-size: calc(1.525rem + 3.3vw);
    }
  }

  @media (min-width: 992px) {
    span {
      font-size: calc(1.375rem + 1.5vw);
    }
  }

  @media (min-width: 1200px) {
    span {
      font-size: 3rem;
    }
  }

  em {
    font-style: normal;
    color: ${(props) => $color4[props.mode]};
  }
`;
