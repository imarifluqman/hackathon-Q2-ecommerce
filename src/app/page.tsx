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
      {/* <div className='w-full flex justify-center my-5'>
        <Image src="/partners.png" width={100} height={100} alt="partners" className="w-[400px]"/>
      </div> */}
      <Blogs />
    </main>
  );
}
