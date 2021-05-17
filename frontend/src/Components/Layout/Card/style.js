import styled from "styled-components";

import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  padding: 10px;
  width: 100%;

  display: block;
  color: #333;

  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const Text = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

export const ImageHolder = styled.div`
  margin-bottom: 10px;

  height: 100px;

  img {
    height: 100%;
    object-fit: cover;
  }
`;
