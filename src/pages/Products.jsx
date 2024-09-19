import { useEffect, useState } from "react";
import ProductsSection from "../components/sections/ProductsSection";
import SearchProductsSection from "../components/sections/SearchProductsSection";
import { API_URL } from "../config/api";
import Layout from "../layouts/layout";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [data, setData] = useState({ products: [], categories: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchData = (params) => {
    setIsLoading(true);
    const queryParams = new URLSearchParams(params).toString();
    fetch(`${API_URL}/api/products/showAllProducts?${queryParams}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    fetchData(params);
  }, [searchParams]);

  const applyFilters = (filterData) => {
    setSearchParams({
      ...filterData,
      page: searchParams.get("page") || 1,
    });
  };

  const handlePageChange = (page) => {
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      page,
    });
  };

  return (
    <Layout>
      <SearchProductsSection
        categories={data.categories}
        onApplyFilters={applyFilters}
      />
      <ProductsSection
        header="All Products"
        products={data.products.data}
        isShowPage={true}
        isLoading={isLoading}
        currentPage={parseInt(searchParams.get("page")) || 1}
        totalPages={data.products.last_page}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
}

export default Products;
