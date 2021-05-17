import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

import Link from "../../Base/Link";

import Colors from "../../../Styled/Colors";

export const Wrapper = styled.header`
  position: relative;

  background-color: white;
  height: 80px;

  border-bottom: solid 1px gray;
`;

export const Container = styled.div`
  height: 100%;
`;

export const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;

  font-size: 18px;
`;

export const MenuLink = styled(Link).attrs(() => ({
  as: LinkRouter,
}))`
  cursor: pointer;
  padding: 15px 20px;
  background-color: white;
  color: ${Colors.PRIMARY};

  transition: background-color 0.15s;

  &:hover {
    background-color: ${Colors.WHITE};
  }
`;

export const MenuLogo = styled(MenuLink)`
  margin: 0 20px;
`;
