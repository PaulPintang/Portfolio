import styled from "styled-components";

export const ProjectStyled = styled.div`
  h2 {
    text-align: center;
    padding-bottom: 40px;
  }
  h3 {
    font-size: 25px;
  }
  h4 {
    display: flex;
    justify-items: flex-end;
  }
  small {
    display: block;
  }
  .img-flex {
    display: flex;
    justify-content: center;
    width: 900px;
    margin: auto;
    position: relative;

    img {
      transition: transform 0.2s ease-in;
      &:hover {
        cursor: pointer;
        position: relative;
        z-index: 1;
        transform: translateY(-9px);
      }
    }

    img-info {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      position: relative;
      right: 180px;
      padding: 50px 0;
      height: 200px;

      .flex {
        gap: 10px;
        padding: 8px 0;
      }
      small {
        display: block;
        font-size: 13px;
      }
    }
    .img-info-2 {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
      left: 180px;
      padding: 50px 0;
      height: 200px;

      .flex {
        gap: 10px;
        padding: 8px 0;
      }
      .opt {
        margin-left: 14px;
        a {
          margin-left: -14px;
          font-size: 18px;
          &:hover {
            cursor: pointer;
            color: #fd0037;
          }
        }
      }
    }
  }
  
  }
  .img-desc {
    width: 450px;
    height: auto;
    background-color: #202a3c;
    box-shadow: 0 0px 5px 1px hsl(217deg 27% 15%);
    padding: 15px;
    margin: 15px 0;
    a {
      font-size: 10px;
      font-variant: normal;
      color: unset;
      font-size: unset;
      font-weight: unset;
      font-variant: unset;
      letter-spacing: unset;
      padding-bottom: unset;
      font-style: italic;
      color: #fd0037;
      border-bottom: 0.1px solid #fd0037;
      padding-bottom: 1px;
      margin-left: 5px;
    }
    p {
      opacity: 1;
    }
`;

export const Section = styled.section`
  padding-bottom: 70px;
`;
