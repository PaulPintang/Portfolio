import { toBeDisabled } from "@testing-library/jest-dom/dist/matchers";
import styled from "styled-components";
import { StyledButton } from "../Me/Me.styled";

export const FormContainer = styled.section`
  width: 100%;
  height: 100%;
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
  opacity: 0.3;
  width: 130px;
  font-size: 13px;
  font-weight: 600;
  margin: 0;
  &:hover {
    pointer-events: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
