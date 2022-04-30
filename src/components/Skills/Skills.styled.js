import styled from "styled-components";
import { Flex } from "../styles/Reusable.styled";

export const Section = styled.section`
  padding: 70px 0;
  h2 {
    padding-bottom: 45px;
  }
`;

export const FlexContainer = styled(Flex)`
  width: 670px;
  margin: auto;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: unset;
    width: 100%;
    gap: 0;
    row-gap: 5px;
  }
`;

export const ImgContainer = styled.div`
  transition: transform 0.2s ease-in;
  margin-bottom: 12px;
  &:hover {
    transform: translateY(-11px);
    cursor: pointer;
  }
  img {
    width: 40px;
    height: 40px;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    width: 110px;
  }
`;
