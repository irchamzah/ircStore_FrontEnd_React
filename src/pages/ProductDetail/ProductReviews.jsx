import { API_URL } from "../../config/api";
import { formatDate, generateStars } from "../../utils/utilsReact";
import PropTypes from "prop-types";

export default function ProductReviews({
  averageRating,
  ratingPercentages,
  product,
  latestReviews,
  totalReviewsCount,
  loadMoreReviews,
}) {
  const keys = Object.keys(latestReviews);
  latestReviews = keys.map((key) => latestReviews[key]);

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="flex items-center mb-2 space-x-1">
          {generateStars(averageRating)}

          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            {averageRating}
          </p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            out of
          </p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            5
          </p>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {product.reviews.length} reviews
        </p>

        {/* Rating percentages */}
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center mt-4">
            <a
              href="#"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              {rating} star
            </a>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
              <div
                className="h-5 bg-yellow-300 rounded"
                style={{ width: `${ratingPercentages[rating]}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {Math.round(ratingPercentages[rating])}%
            </span>
          </div>
        ))}

        {/* Reviews List */}
        <article id="reviews-container" className="py-8 md:py-16">
          <h2 className="text-2xl font-bold my-10 text-white">
            Customer Reviews
          </h2>

          {latestReviews.length > 0 ? (
            latestReviews.map((review) => (
              <div key={review.id}>
                <div className="flex items-center my-4">
                  <img
                    className="w-10 h-10 me-4 rounded-full"
                    src={`${API_URL}/images/profiles/${review.user.photo}`}
                    alt={review.user.photo}
                  />
                  <div className="font-medium dark:text-white">
                    <p>
                      {review.user.name}
                      <time className="block text-sm text-gray-500 dark:text-gray-400">
                        Joined on {formatDate(review.user.created_at)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                  {generateStars(review.rating)}
                </div>

                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Reviewed on <time>{formatDate(review.created_at)}</time>
                  </p>
                </footer>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  {review.review}
                </p>
                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </article>

        {/* Load more button */}
        {totalReviewsCount > 5 && (
          <button
            onClick={loadMoreReviews}
            id="load-more"
            data-page="1"
            className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Read more
          </button>
        )}
      </div>
    </section>
  );
}

ProductReviews.propTypes = {
  averageRating: PropTypes.number,
  ratingPercentages: PropTypes.object,
  product: PropTypes.object,
  latestReviews: PropTypes.array,
  totalReviewsCount: PropTypes.number,
  loadMoreReviews: PropTypes.func,
};
