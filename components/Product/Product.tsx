import ProductProps from "../../interface/product";

export const Product = (product: ProductProps) => {
  const { name, price, image } = product.product.attributes

  return (
    <>
      <div>
        <img src={image.data[0].attributes.formats.small.url} alt="" />
      </div>
      <h2>{name}</h2>
      <h3>Price: {price}</h3>
    </>
  )
}