import Hero from "@/components/pages/home/Hero";
import ProductViewer from "@/components/pages/home/ProductViewer";
import Showcase from "../components/pages/home/Showcase";
import Performance from "@/components/pages/home/Performance";
import Features from "@/components/pages/home/Features";
import Highlights from "@/components/pages/home/Highlights";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
    </div>
  );
}
