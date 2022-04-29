import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap");

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
.shrink {
  height: 66px;
  transition: all 0.4s ease;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
}
.reveal {
  position: relative;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.8s ease;
}
.reveal.active {
  transform: translateY(0px);
  opacity: 1;
}
/* HOVER STATE */
header .menu a:hover {
  border-bottom: 2px solid #fd0037;
  color: #ffffff;
  font-weight: 900;
}

.btn-control a:first-child button:hover {
  background: #fd0037;
  color: white;

  -webkit-transition: background-color 200ms linear;
  -ms-transition: background-color 200ms linear;
  transition: background-color 200ms linear;
}
/* button:hover {
  background: #fd0037;
  color: white;

  -webkit-transition: background-color 200ms linear;
  -ms-transition: background-color 200ms linear;
  transition: background-color 200ms linear;
} */
.btn-control a:nth-child(2) button:hover {
  background: #dddddd;
  color: rgb(0, 0, 0);

  -webkit-transition: background-color 200ms linear;
  -ms-transition: background-color 200ms linear;
  transition: background-color 200ms linear;
}
/* button:focus {
  outline: none;
}
button:hover {
  cursor: pointer;
} */
body.lock {
  overflow-y: hidden;
}
#wrapper {
  display: table;
  width: 100%;
  height: 100%;
  margin-top: 4rem;
}

#wrapper-inner {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}

#scroll-down {
  display: block;
  position: relative;
  padding-top: 70px;
  text-align: center;
}
.arrow-down {
  display: block;
  margin: 0 auto;
  width: 10px;
  height: 27px;
}
.arrow-down:after {
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
#scroll-title {
  display: block;
  text-transform: uppercase;
  color: #b91a2f;
  font-family: Helvetica Neue, Helvetica, Arial;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.1em;
}
#scroll-down::before {
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
/* for arrow down animation */
@-webkit-keyframes elasticus {
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
@-moz-keyframes elasticus {
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
@-o-keyframes elasticus {
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
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
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
#paschka {
  display: block;
  color: white;
  font-family: helvetica neue, helvetica, arial;
  font-size: 32px;
  text-decoration: none;
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding: 0px;
  transition: all 0.1s ease;
  background: #000;
  height: 40px;
  line-height: 30px;
  /* vertical-align: middle; */
  width: 40px;
  text-align: center;
  border-radius: 5%;
  bottom: 20px;
  right: 20px;

  /* &:hover {
    background: #232323;
    transition: all 0.1s ease;
    color: #f0f0f0;
  } */
}


`;

export default GlobalStyles;
