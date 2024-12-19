import { useContext } from "react";
import {
  CartContext,
  ProductContext,
  SearchContext,
  SortContext,
} from "../../context";
import Loader from "./Loader";
import Svg from "./Svg";

export default function Products() {
  const { searchData } = useContext(SearchContext);
  const { sortOrder } = useContext(SortContext);
  const { loading, error, productData } = useContext(ProductContext);
  const { addToCarts, removeFromCarts, carts } = useContext(CartContext);

  // Filter products based on search
  const searchedProductData = searchData
    ? productData.filter((product) =>
        product.title.toLowerCase().includes(searchData.toLowerCase())
      )
    : productData;

  // Sort the filtered products
  const sortedProductData = searchedProductData.sort((a, b) => {
    if (sortOrder === "low-to-high") return a.price - b.price;
    if (sortOrder === "high-to-low") return b.price - a.price;
    return 0; // No sorting
  });

  // Convert carts to a Set for efficient lookup
  const cartIds = new Set(carts.map((cartItem) => cartItem.id));

  // Toggle cart status
  const handleCart = (productId) => {
    if (cartIds.has(productId)) {
      removeFromCarts(productId);
    } else {
      addToCarts(productId);
    }
  };

  console.log("Carts:", carts);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {error.state && (
            <p className="mt-4 text-xl text-red-500 text-center">
              {error.message}
            </p>
          )}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {loading.state ? (
              <Loader />
            ) : (
              <>
                {sortedProductData.length > 0 ? (
                  sortedProductData.map((product) => (
                    <div className="relative" key={product.id}>
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                        <img
                          src={product.image}
                          alt={`Image of ${product.title}`}
                          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
                        />
                      </div>
                      <div className="mt-4 px-3 pb-4">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            {product.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.category}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          ${product.price}
                        </p>
                      </div>
                      <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10 hover:ring-1 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1">
                        <div
                          className="flex px-3 py-2 justify-center"
                          onClick={() => handleCart(product.id)}
                        >
                          <Svg />
                          {cartIds.has(product.id) ? (
                            <p>Already in Cart</p>
                          ) : (
                            <p>Add To Cart</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No products found</h1>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
