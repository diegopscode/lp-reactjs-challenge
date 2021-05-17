import styled from "styled-components";

export const Wrapper = styled.div``;

export const RowItem = styled.div`
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const RowSection = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
`;

export const PaginateWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: #666;
`;

export const Text = styled.p`
  margin-right: 10px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  padding: 10px 0;
`;

export const SectionItems = styled.div`
  padding: 10px;
`;

export const PaginateAction = styled.div`
  cursor: pointer;
  margin: 3px 5px 0;

  color: #999;

  transition: color 0.15s;

  &:hover {
    color: #333;
  }
`;
