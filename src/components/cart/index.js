"use client";

import { useSelector } from "react-redux";

function Cart() {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  if (!cart?.cartItems.length)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center ">
        <h1 className="text-4xl font-bold">Cart is Empty</h1>
      </div>
    );
  return (
    <div className="bg-white py-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#333] ">Cart</h2>
        <div className="overflow-y-auto">
          <table className="mt-12 w-full border-collapse divide-y">
            <thead className="whitespace-nowrap text-left ">
              <tr>
                <th className="text-base text-gray-700 p-4">Title</th>
                <th className="text-base text-gray-700 p-4">Price</th>
                <th className="text-base text-gray-700 p-4">Remove</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap divide-y ">
              {cart?.cartItems.map((item) => {
                return (
                  <tr>
                    <td className="py-5 px-4">
                      <div className="flex items-center gap-6 w-max">
                        <div className="h-36 shrink-0">
                          <img
                            src={item?.thumbnail}
                            alt={item?.title}
                            className="w-ful h-full object-contain"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Cart;
