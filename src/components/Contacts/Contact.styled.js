import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 65px;
  img {
    position: absolute;
    width: 34px;
    top: -24px;
    left: -10px;
    z-index: -1;
  }
  h1 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
  a {
    color: white;
    &:hover {
      transition: color 0.12s ease-in;
      color: #fd0037;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const Wrapper = styled.div`
  // padding: 25px;
  padding: 10px;
  background-color: #202a3c;
  max-width: 800px;
  width: 100%;
  margin: 40px auto;
  position: relative;
`;
export const Msg = styled.div`
  // padding: 10px 0 30px 0;
  // max-width: 380px;
  // margin: auto;
  // small {
  //   font-style: italic;
  //   font-size: 13px;
  // }
  padding: 10px 0 30px 0;
  text-align: left;
  // width: 80%;
  small {
    // font-style: italic;
    font-size: 13px;
  }
`;
export const ContactDetails = styled.div`
   opacity: 2;
   width: 80%;
  background-color: #0E1625;
  text-align: left;
  border-radius: 5px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3{
    font-size: 13px;
    text-transform: uppercase;
    padding: 0;
  }
  p {
    opacity: 1;
    letter-spacing: 0.5px;
    font-size: 13px;
  }
`;
