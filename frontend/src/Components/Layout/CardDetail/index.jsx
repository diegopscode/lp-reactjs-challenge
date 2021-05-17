import Image from "../../Base/Image";

import {
  Wrapper,
  ImageHolder,
  Price,
  HeadContent,
  BodyContent,
  InfoDetail,
  InfoItem,
  ImageGrid,
  AvailableLabel,
} from "./style";

import { FormatCurrency } from "../../../Utils";

function CardDetail({ id, homeImage, overview, images }) {
  return (
    <Wrapper to={`/product/${id}`}>
      <HeadContent>
        <ImageHolder>
          <Image src={homeImage} alt="house" />
        </ImageHolder>
        <Price>Price: {FormatCurrency(overview.price)}</Price>
      </HeadContent>
      <BodyContent>
        <InfoDetail>
          <InfoItem>Neighborhood: {overview.neighborhood}</InfoItem>
          <InfoItem>
            Beds: {overview.beds} Baths: {overview.baths}
          </InfoItem>
          <InfoItem>Address: {overview.address}</InfoItem>
          <InfoItem>City: {overview.city}</InfoItem>
          <InfoItem>ZIP code: {overview.zipcode}</InfoItem>
          <InfoItem>
            Available: <AvailableLabel active={overview.available} />
          </InfoItem>
        </InfoDetail>
        <ImageGrid>
          {images.slice(0, 4).map((image, index) => (
            <Image src={image} alt="house image" key={index} />
          ))}
        </ImageGrid>
      </BodyContent>
    </Wrapper>
  );
}

export default CardDetail;
