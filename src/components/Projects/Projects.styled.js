import styled from "styled-components";
import { Flex, Links } from "../styles/Reusable.styled";

export const Section = styled.section`
  padding-bottom: 50px;
  h2 {
    padding-bottom: 40px;
  }
`;

export const ProjectContainer = styled(Flex)`
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  width: 500px;
  margin: auto;
  position: relative;
  img {
    transition: transform 0.2s ease-in;
    &:hover {
      cursor: pointer;
      position: relative;
      z-index: 1;
      transform: translateY(-9px);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
export const ProjectInfo = styled.div`
  display: flex;
  align-items: ${({ right, left }) =>
    right ? "flex-end" : left ? "flex-start" : ""};
  flex-direction: column;
  position: relative;
  right: ${({ right, left }) => (right ? "180px" : left ? "-180px" : "")};
  padding: 50px 0;
  h3 {
    font-size: 25px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    align-items: center;
    right: 0;
    padding: 0;
    order: 2;
    display: flex;
  }
`;
export const Description = styled.div`
  width: 450px;
  height: auto;
  background-color: #202a3c;
  box-shadow: 0 0px 5px 1px hsl(217deg 27% 15%);
  padding: 15px;
  margin: 15px 0;

  p {
    opacity: 1;
  }
  a {
    padding-left: 2px;
    font-style: italic;
  }
  @media (max-width: 768px) {
    width: 100%;
    p {
      font-size: 0.97rem;
      text-align: center;
    }
  }
`;
export const LinkToProject = styled(Links)`
  padding-top: 10px;
  justify-content: flex-end;
  gap: 10px;
  svg {
    font-size: 19px;
    &:hover {
      transition: color 0.12s ease-in;
      color: #fd0037;
    }
  }
`;
