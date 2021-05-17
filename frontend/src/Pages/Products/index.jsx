import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { fetchSearchProducts } from "../../Requests/Products";
import { setProductSearch } from "../../Store/Reducers/products";

import Section from "../../Components/Base/Section";
import ViewStyle from "../../Components/Layout/ViewStyle";
import ProductsList from "../../Components/Module/ProductsList";
import SearchProducts from "../../Components/Module/SearchProducts";

import { Container, HeadContent, BodyContent, ViewChangeHold } from "./style";

function Products() {
  const dispatch = useDispatch();

  const search = useSelector(({ products }) => products.search);

  const [viewStyle, setViewStyle] = useState("all");
  const [page, setPage] = useState(1);
  const [inputSearch, setInputSearch] = useState(search);

  const { loading, data, error } = useQuery(fetchSearchProducts, {
    variables: { page: page, limit: 5, search },
  });

  function handlePrevPaginate() {
    const prevPage = page - 1;
    if (prevPage > 0) setPage(prevPage);
  }

  function handleNextPaginate() {
    const nextPage = page + 1;
    if (nextPage <= data.searchProducts.total) setPage(nextPage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPage(1);
    dispatch(setProductSearch(inputSearch));
  }

  function handleOnChange(e) {
    setInputSearch(e.target.value);
  }

  if (error) return <Section title="No data to load!" />;

  return (
    <Container className="container">
      <HeadContent>
        <form onSubmit={handleSubmit}>
          <SearchProducts value={inputSearch} onChange={handleOnChange} />
        </form>
      </HeadContent>
      <BodyContent>
        <Section title="List of Homes">
          <ViewChangeHold>
            <ViewStyle
              onClick={(value) => setViewStyle(value)}
              value={viewStyle}
            />
          </ViewChangeHold>

          {!loading && (
            <ProductsList
              viewStyle={viewStyle}
              paginate={data.searchProducts}
              onPrevPage={handlePrevPaginate}
              onNextPage={handleNextPaginate}
            />
          )}
        </Section>
      </BodyContent>
    </Container>
  );
}

export default Products;
