//////////////////////////////// Product Interface //////////////////////////////////
interface formatsAttributes {
  ext: string,
  hash: string
  height: number,
  mime: string,
  name: string,
  provider_metadata: {
    public_id: string,
    resource_type: string,
  },
  size: number,
  width: number,
  url: string,
}
interface imageAttributes {
  attributes: {
    formats: {
      large: formatsAttributes
      medium: formatsAttributes
      small: formatsAttributes
      thumbnail: formatsAttributes
    }
  }
}
interface productImage {
  data: imageAttributes[]
}
export interface productCategory {
  attributes: {
    gender: string,
    type: string,
  }
}
export interface productAttributes {
  availability: number,
  description: string,
  name: string,
  slug: string,
  price: number,
  image: productImage,
  category: productCategory,
  quantity: number
}
export type products = {
  id: number,
  attributes: productAttributes
}

//////////////////////////////// Cart Interface //////////////////////////////////
export type cartProduct = productAttributes & {
  quantity: number
}
