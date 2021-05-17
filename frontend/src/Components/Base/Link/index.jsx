import { LinkStyle } from "./style";

function Link({ children, className, ...props }) {
  return (
    <LinkStyle className={className} {...props}>
      {children}
    </LinkStyle>
  );
}

export default Link;
