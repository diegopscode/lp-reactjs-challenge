import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import { Wrapper } from "./style";

function SliderImages({ images = [], ...props }) {
  const mediaSource = images.map((image) => ({ source: "static/" + image }));

  return (
    <Wrapper>
      <AwesomeSlider className="aws-slide" media={mediaSource} {...props} />
    </Wrapper>
  );
}

export default SliderImages;
