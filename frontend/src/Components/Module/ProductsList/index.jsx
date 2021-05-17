import { useEffect, useState, useMemo } from "react";
import CardDetail from "../../Layout/CardDetail";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import {
  Wrapper,
  RowItem,
  RowSection,
  PaginateWrapper,
  Text,
  SectionTitle,
  SectionItems,
  PaginateAction,
} from "./style";

const SECTION_LIST_ID = ["neighborhood", "city", "zipcode", "type"];
const SECTION_LIST_TITLE = [
  "Neighborhood",
  "City",
  "Zipcode",
  "Type of property",
];

function ProductsList({ viewStyle, paginate, onPrevPage, onNextPage }) {
  const [sections, setSections] = useState({});

  const renderGlobalStyle = () => {
    return paginate.items.map((item) => (
      <RowItem key={item.id}>
        <CardDetail {...item} />
      </RowItem>
    ));
  };

  const renderSectionStyle = useMemo(() => {
    console.log("UPDATE!");
    return SECTION_LIST_ID.map(
      (section, index) =>
        sections[section]?.length > 0 && (
          <RowSection key={index}>
            <SectionTitle>{SECTION_LIST_TITLE[index]}</SectionTitle>
            <SectionItems>
              {sections[section].map((item) => (
                <RowItem key={item.id}>
                  <CardDetail {...item} />
                </RowItem>
              ))}
            </SectionItems>
          </RowSection>
        )
    );
  }, [sections]);

  useEffect(() => {
    if (viewStyle !== "all") {
      const _sections = {
        neighborhood: [],
        city: [],
        zipcode: [],
        type: [],
      };

      paginate.items.forEach((item) => {
        if (item.sectionType) {
          _sections[item.sectionType].push(item);
        }
      });

      setSections({ ..._sections });
    }
  }, [paginate, viewStyle]);

  return (
    <Wrapper>
      {viewStyle === "all" ? renderGlobalStyle() : renderSectionStyle}

      <PaginateWrapper>
        <Text>Listings by page: {paginate.limit}</Text>
        <Text>
          Page {paginate.page} of {paginate.total}
        </Text>
        <PaginateAction onClick={onPrevPage}>
          <FaArrowLeft />
        </PaginateAction>
        <PaginateAction onClick={onNextPage}>
          <FaArrowRight />
        </PaginateAction>
      </PaginateWrapper>
    </Wrapper>
  );
}

export default ProductsList;
