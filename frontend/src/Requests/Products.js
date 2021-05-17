import { gql } from "@apollo/client";

export const fetchHomeProducts = gql`
  query GetHomeProducts {
    lastVisitedProducts {
      id
      homeImage
      overview {
        price
      }
      visits {
        lastVisited
        total
      }
    }
    mostVisitedProducts {
      id
      homeImage
      overview {
        price
      }
      visits {
        lastVisited
        total
      }
    }
  }
`;

export const fetchSearchProducts = gql`
  query SearchProducts($page: Int, $limit: Int, $search: String) {
    searchProducts(page: $page, limit: $limit, search: $search) {
      page
      limit
      total
      items {
        id
        homeImage
        images
        sectionType
        overview {
          price
          beds
          baths
          address
          neighborhood
          city
          zipcode
          available
        }
      }
    }
  }
`;

export const fetchProduct = gql`
  query FetchProduct($id: Int) {
    product(id: $id) {
      id
      homeImage
      images
      overview {
        price
        beds
        baths
        neighborhood
        city
        zipcode
        available
      }
      facts {
        type
        yearBuilt
        heating
        parking
        lot
        stories
      }
      others {
        anualTax
        hasGarage
        pool
        virtualTourLink
        parcelNumber
        lastSold
      }
      visits {
        total
        lastVisited
      }
    }
  }
`;
