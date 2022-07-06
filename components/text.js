import styled from "styled-components";

export const TypedSpanDiv = styled.div`
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
`;
