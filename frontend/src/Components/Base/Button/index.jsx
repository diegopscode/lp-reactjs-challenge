import { ButtonStyle } from "./style";

function Button({ children, ...props }) {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
}

export default Button;
