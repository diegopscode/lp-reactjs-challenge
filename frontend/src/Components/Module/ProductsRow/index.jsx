import Card from "../../Layout/Card";

import { Wrapper, RowItem } from "./style";

function ProductsRow({ items }) {
  return (
    <Wrapper>
      {items.map((item) => (
        <RowItem key={item.id}>
          <Card {...item} />
        </RowItem>
      ))}
    </Wrapper>
  );
}

export default ProductsRow;
