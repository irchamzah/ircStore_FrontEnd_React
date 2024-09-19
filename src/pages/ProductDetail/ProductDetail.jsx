import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layouts/layout";
import { API_URL } from "../../config/api";
import ProductInfo from "./ProductInfo";
import ProductReviews from "./ProductReviews";
import LoadingDetailProduct from "../../components/loading/LoadingDetailProduct";

const ProductDetail = () => {
  const { productId } = useParams();
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        // setTimeout(() => {
        //   setProduct(data.product);
        // }, 3000);
        setData(data);
        setIsLoading(false);
      });
  }, [productId]);

  const loadMoreReviews = () => {
    fetch(
      `${API_URL}/api/products/${productId}/loadMoreReviews?page=${page + 1}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData((prevData) => ({
          ...prevData,
          latestReviews: [...prevData.latestReviews, ...data.reviews],
        }));
        setPage(page + 1);
      });
  };

  if (isLoading) {
    return (
      <Layout>
        <LoadingDetailProduct />
      </Layout>
    );
  }

  return (
    <Layout>
      <ProductInfo product={data.product} averageRating={data.averageRating} />
      <ProductReviews
        averageRating={data.averageRating}
        ratingPercentages={data.ratingPercentages}
        product={data.product}
        latestReviews={data.latestReviews}
        totalReviewsCount={data.totalReviewsCount}
        loadMoreReviews={loadMoreReviews}
      />
    </Layout>
  );
};
export default ProductDetail;
