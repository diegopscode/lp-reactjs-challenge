import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: -10px;
`;

export const ImageHold = styled.div`
  position: relative;
  cursor: pointer;

  flex: 50%;
  max-width: 50%;
  padding: 10px;

  img {
    object-fit: cover;
    width: 100%;
    height: 246px;
    vertical-align: middle;
  }

  &:after {
    content: "";
    display: block;

    opacity: 0;
    transition: opacity 0.15s;

    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;
