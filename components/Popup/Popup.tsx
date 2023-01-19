import { BiCheck } from "react-icons/bi";

//TODO add message and cond
export const Popup = (message: string = "yes", status: number = 200) => {
  return (
    <>
      <div className="absolute right-4">
        <div className="py-5 pr-7 pl-4 bg-green-300">
          <BiCheck className="inline-block align-middle text-base mx-2.5 mt-1.5 mb-2" /><span>
            Product added to cart
          </span>
        </div>
      </div>
    </>
  )
}