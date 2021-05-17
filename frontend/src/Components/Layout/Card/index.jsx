import Image from "../../Base/Image";

import { Wrapper, ImageHolder, Text } from "./style";

import { FormatCurrency } from "../../../Utils";

function Card({ id, homeImage, overview, visits }) {
  return (
    <Wrapper to={`/product/${id}`}>
      <ImageHolder>
        <Image src={homeImage} alt="house"></Image>
      </ImageHolder>
      <Text>{FormatCurrency(overview.price)}</Text>
      {visits.total && <Text>Total View: {visits.total.toLocaleString()}</Text>}
    </Wrapper>
  );
}

export default Card;
