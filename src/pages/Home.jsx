import { useEffect, useState } from "react";
import CategoriesSection from "../components/sections/CategoriesSection";
import HeroSection from "../components/sections/HeroSection";
import ProductsSection from "../components/sections/ProductsSection";
import Layout from "../layouts/layout";
import { API_URL } from "../config/api";

function Home() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/api/products/showfeaturedProducts`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ProductsSection
        header="Featured Products"
        products={data.featuredProducts}
        isShowPage={false}
        isLoading={isLoading}
      />
      <CategoriesSection
        header="Popular Categories"
        showSeeMore={true}
        categories={data.categories}
        isLoading={isLoading}
      />
    </Layout>
  );
}

export default Home;
