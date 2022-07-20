import styled from "styled-components";
import { Flex } from "../styles/Reusable.styled";

export const WorkContainer = styled.div`
  padding-bottom: 120px;
  h2 {
    padding-bottom: 40px;
  }
`;

export const WorkContent = styled.div`
  max-width: 600px;
  margin: auto;
`;

export const FlexContent = styled(Flex)`
  padding: 16px;
  gap: 10;
  section {
    p {
      font-size: 12px;
    }
  }
`;

export const Tools = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 5;
`;

export const Badge = styled.span`
  background-color: indigo;
  padding: 4px 15px;
  border-radius: 30px;
  font-size: 13px;
`;
export const Line = styled.div`
  height: 105px;
  width: 2px;
  background: red;
`;
