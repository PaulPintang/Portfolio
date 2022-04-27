import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  h2 {
    font-size: 30px;
  }
  .flex {
    width: 670px;
    margin: auto;
    padding: 45px 0;
    flex-wrap: wrap;
    .lg {
      transition: transform 0.2s ease-in;
      margin-bottom: 12px;
      &:hover {
        transform: translateY(-11px);
        cursor: pointer;
      }
      img {
        width: 40px;
        height: 40px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
