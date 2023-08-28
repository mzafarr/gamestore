import Brand from "./components/Brand";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import { ReleasedGames } from "./components/ReleasedGames";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { Newsletter } from "./components/Newsletter";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brand />
      <Latest />
      <ReleasedGames />
      <Shop />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}
