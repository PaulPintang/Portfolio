import styled from "styled-components";

export const Section = styled.section`
  #services {
    margin-bottom: 90px;
  }
  .offer-tag {
    padding: 3px 0px 20px 0;
    text-align: center;
  }
  .flex {
    flex-wrap: wrap;
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
