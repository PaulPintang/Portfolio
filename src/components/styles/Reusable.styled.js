import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 25px;
`;

export const Center = styled.div`
  text-align: center;
`;
export const Right = styled.div`
  text-align: right;
`;

export const Flex = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;
export const Column = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 4.2rem;
    font-variant: small-caps;
    font-weight: 200;
    letter-spacing: 4px;
  }
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
export const Bolder = styled(Span)`
  font-weight: 700;
`;

// scroll down animation
export const ScrollContainer = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  margin-top: 4rem;
`;

export const ScrollInner = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%;
`;

export const ScrollDown = styled.div`
  display: block;
  position: relative;
  padding-top: 70px;
  text-align: center;

  &:before {
    -webkit-animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
    -moz-animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
    -o-animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
    animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;

    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 80px;
    background: #b91a2f;
    content: " ";
  }

  a {
    text-decoration: none;
  }
`;

export const ArrowDown = styled.span`
  display: block;
  margin: 0 auto;
  width: 10px;
  height: 27px;
  &:after {
    content: "";
    display: block;
    margin: 0;
    padding: 0;
    width: 8px;
    height: 8px;
    border-top: 2px solid #b91a2f;
    border-right: 2px solid #b91a2f;
    transform: rotate(135deg);
  }
`;

export const ScrollTitle = styled.span`
  display: block;
  text-transform: uppercase;
  color: #b91a2f;
  font-family: Helvetica Neue, Helvetica, Arial;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.1em;
`;
