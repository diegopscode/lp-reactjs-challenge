import SearchBar from "../../Layout/SearchBar";

import { Wrapper, Title } from "./style";

function SearchProducts({ ...props }) {
  return (
    <Wrapper>
      <Title>Look for your new home sweet home</Title>
      <SearchBar {...props} />
    </Wrapper>
  );
}

export default SearchProducts;
