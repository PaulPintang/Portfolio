import styled from "styled-components";

export const Section = styled.section`
  height: calc(100vh - 130px);
  div {
    text-align: center;
    padding: 12px 0;
  }
`;

export const OfferCards = styled.div`
  width: 300px;
  img {
    width: 100%;
    height: 280px;
  }
  .o-info {
    text-align: center;
    h3 {
      font-weight: 400;
      opacity: 0.9;
      font-size: 1.2rem;
    }
  }
`;
