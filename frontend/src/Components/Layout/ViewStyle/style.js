import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Option = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 0 3px 3px 0;

  min-width: 75px;
  text-align: center;

  &:hover {
    background-color: #e5e5e5;
  }

  &:first-child {
    margin-right: -1px;
    border-radius: 3px 0 0 3px;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #e5e5e5;
  `}
`;
