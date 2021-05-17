import { InputStyle } from "./style";

const Input = ({ Children, className, ...props }) => (
  <InputStyle className={className} {...props}>
    {Children}
  </InputStyle>
);

export default Input;
