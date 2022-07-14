import styled from "styled-components";
import {
  $borderColor,
  $color1,
  $color2,
  $fontFamily1,
  $textColor1,
  $textColor2,
  $textColor3,
} from "../utils/config";

export const Main = styled.main`
  font-family: ${$fontFamily1};
  background-color: ${$color1};

  color: ${$textColor1};

  @media (min-width: 992px) {
    .pt-4b {
      padding-top: 2rem !important;
    }
    .pb-4b {
      padding-bottom: 2rem !important;
    }
    .ps-4b {
      padding-left: 2rem !important;
    }
    .pe-4b {
      padding-right: 2rem !important;
    }

    .p-4b {
      padding: 2rem !important;
    }
    .mt-4b {
      margin-top: 2rem !important;
    }
    .mb-4b {
      margin-bottom: 2rem !important;
    }
    .ms-4b {
      margin-left: 2rem !important;
    }
    .me-4b {
      margin-right: 2rem !important;
    }

    .m-4b {
      margin: 2rem !important;
    }
  }

  span,
  p {
    color: ${$textColor3};
  }

  .color1 {
    color: ${$color1};
  }
  .color2 {
    color: ${$color2};
  }

  .textColor1 {
    color: ${$textColor1};
  }

  .textColor2 {
    color: ${$textColor2};
  }

  .zero {
    height: 0 !important;
    width: 0 !important;
  }

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
  h1,
  h2 {
    font-weight: 500;
  }

  .h3,
  .h4,
  .h5,
  .h6,
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

    padding-left: 24px;
    padding-right: 24px;
  }

  .right {
    z-index: 95 !important;
  }

  .contentCol {
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

  .contentCol.left.showInfo {
    transition-duration: 1s !important;
    left: -100% !important;
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
      transition-property: left, width;
      transition-duration: 1s, 1s !important;
      left: -50% !important;
      width: 300px;
    }

    .contentCol .right {
      border-right: solid 1px ${$borderColor};
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

  .contentCol.extra {
    transition-property: left, height;
    transition-duration: 1s, 0s;
    left: 100%;
    width: calc(100% - 300px);
     {
      /* careful with this one (width) */
    }
  }

  .contentCol.extra.showInfo {
    left: 0px !important;
    width: calc(100% - 300px);
    transition-property: left, height, width;
    transition-duration: 1s, 0s, 0s !important;
  }

  @media (min-width: 992px) {
    .contentCol.extra.showInfo {
      left: 300px !important;
      transition-property: left, height;
      transition-duration: 1s, 0s !important;
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

  .fw-300 {
    font-weight: 300 !important;
  }

  .fw-400 {
    font-weight: 400 !important;
  }

  .fw-500 {
    font-weight: 500 !important;
  }

  .fw-600 {
    font-weight: 600 !important;
  }

  .fw-700 {
    font-weight: 700 !important;
  }
`;
