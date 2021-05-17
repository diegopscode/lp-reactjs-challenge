import styled from "styled-components";

import Button from "../../Base/Button";

export const Wrapper = styled.div``;

export const Title = styled.h1`
  font-size: 18px;
  line-height: 24px;

  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  position: relative;
  font-size: 16px;
  line-height: 20px;

  padding-bottom: 5px;
  margin-bottom: 5px;

  color: #666;

  &:after {
    content: "";
    display: block;

    position: absolute;
    bottom: 0;
    left: -20px;
    right: -20px;

    height: 1px;
    background-color: #ccc;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 18px;

  margin-bottom: 5px;
`;

export const Box = styled.div`
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ShowMoreBtn = styled(Button)`
  width: 100%;
`;
