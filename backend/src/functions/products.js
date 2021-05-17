const products = require('../database/data.json');

const handlePaginate = (data, { page = 1, limit = 5 }) => {
  const curentPage = page - 1;
  const start = curentPage * limit;
  const end = page * limit;
  const total = Math.ceil(data.length / limit);

  return {
    page,
    limit,
    total,
    items: data.slice(start, end),
  };
};

const productsAll = (_, { page, limit }) => {
  return handlePaginate(products, { page, limit });
};

const product = (_, { id }) => {
  return products.find((product) => product.id === id);
};

const searchProducts = (_, { search = '', page, limit }) => {
  let data = products;

  if (search) {
    search = search.toLowerCase();
    data = [];
    products.forEach((product) => {
      const { overview, facts } = product;
      if (overview.neighborhood.toLowerCase().includes(search)) {
        product.sectionType = 'neighborhood';
        data.push(product);
      } else if (overview.city.toLowerCase().includes(search)) {
        product.sectionType = 'city';
        data.push(product);
      } else if (String(overview.zipcode).toLowerCase().includes(search)) {
        product.sectionType = 'zipcode';
        data.push(product);
      } else if (facts.type.toLowerCase().includes(search)) {
        product.sectionType = 'type';
        data.push(product);
      }
    });
  }

  return handlePaginate(data, { page, limit });
};

const lastVisitedProducts = () => {
  return products
    .sort(
      (currentProduct, nextProduct) =>
        new Date(currentProduct.visits.lastVisited).getTime() -
        new Date(nextProduct.visits.lastVisited).getTime()
    )
    .slice(0, 5);
};

const mostVisitedProducts = () => {
  return products
    .sort(
      (currentProduct, nextProduct) =>
        nextProduct.visits.total - currentProduct.visits.total
    )
    .slice(0, 5);
};

module.exports = {
  products: productsAll,
  product,
  searchProducts,
  lastVisitedProducts,
  mostVisitedProducts,
};
