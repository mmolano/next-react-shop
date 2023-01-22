import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { useQuery } from "urql";
import { useStateContext } from "../../lib/product/context";
import { GET_PRODUCT } from "../../lib/product/query";
import { GetQueryProduct } from "./hooks/GetQuery";
import { toast } from 'react-toastify';

export const ProductDetails = () => {
  const { query }: string = useRouter();
  const { quantity, addProduct, removeProduct, onAdd } = useStateContext();
  const [results]: object = GetQueryProduct(query.id);
  const { data, fetching, error }: object = results;

  const notify = () => toast.success('A product has been added!', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  if (fetching) return <p></p>

  if (error) return toast.error('Error', {
    toastId: '',
    position: "top-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  })

  const { name, price, image, description, slug, categories, availability } = data.products.data[0].attributes;
  const allCategories: string[] = [];

  categories.data.map((category: object) => {
    return allCategories.push(category.attributes.gender), allCategories.push(category.attributes.type)
  })

  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <Link href={"/"}>
              <TiArrowLeftThick className="text-4xl" />
            </Link>
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{name}</h2>

            <div className=" flex flex-row justify-between  mt-5">
              <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">{availability} items remaining</p>
            </div>

            <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{description}</p>
            <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">$ {price.toFixed(2)}</p>
            <p className=" mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">
              <b>Categories</b>: {allCategories.join(', ').toString()}
            </p>
            <div className="lg:mt-11 mt-10">
              <div className="flex flex-row justify-between">
                <p className=" font-medium text-base leading-4 text-gray-600">Select quantity</p>
                <div className="flex">
                  <button onClick={removeProduct} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">
                    -
                  </button>
                  <input id="counter" aria-label="input" className="border border-gray-300 h-full text-center w-14 pb-1" type="text" value={quantity} onChange={(e) => e.target.value} />
                  <button onClick={addProduct} disabled={(quantity === availability) ? true : false} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 disabled:opacity-0">
                    +
                  </button>
                </div>
              </div>
              <hr className=" bg-gray-200 w-full mt-4" />
            </div>
            <button onClick={() => {
              onAdd(data.products.data[0].attributes, quantity);
              notify();
            }}
              className="focus:outline-none focus:ring-2 enabled:hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6 disabled:opacity-75"
              disabled={quantity < 1 ? true : false}>
              Add to shopping bag
            </button>
          </div>
          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
            <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
              <Image
                src={image.data[0].attributes.formats.large.url}
                alt={slug}
                width={image.data[0].attributes.formats.large.width}
                height={image.data[0].attributes.formats.large.height}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}