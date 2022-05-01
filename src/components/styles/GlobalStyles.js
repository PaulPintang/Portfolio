import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  background-color: #0e1625;
  color: #dddddd;
}
h2 {
  text-align: center;
  font-size: 30px;
  font-weight: 400;
}
h3 {
  font-weight: 400;
  opacity: 0.9;
  font-size: 1.2rem;
}
p {
  opacity: 0.5;
}
a{
  text-decoration: none;
}
/* custom scrollbar */
#scrollbar::-webkit-scrollbar {
  width: 6px;
}
#scrollbar::-webkit-scrollbar-thumb {
  background-color: #2a3448;
  border-radius: 10px;
}
/* for arrow down animation */
@keyframes elasticus {
  0% {
    -webkit-transform-origin: 0% 0%;
    -ms-transform-origin: 0% 0%;
    -moz-transform-origin: 0% 0%;
    -o-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    -webkit-transform: scale(1, 0);
    -ms-transform: scale(1, 0);
    -moz-transform: scale(1, 0);
    -o-transform: scale(1, 0);
    transform: scale(1, 0);
  }
  50% {
    -webkit-transform-origin: 0% 0%;
    -ms-transform-origin: 0% 0%;
    -moz-transform-origin: 0% 0%;
    -o-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  50.1% {
    -webkit-transform-origin: 0% 100%;
    -ms-transform-origin: 0% 100%;
    -moz-transform-origin: 0% 100%;
    -o-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  100% {
    -webkit-transform-origin: 0% 100%;
    -ms-transform-origin: 0% 100%;
    -moz-transform-origin: 0% 100%;
    -o-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    -webkit-transform: scale(1, 0);
    -ms-transform: scale(1, 0);
    -moz-transform: scale(1, 0);
    -o-transform: scale(1, 0);
    transform: scale(1, 0);
  }
}
`;

export default GlobalStyles;
