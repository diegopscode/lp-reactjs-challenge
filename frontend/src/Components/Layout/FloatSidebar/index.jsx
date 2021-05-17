import { Wrapper } from "./style";

function FloatSidebar({ children, top, bottom, left, right }) {
  return (
    <Wrapper top={top} bottom={bottom} left={left} right={right}>
      {children}
    </Wrapper>
  );
}

export default FloatSidebar;
