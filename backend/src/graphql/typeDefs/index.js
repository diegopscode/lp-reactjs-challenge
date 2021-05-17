const { gql } = require("apollo-server");

const typeDefs = gql`
  type Overview {
    price: String
    beds: Int
    baths: Float
    neighborhood: String
    address: String
    city: String
    zipcode: Int
    available: Boolean
  }

  type Facts {
    type: String
    yearBuilt: Int
    heating: String
    parking: String
    lot: String
    stories: Int
  }

  type Others {
    anualTax: Float
    hasGarage: Boolean
    pool: Boolean
    virtualTourLink: String
    parcelNumber: Int
    lastSold: String
  }

  type Visits {
    total: Int
    lastVisited: String
  }

  type Product {
    id: Int
    homeImage: String
    images: [String]
    sectionType: String

    overview: Overview
    facts: Facts
    others: Others
    visits: Visits
  }

  type ProductsPaginate {
    page: Int
    limit: Int
    total: Int
    items: [Product]
  }

  type Query {
    products(page: Int, limit: Int): ProductsPaginate!
    product(id: Int): Product
    searchProducts(search: String, page: Int, limit: Int): ProductsPaginate!
    lastVisitedProducts: [Product]!
    mostVisitedProducts: [Product]!
  }
`;

module.exports = typeDefs;
