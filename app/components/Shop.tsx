import React from "react";

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
          <div className="flex flex-col relative cursor-pointer">
            <figure className="card-banner img-holder">
              <img
                src="./images/shop-img-1.jpg"
                width="300"
                height="260"
                loading="lazy"
                alt="Women Black T-Shirt"
                className="img-cover"
              />
            </figure>

            <a
              href="#"
              className="absolute bottom-24 left-1 ml-1 px-2 py-1 bg-orange-400"
            >
              t-shirt
            </a>
            <div className="flex flex-col items-start py-2">
              <h3 className="">
                <a href="#" className="card-title">
                  Women Black T-Shirt
                </a>
              </h3>

              <div className="text-orange-300">
                <p className="card-price">$29.00</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative cursor-pointer">
            <figure className="card-banner img-holder">
              <img
                src="./images/shop-img-2.jpg"
                width="300"
                height="260"
                loading="lazy"
                alt="Gears 5 Xbox Controller"
                className="img-cover"
              />
            </figure>

            <a
              href="#"
              className="absolute bottom-24 left-1 ml-1 px-2 py-1 bg-orange-400"
            >
              x-box
            </a>
            <div className="flex flex-col items-start py-2">
              <h3 className="">
                <a href="#" className="card-title">
                  Gears 5 Xbox Controller
                </a>
              </h3>

              <div className="text-orange-300">
                <p className="card-price">$29.00</p>

                <button className="card-btn"></button>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative cursor-pointer">
            <figure className="card-banner img-holder">
              <img
                src="./images/shop-img-3.jpg"
                width="300"
                height="260"
                loading="lazy"
                alt="GeForce RTX 2070"
                className="img-cover"
              />
            </figure>

            <a
              href="#"
              className="absolute bottom-24 left-1 ml-1 px-2 py-1 bg-orange-400"
            >
              Graphics
            </a>
            <div className="flex flex-col items-start py-2">
              <h3 className="">
                <a href="#" className="card-title">
                  GeForce RTX 2070
                </a>
              </h3>

              <div className="text-orange-300">
                <p className="card-price">$29.00</p>

                <button className="card-btn"></button>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative cursor-pointer">
            <figure className="card-banner img-holder">
              <img
                src="./images/shop-img-4.jpg"
                width="300"
                height="260"
                loading="lazy"
                alt="Virtual Reality Smiled"
                className="img-cover"
              />
            </figure>

            <a
              href="#"
              className="absolute bottom-24 left-1 ml-1 px-2 py-1 bg-orange-400"
            >
              VR-Box
            </a>
            <div className="flex flex-col items-start py-2">
              <h3 className="">
                <a href="#" className="card-title">
                  Virtual Reality Smiled
                </a>
              </h3>

              <div className="text-orange-300">
                <p className="card-price">$29.00</p>

                <button className="card-btn"></button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Shop;
