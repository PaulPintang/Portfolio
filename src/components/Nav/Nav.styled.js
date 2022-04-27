import styled from "styled-components";

export const Header = styled.header`
  background-color: #0e1625;
  color: #dddddd;
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;

  animation: fadeIn linear 0.5s;
  -webkit-animation: fadeIn linear 0.5s;
  -moz-animation: fadeIn linear 0.5s;
  -o-animation: fadeIn linear 0.5s;
  -ms-animation: fadeIn linear 0.5s;

  a {
    font-size: 13.5px;
    font-weight: bolder;
    font-variant: small-caps;
    letter-spacing: 3px;
    padding-bottom: 5px;
  }

  //   for toggle icon
  i {
    font-size: 16px;
  }

  button {
    background: transparent;
    color: white;
    border: 1px solid #ffffff;

    padding: 4px 17px;
    margin: 0;
    width: auto;

    &:hover {
      background-color: white;
      color: black;
      /* font-weight: 500; */
      -webkit-transition: background-color 200ms linear;
      -ms-transition: background-color 200ms linear;
      transition: background-color 200ms linear;
    }
  }
`;

export const Logo = styled.div`
  a {
    font-size: 11px;
    letter-spacing: 3px;
    color: white;
  }
  span {
    color: #fd0037;
  }
`;
