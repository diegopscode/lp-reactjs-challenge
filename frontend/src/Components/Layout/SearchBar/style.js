import styled from "styled-components";

import { FaSearch } from "react-icons/fa";

import Input from "../../Base/Input";

export const Wrapper = styled.div`
  position: relative;
`;

export const InputSearch = styled(Input)`
  padding: 20px;
  font-size: 18px;
  line-height: 24px;

  padding-right: 45px;
`;

export const IconSearch = styled(FaSearch)`
  position: absolute;
  right: 20px;
  top: 24px;

  font-size: 20px;
  color: #ccc;
`;
