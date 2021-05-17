import { useState } from "react";
import ImageGrid from "../../Layout/ImageGrid";
import ProductInfoFloat from "../../Module/ProductInfoFloat";

import SliderImages from "../../Layout/SliderImages";
import Modal from "../../Base/Modal";

import { Wrapper, Content, ImageHolder, ModalPanel } from "./style";

function ProductView({ item }) {
  const [show, setShow] = useState(false);
  const [indexImage, setIndexImage] = useState(0);

  function handleShowSliderImages(index) {
    setIndexImage(index);
    setShow(true);
  }

  return (
    <Wrapper>
      <Content>
        <ImageHolder>
          <SliderImages images={item.images} />
        </ImageHolder>
        <ImageGrid
          images={item.images}
          onShow={(index) => handleShowSliderImages(index)}
        />
      </Content>
      <ProductInfoFloat product={item} />

      <Modal show={show} onClose={() => setShow(false)}>
        <ModalPanel>
          <SliderImages images={item.images} selected={indexImage} />
        </ModalPanel>
      </Modal>
    </Wrapper>
  );
}

export default ProductView;
