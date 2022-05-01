import styled from "styled-components";

export const FooterDiv = styled.div`
  padding: 30px 0;
  color: #b1b3b8;
  font-weight: 400;
  font-size: 14px;
  hr {
    width: 30%;
    margin: auto;
    border: none;
    border-top: 1px solid #1d283c;
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    small {
      font-size: 12px;
    }
  }
`;
