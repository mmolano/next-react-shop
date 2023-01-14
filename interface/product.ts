type ProductProps = {
  product: {
    id: number,
    attributes: {
      description: string,
      title: string,
      slug: string,
      price: number,
      image: {
        data: object,
      },
    }
  }
}

export default ProductProps;