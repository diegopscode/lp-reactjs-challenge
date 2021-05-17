import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { fetchProduct } from "../../Requests/Products";

import ProductView from "../../Components/Module/ProductView";
import Section from "../../Components/Base/Section";

import { Container } from "./style";

function ProductDetail() {
  const params = useParams();
  const { loading, data, error } = useQuery(fetchProduct, {
    variables: { id: Number(params.id) },
  });

  if (error) return <Section title="No data to load!" />;

  return (
    <Container className="container">
      {!loading && <ProductView item={data.product} />}
    </Container>
  );
}

export default ProductDetail;
