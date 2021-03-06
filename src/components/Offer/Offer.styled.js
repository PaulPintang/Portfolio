import styled from "styled-components";

export const Section = styled.section`
  height: calc(100vh - 130px);
  div {
    padding-bottom: 12px;
  }
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const OfferCards = styled.div`
  width: 300px;
  img {
    width: 100%;
    height: 280px;
  }
`;
