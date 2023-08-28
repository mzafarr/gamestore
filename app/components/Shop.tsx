import React from "react";
import { ProductCard } from "./ProductCard";
function Shop() {
  return (
    <section
      className="py-28"
      id="shop"
      aria-label="shop"
      style={{ backgroundImage: "url('./images/shop-bg.jpg')" }}
    >
      <div className="flex flex-col text-center">
        <h2 className="text-5xl text-white text-center font-semibold my-4">
          GAMING PRODUCTS <span className="text-orange-400">CORNER</span>
        </h2>
        <p className="text-xl sm:max-w-[50vw] text-center mx-auto  pb-14">
          Compete with 100 players on a remote island for winner takes showdown
          known issue where certain skin strategic
        </p>

        <ul className="flex  gap-x-8 px-4">
          <ProductCard
            imgSrc="./images/shop-img-1.jpg"
            altText="Women Black T-Shirt"
            category="t-shirt"
            title="Women Black T-Shirt"
            price="29.00"
          />
          <ProductCard
            imgSrc="./images/shop-img-2.jpg"
            altText="Gears 5 Xbox Controller"
            category="x-box"
            title="Gears 5 Xbox Controller"
            price="29.00"
          />
          <ProductCard
            imgSrc="./images/shop-img-3.jpg"
            altText="GeForce RTX 2070"
            category="Graphics"
            title="GeForce RTX 2070"
            price="29.00"
          />
          <ProductCard
            imgSrc="./images/shop-img-4.jpg"
            altText="Virtual Reality Smiled"
            category="VR-Box"
            title="Virtual Reality Smiled"
            price="29.00"
          />
        </ul>
      </div>
    </section>
  );
}

export default Shop;
