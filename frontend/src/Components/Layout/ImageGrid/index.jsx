import Image from "../../Base/Image";

import { Wrapper, ImageHold } from "./style";

function ImageGrid({ images, onShow }) {
  return (
    <Wrapper>
      {images.map((item, index) => (
        <ImageHold key={index} onClick={() => onShow(index)}>
          <Image src={item} alt={`image ${index}`} />
        </ImageHold>
      ))}
    </Wrapper>
  );
}

export default ImageGrid;
