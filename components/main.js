import styled from "styled-components";
import { $color1, $fontFamily1, $textColor1 } from "../utils/config";

export const Main = styled.main`
  font-family: ${$fontFamily1};
  background-color: ${$color1};

  color: ${$textColor1};

  ul.unstyled {
    list-style: none;
  }

  ul.noMnoP {
    padding: 0 0 8px 0;
    margin: 0;
  }

  ul.noMnoP li {
    padding: 0;
    margin: 0;
  }

  ul.noMnoP li {
    padding-left: 4px;
    padding-right: 4px;
  }

  ul.noMnoP li svg {
    opacity: inherit;
    height: calc(1.8rem + 0.6vw);
    width: auto;
  }

  ul.noMnoP li path {
    opacity: inherit;
  }

  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }
`;
