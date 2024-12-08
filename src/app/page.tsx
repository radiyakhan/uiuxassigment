import Furniture from "@/components/Furniture";
import Hero from "@/components/Hero";
import Inspiration from "@/components/Inspiration";
import Product from "@/components/Product";
import Range from "@/components/Range";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Range/>
      <Product/>
      <Inspiration/>
      <Furniture/>
    </div>
  );
}
