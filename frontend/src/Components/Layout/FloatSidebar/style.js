import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 3px;

  width: 300px;
  margin-top: 20px;
  position: fixed;
  overflow: hidden;

  ${({ top }) => top && ` top: ${top}px;`}
  ${({ bottom }) => bottom && ` bottom: ${bottom}px;`}
  ${({ left }) => left && ` left: ${left}px;`}
  ${({ right }) => right && ` right: ${right}px;`}
`;
