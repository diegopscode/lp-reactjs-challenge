import styled from "styled-components";

export const ButtonStyle = styled.div`
  cursor: pointer;
  outline: none;
  appearance: none;

  border: none;
  border-radius: 3px;
  text-align: center;

  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  padding: 10px 15px;

  background-color: #f1f1f1;
  transition: background-color 0.15s;

  &:hover {
    background-color: #e5e5e5;
  }

  &:active {
    background-color: #ccc;
  }
`;
