import PropTypes from "prop-types";

LoadingProducts.propTypes = {
  amount: PropTypes.number,
};

export default function LoadingProducts({ amount }) {
  return (
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      {[...Array(amount)].map((_, index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 animate-pulse"
        >
          <div className="h-56 bg-gray-300 dark:bg-gray-700"></div>
          <div className="mt-4 h-4 bg-gray-300 dark:bg-gray-700"></div>
          <div className="mt-4 h-4 bg-gray-300 dark:bg-gray-700"></div>
          <div className="mt-4 h-8 bg-gray-300 dark:bg-gray-700"></div>
        </div>
      ))}
    </div>
  );
}
