import { Wrapper, Container, MenuList, MenuLink, MenuLogo } from "./style";

const Header = () => (
  <Wrapper>
    <Container className="container">
      <MenuList>
        <MenuLink to="/">Link</MenuLink>
        <MenuLink to="/">Link</MenuLink>

        <MenuLogo to="/">Project Name</MenuLogo>

        <MenuLink to="/">Link</MenuLink>
        <MenuLink to="/">Link</MenuLink>
      </MenuList>
    </Container>
  </Wrapper>
);

export default Header;
