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

  display: flex;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const Price = styled.div`
  font-size: 16px;
  line-height: 24px;

  text-align: center;
`;

export const ImageHolder = styled.div`
  margin-bottom: 10px;

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
`;

export const HeadContent = styled.div`
  width: 400px;
  height: 100%;
  padding-right: 20px;
`;

export const BodyContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const InfoItem = styled.div``;

export const InfoDetail = styled.div`
  padding-right: 20px;

  ${InfoItem} {
    margin-bottom: 10px;
  }
`;

export const ImageGrid = styled.div`
  width: 200px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  column-gap: 10px;
  row-gap: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
`;

export const AvailableLabel = styled.div`
  display: inline-block;
  margin-left: 10px;

  width: 12px;
  height: 12px;

  border-radius: 50%;
  background-color: red;

  ${({ active }) =>
    active &&
    `
    background-color: green;
  `}
`;
