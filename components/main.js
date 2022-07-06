import styled from "styled-components";

export const Main = styled.main`
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

  ul.noMnoP li:not(:first-child) {
    padding-left: 8px;
  }
`;
