export type ProductProps = {
  product: {
    id: number,
    attributes: {
      description: string,
      name: string,
      slug: string,
      price: number,
      image: {
        data: [
          attributes: object
        ],
      },
    }
  }
}

export type cartProps = {
  description: string,
  name: string,
  slug: string,
  price: number,
  image: {
    data: [
      attributes: object
    ],
  },
}