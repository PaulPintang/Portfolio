import styled from "styled-components";
import { StyledButton } from "../Me/Me.styled";

export const FormContainer = styled.section`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    background-color: #0e1625;
    padding: 15px;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 8px;
  background: none;
  border: 1px solid gray;
  color: #f3f3f3;
  &:focus {
    outline: none;
    border: 1px solid #f4f4f4;
  }
`;
export const TextArea = styled.textarea`
  height: 179px;
  padding: 12px 8px;
  background: none;
  border: 1px solid gray;
  color: #f3f3f3;
  resize: none;
  &:focus {
    outline: none !important;
    border: 1px solid #f4f4f4;
  }
`;

export const SendBtn = styled(StyledButton)`
  width: 135px;
  font-size: 13px;
  font-weight: 600;
  margin: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  font-size: 12px;
  color: #b1b3b8;
  padding: 10px 0;
  div {
    gap: 10px;
  }
`;

export const Note = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  /* transition */
  -webkit-transition: all 200ms linear;
  -ms-transition: all 200ms linear;
  transition: all 200ms linear;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Popover = styled.div`
  width: 200px;
  font-size: 11px;
  background-color: #151c31;
  padding: 12px;
  position: absolute;
  right: -80px;
  bottom: -73px;
  opacity: 0.8;
  -webkit-transition: all 200ms linear;
  -ms-transition: all 200ms linear;
  transition: all 200ms linear;
`;

export const ArrowUp = styled.div`
  width: 0;
  height: 0;
  opacity: 0.8;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #151c31;
  position: absolute;
  right: 12px;
  bottom: 17px;
`;
