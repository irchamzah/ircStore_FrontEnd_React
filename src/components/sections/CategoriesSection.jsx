import { Link } from "react-router-dom";
import LoadingCategories from "../loading/LoadingCategories";

const CategoriesSection = ({ header, showSeeMore, categories, isLoading }) => {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            {header}
          </h2>

          {showSeeMore && (
            <Link
              to="/categories"
              className="flex items-center text-base font-medium text-blue-700 hover:underline dark:text-blue-500"
            >
              See more categories
              <svg
                className="ml-1 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 12H5m14 0l-4 4m4-4l-4-4"
                />
              </svg>
            </Link>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {isLoading ? (
            <LoadingCategories amount={8} />
          ) : (
            categories.map((category) => (
              <Link
                key={category.id}
                to={`/search?category=${category.id}`}
                className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {category.name}
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
