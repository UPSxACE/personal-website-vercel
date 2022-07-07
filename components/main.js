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

  .phoneNav {
    display: none;
    z-index: 96;
    box-shadow: 1px 1px 5px rgb(95 95 95 / 28%);
    background-color: ${$color1};

    @media (max-width: 991px) {
      display: flex;
      height: 60px;
    }

    padding-left: 40px;
    padding-right: 40px;
  }

  .contentCol {
    transition-duration: 0s;
    position: relative;
    height: 100%;

    @media (max-width: 991px) {
      height: calc(100vh - 60px);
    }
  }

  .contentCol.left {
    transition-property: left, height;
    transition-duration: 1s, 0s !important;
    left: 0;
  }

  @media (min-width: 992px) {
    .contentCol.right {
      transition-duration: 1s !important;
      left: 0;
    }

    .contentCol.left.showInfo {
      transition-duration: 1s !important;
      left: -50% !important;
    }

    .contentCol.right.showInfo {
      transition-duration: 1s !important;
      left: -50% !important;
      width: 300px;
    }
  }

  .menu {
    @media (max-width: 991px) {
      position: fixed;
      top: 60px;
      right: -300px;
      z-index: 95;
      display: block !important;
      width: 300px;

      transition-duration: 0.5s;

      .d-none,
      span {
        display: block !important;
        z-index: 95;
      }
    }
  }

  .menuExpand {
    @media (max-width: 991px) {
      position: fixed;
      top: 60px;
      right: 0;
      z-index: 95;
      display: block !important;
      width: 300px;

      .d-none,
      span {
        display: block !important;
        z-index: 95;
      }
    }
  }

  .darkOverlay {
    @media (max-width: 991px) {
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.38);
      z-index: 91;
    }
  }
`;
