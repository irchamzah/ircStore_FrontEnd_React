import { useEffect, useState } from "react";
import CategoriesSection from "../components/sections/CategoriesSection";
import Layout from "../layouts/layout";
import { API_URL } from "../config/api";

function Categories() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/api/categories/showAllCategories`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      <CategoriesSection
        header="All Categories"
        showSeeMore={false}
        categories={data.categories}
        isLoading={isLoading}
      />
    </Layout>
  );
}

export default Categories;
