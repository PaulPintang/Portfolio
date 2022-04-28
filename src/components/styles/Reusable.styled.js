import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 25px;
`;

export const Flex = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 23px;

  li {
    list-style: none;
    a {
      font-weight: bolder;
      font-variant: small-caps;
      letter-spacing: 3px;
      padding-bottom: 5px;
      font-size: 13.5px;
      text-decoration: none;
      color: #a8acb9;
    }
  }
`;

export const Span = styled.span`
  color: #fd0037;
`;
