import { useState } from "react";
import PropTypes from "prop-types";

const SearchProductsSection = ({ categories = [], onApplyFilters }) => {
  const [filters, setFilters] = useState({
    query: "",
    min_price: "",
    max_price: "",
    category: "",
    sort_by: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApplyFilters(filters);
  };

  const handleReset = () => {
    setFilters({
      query: "",
      min_price: "",
      max_price: "",
      category: "",
      sort_by: "",
    });
    onApplyFilters({});
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12 lg:max-w-7xl">
        <div className="flex flex-col">
          <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-10 w-full flex items-center justify-between rounded-md">
                <svg
                  className="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  name="query"
                  value={filters.query}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search by name"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="flex flex-col">
                  <input
                    type="number"
                    name="min_price"
                    value={filters.min_price}
                    onChange={handleInputChange}
                    placeholder="Minimum Price"
                    min="0"
                    step="10000"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="number"
                    name="max_price"
                    value={filters.max_price}
                    onChange={handleInputChange}
                    placeholder="Maximum Price"
                    min="0"
                    step="10000"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <select
                    name="category"
                    value={filters.category}
                    onChange={handleInputChange}
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <select
                    id="sort_by"
                    name="sort_by"
                    value={filters.sort_by}
                    onChange={handleInputChange}
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <option value="">Sort By</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <button
                  type="reset"
                  onClick={handleReset}
                  className="flex items-center justify-center text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Apply Filters
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchProductsSection;

SearchProductsSection.propTypes = {
  categories: PropTypes.array,
  onApplyFilters: PropTypes.func,
};
