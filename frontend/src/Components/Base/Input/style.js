import styled from "styled-components";

export const InputStyle = styled.input`
  appearance: none;
  outline: none;

  padding: 12px;
  width: 100%;

  font-size: 16px;
  line-height: 20px;

  border: 1px solid #a1a1a1;
  border-radius: 3px;

  transition: border-color 0.15s;

  &:focus {
    border-color: #333;
  }
`;
