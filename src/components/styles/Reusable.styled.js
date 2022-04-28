import styled from "styled-components";

export const Container = styled.div`
  max-width: 1055px;
  margin: auto;
  padding: 0 25px;
`;

export const Flex = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  font-size: 10px;
  padding: 6px 17px;
  width: auto;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: gray;

    /* transition */
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
  }
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
      svg {
        margin-top: 6px;
      }
    }
  }
`;

export const Span = styled.span`
  color: #fd0037;
`;
