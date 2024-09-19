import { API_URL } from "../../config/api";
import { formatRupiah, generateStars } from "../../utils/utilsReact";
import PropTypes from "prop-types";

export default function ProductInfo({ product, averageRating }) {
  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <ProductImage product={product} />
          <ProductDescription product={product} averageRating={averageRating} />
        </div>
      </div>
    </section>
  );
}

const ProductImage = ({ product }) => {
  return (
    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
      <img
        className="w-full dark:hidden"
        src={`${API_URL}/images/products/${product.image}`}
        alt={product.name}
      />
      <img
        className="w-full hidden dark:block"
        src={`${API_URL}/images/products/${product.image}`}
        alt={product.name}
      />
    </div>
  );
};

const ProductDescription = ({ product, averageRating }) => {
  return (
    <div className="mt-6 sm:mt-8 lg:mt-0">
      <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
        {product.name}
      </h1>
      <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
        <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
          {formatRupiah(product.price)}
        </p>
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <div className="flex items-center gap-1">
            {generateStars(averageRating)}
          </div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            ({averageRating.toFixed(1)})
          </p>
          <a
            href="#reviews-container"
            className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
          >
            {product.reviews.length}{" "}
            {product.reviews.length === 1 ? "Review" : "Reviews"}
          </a>
        </div>
      </div>

      <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
        <button
          className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
            />
          </svg>
          Add to favorites
        </button>

        <button
          className="text-white mt-4 sm:mt-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center hover:opacity-80"
          type="button"
        >
          <svg
            className="w-5 h-5 -ms-2 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
            />
          </svg>
          Add to cart
        </button>
      </div>

      <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="mb-6 font-medium text-gray-900 dark:text-white">
            Category
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center py-1 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600  dark:hover:bg-gray-600"
          >
            {product.category.name}
          </a>
        </div>
        <div>
          <p className="mb-6 font-medium text-gray-900 dark:text-white">
            Stock
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center py-1 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600  dark:hover:bg-gray-600"
          >
            {product.stock > 0 ? product.stock : 0}
          </a>
        </div>
      </div>

      <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

      <p className="text-gray-500 dark:text-gray-400">{product.description}</p>
    </div>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object,
  averageRating: PropTypes.number,
};

ProductImage.propTypes = {
  product: PropTypes.object,
};

ProductDescription.propTypes = {
  product: PropTypes.object,
  averageRating: PropTypes.number,
};
