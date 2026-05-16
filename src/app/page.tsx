import Hero from "@/components/pages/home/Hero";
import ProductViewer from "@/components/pages/home/ProductViewer";
import gsap from 'gsap'
import { ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductViewer/>
    </div>
  );
}
