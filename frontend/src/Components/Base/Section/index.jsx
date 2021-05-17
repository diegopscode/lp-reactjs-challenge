import { Wrapper, Title } from "./style";

function Section({ children, className, title }) {
  return (
    <Wrapper className={className}>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
}

export default Section;
