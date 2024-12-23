import HeroSection from "./components/heroSection";
import LatestProducts from "./components/latestProducts";
import Offer from "./components/offer";
import Products from "./components/products";
import TrendingProducts from "./components/trendingProducts";
import UniqueFeature from "./components/uniqueFeature";
import DiscountItems from "./components/discountItems";
import TopCategories from "./components/topCategories";
import NewsLetter from "./components/newsLatter";
import Blogs from "./components/blogs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Products />
      <LatestProducts />
      <Offer />
      <UniqueFeature />
      <TrendingProducts />
      <DiscountItems />
      <TopCategories />
      <NewsLetter />
      <Blogs />
    </main>
  );
}
