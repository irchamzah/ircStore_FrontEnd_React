import { API_URL } from "../../config/api";
import LoadingProducts from "../loading/LoadingProducts";
import { formatRupiah, generateStars } from "../../utils/utilsReact";
import PropTypes from "prop-types";
import Pagination from "../paginations/Pagination";

const ProductsSection = ({
  header,
  currentPage,
  totalPages,
  onPageChange,
  products,
  isShowPage,
  isLoading,
}) => {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Heading & Filters */}
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              {header}
            </h2>
          </div>
        </div>

        {isLoading ? (
          <LoadingProducts amount={4} />
        ) : (
          <>
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="h-56 w-full">
                    <a href={`/products/${product.id}`}>
                      <img
                        className="mx-auto hidden h-full dark:block"
                        src={`${API_URL}/images/products/${product.image}`}
                        alt={product.name}
                      />
                    </a>
                  </div>
                  <div className="pt-6 flex flex-col">
                    <div>
                      <a
                        href={`/products/${product.id}`}
                        className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                      >
                        {product.name}
                      </a>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center">
                        {generateStars(product.averageRating)}
                      </div>

                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {product.averageRating.toFixed(1)}
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        ({product.reviewsCount})
                      </p>
                    </div>

                    <div className="mt-4 flex flex-col justify-between gap-4">
                      <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        {formatRupiah(product.price)}
                      </p>

                      <a
                        href={`/products/${product.id}`}
                        className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-min text-nowrap"
                      >
                        See Product
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {isShowPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;

ProductsSection.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
  products: PropTypes.array,
  header: PropTypes.string,
  isShowPage: PropTypes.bool,
  isLoading: PropTypes.bool,
};
