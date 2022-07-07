import styled from "styled-components";
import { $color1, $color2, $fontFamily1, $textColor1 } from "../utils/config";

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
    height: calc(1.3rem + 0.6vw);
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
    font-weight: 400;
  }

  .clickable1 {
    transition-duration: 0.16s;
  }

  .clickable1:hover {
    cursor: pointer;
    transition-duration: 0.16s;
    transform: scale(1.22);
    color: ${$color2};
  }

  .iconList li {
    min-width: 32px;
    display: flex;
    justify-content: center;
  }
`;
