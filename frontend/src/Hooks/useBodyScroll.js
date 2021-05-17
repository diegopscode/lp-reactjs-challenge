import { useEffect } from "react";

const useBodyScroll = (hasScroll) => {
  useEffect(() => {
    if (hasScroll) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "initial";
    return () => (document.body.style.overflow = "initial");
  }, [hasScroll]);
};

export default useBodyScroll;
