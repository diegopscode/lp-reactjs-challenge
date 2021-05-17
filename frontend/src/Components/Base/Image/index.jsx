import { ImageStyle } from "./style";

function Image({ className, src, ...props }) {
  return <ImageStyle className={className} src={`static/${src}`} {...props} />;
}

export default Image;
