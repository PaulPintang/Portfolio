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
`;
