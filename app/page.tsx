import Brand from "./components/Brand";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import { ReleasedGames } from "./components/ReleasedGames";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brand />
      <Latest />
      <ReleasedGames />
      <Shop />
    </>
  );
}
