export const GET_PRODUCTS = `query{
    products{
      data{
        id
        attributes{
          description
          name
          slug
          price
          image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
  `;

export const GET_PRODUCT = `query getProduct($id: ID!) {
  products(filters: {id: {eq: $id}}) {
    data{
      attributes{
          description
          name
          slug
          price
          image{
            data{
              attributes{
                formats
              }
            }
          }
        }
    }
  }
}
`;