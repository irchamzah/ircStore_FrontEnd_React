export default function LoadingCategories({ amount }) {
  return Array.from({ length: amount }).map((_, index) => (
    <div
      key={index}
      className="animate-pulse flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="me-2 h-4 w-4 shrink-0 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
      </div>
    </div>
  ));
}
