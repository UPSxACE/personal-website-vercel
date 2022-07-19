import { useContext, useEffect, useRef } from "react";
import styled, { ThemeContext } from "styled-components";
import { $textColor1 } from "../utils/config";

export function HamburguerMenuIcon(props) {
  const mode = useContext(ThemeContext);

  return (
    <HamburguerMenuIconDiv
      mode={mode}
      className="d-flex align-items-center ms-auto"
    >
      <input
        onClick={props.onClick}
        id="toggle"
        type="checkbox"
        className="d-none"
        ref={props.checkboxRef}
      ></input>
      <label htmlFor="toggle" className="hamburger">
        <div className="top-bun"></div>
        <div className="meat"></div>
        <div className="bottom-bun"></div>
      </label>
    </HamburguerMenuIconDiv>
  );
}

const HamburguerMenuIconDiv = styled.div`
  .hamburger {
    z-index: 5;
  }

  .hamburger div {
    position: relative;
    width: 2em;
    height: 3px;
    border-radius: 3px;
    background-color: ${(props) => $textColor1[props.mode]};
    margin: 5px;
    transition: all 0.3s ease-in-out;
  }

  #toggle:checked + .hamburger .top-bun {
    margin-top: 13px;
    transform: rotate(-45deg);
  }
  #toggle:checked + .hamburger .bottom-bun {
    transition-duration: 0.1s;
    opacity: 0;
    transform: rotate(45deg);
  }
  #toggle:checked + .hamburger .meat {
    transform: rotate(45deg);

    margin-top: -8px;
  }

  #toggle:checked + .hamburger + .nav {
    top: 0;
    transform: scale(1);
  }
`;
