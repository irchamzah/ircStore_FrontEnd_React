export default function LoadingDetailProduct() {
  return (
    <>
      {/* ProductInfo */}
      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            {/* ProductImage */}
            <div className="animate-pulse">
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>

            {/* ProductDescription */}
            <div className="animate-pulse">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"
                    ></div>
                  ))}
                </div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-12"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
                <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
                  <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
                <div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
                  <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
              <div className="h-60 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Reviews */}
    </>
  );
}
