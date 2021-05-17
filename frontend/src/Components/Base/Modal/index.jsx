import { useRef } from "react";

import { Wrapper, ModalContent } from "./style";

import useOnClickOutside from "../../../Hooks/useOnClickOutside";
import useBodyScroll from "../../../Hooks/useBodyScroll";

function Modal({ children, className, onClose, show }) {
  const ref = useRef(null);

  useOnClickOutside(ref, onClose);
  useBodyScroll(show);

  if (!show) return <></>;

  return (
    <Wrapper className={className}>
      <ModalContent ref={ref}>{children}</ModalContent>
    </Wrapper>
  );
}

export default Modal;
