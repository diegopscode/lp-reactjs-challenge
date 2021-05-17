import { useState } from "react";

import Link from "../../Base/Link";
import FloatSidebar from "../../Layout/FloatSidebar";

import { Wrapper, Title, SubTitle, Text, Box, ShowMoreBtn } from "./style";

import { FormatCurrency } from "../../../Utils";

function ProductInfoFloat({ product = {} }) {
  const { overview, facts, others, visits } = product;

  const [showAll, setShowAll] = useState(false);

  return (
    <Wrapper>
      <FloatSidebar>
        <Title>Property Information</Title>

        <Box>
          <SubTitle>Overview</SubTitle>
          <Text>Price: {FormatCurrency(overview.price)}</Text>
          <Text>Neighborhood: {overview.neighborhood}</Text>
          <Text>
            Beds: {overview.beds} Baths: {overview.baths}
          </Text>
          <Text>City: {overview.city}</Text>
          <Text>ZIP code: {overview.zipcode}</Text>
          <Text>Available: {overview.available}</Text>
        </Box>

        <Box>
          <SubTitle>Facts and features</SubTitle>
          <Text>Type: {facts.type}</Text>
          <Text>Year Built: {facts.yearBuilt}</Text>
          <Text>Heating: {facts.heating}</Text>
          <Text>Parking: {facts.parking}</Text>
          <Text>Lot: {facts.lot}</Text>
          <Text>Stories: {facts.stories}</Text>
        </Box>

        {!showAll && (
          <ShowMoreBtn onClick={() => setShowAll(true)}>Show more</ShowMoreBtn>
        )}

        {showAll && (
          <>
            <Box>
              <SubTitle>Others</SubTitle>
              <Text>Anual Tax: {FormatCurrency(others.anualTax)}</Text>
              <Text>Has Garage: {others.hasGarage}</Text>
              <Text>Has Pool: {others.pool}</Text>
              <Text>
                <Link href={others.virtualTourLink} target="__blank">
                  Virtual Tour
                </Link>
              </Text>
              <Text>Parcel Number: {others.parcelNumber}</Text>
              <Text>Last Sold: {others.lastSold}</Text>
            </Box>

            <Box>
              <SubTitle>Visits</SubTitle>
              <Text>Total: {visits.total.toLocaleString()}</Text>
              <Text>Last Visited: {visits.lastVisited}</Text>
            </Box>
          </>
        )}
      </FloatSidebar>
    </Wrapper>
  );
}

export default ProductInfoFloat;
