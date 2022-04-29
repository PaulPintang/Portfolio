import styled from "styled-components";
import { Flex } from "../styles/Reusable.styled";

export const Section = styled.section`
  padding-bottom: 70px;
  h2 {
    padding-bottom: 40px;
  }
`;

export const ProjectContainer = styled(Flex)``;
export const ProjectInfo = styled.div`
  div.title {
    text-align: right;
    h3 {
      font-size: 25px;
      font-weight: bold;
    }
  }
`;
export const Description = styled.div`
  width: 450px;
  height: auto;
  background-color: #202a3c;
  box-shadow: 0 0px 5px 1px hsl(217deg 27% 15%);
  padding: 15px;
  margin: 15px 0;
`;
export const LinkToProject = styled.div``;
