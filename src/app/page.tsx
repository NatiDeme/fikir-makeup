import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Home from "@/pages/Home";
import Services from "@/pages/Services";

export default function PagesWrapper() {
  return (
    <div className={`${playfair.className} py-4 overflow-clip`}>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Services />
    </div>
  );
}
