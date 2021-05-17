import { Wrapper, InputSearch, IconSearch } from "./style";

function SearchBar({ ...props }) {
  return (
    <Wrapper>
      <InputSearch
        placeholder="Enter neighborhood, city, zip code or house type to search"
        {...props}
      />
      <IconSearch />
    </Wrapper>
  );
}

export default SearchBar;
