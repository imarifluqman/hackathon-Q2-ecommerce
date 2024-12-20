import HeroSection from "./components/HeroSection/heroSection";
import LatestProducts from "./components/latestProducts";
import Navbar from "./components/navbar";
import Offer from "./components/offer";
import Products from "./components/products";
import TopNav from "./components/topNav";
import UniqueFeature from "./components/uniqueFeature";

export default function Home() {
  return (
    <main>
      <TopNav />
      <Navbar />
      <HeroSection />
      <Products />
      <LatestProducts />
      <Offer />
      <UniqueFeature />
    </main>
  );
}
