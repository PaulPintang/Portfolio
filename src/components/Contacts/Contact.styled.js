import styled from "styled-components";
import { Flex } from "../styles/Reusable.styled";

export const Section = styled.section`
  margin-bottom: 65px;
  img {
    position: absolute;
    width: 34px;
    top: -24px;
    left: -10px;
    z-index: -1;
  }
  h1 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
  a {
    color: white;
    &:hover {
      transition: color 0.12s ease-in;
      color: #fd0037;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 25px;
  background-color: #202a3c;
  max-width: 900px;
  width: 100%;
  margin: auto;
  position: relative;
`;
export const Msg = styled.div`
  padding: 10px 0;
  max-width: 500px;
  margin: auto;
  small {
    font-style: italic;
    font-size: 13px;
  }
`;
export const ContactDetails = styled.div`
  padding: 20px 0;
  p {
    opacity: 1;
    letter-spacing: 0.5px;
    font-size: 13px;
  }
`;

export const FlexCenter = styled(Flex)`
  justify-content: center;
  padding-top: 5px;
`;
