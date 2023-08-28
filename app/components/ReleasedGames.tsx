import React from "react";

export const ReleasedGames = () => {
  return (
    <section
      className="bg-white text-gray-700 py-28 text-xl w-screen flex justify-center"
      id="features"
      aria-label="featured game"
    >
      <div className="container">
        <h2 className="text-5xl font-bold text-center pb-12">
          ALL RELEASED <span className=" text-orange-400">GAMES</span>
        </h2>

        <ul className="flex cursor-pointer">
          <li className="">
            <div className="featured-game-card">
              <figure className="hover:opacity-75">
                <img
                  src="./images/featured-game-1.jpg"
                  width="450"
                  height="600"
                  loading="lazy"
                  alt="Just for Gamers"
                  className="img-cover"
                />
              </figure>

              <h3 className="text-xl mt-3 mb-1 font-orange-400 font-semibold">
                <a href="#" className="text-orange-500">
                  Just for <span className="span">Gamers</span>
                </a>
              </h3>
              <span className="card-meta">
                <span className="span">Playstation 5, Xbox</span>
              </span>
            </div>
          </li>

          <li className="">
            <div className="featured-game-card">
              <figure className="hover:opacity-75">
                <img
                  src="./images/featured-game-2.jpg"
                  width="450"
                  height="600"
                  loading="lazy"
                  alt="Need for Speed"
                  className="img-cover"
                />
              </figure>
              <h3 className="text-xl mt-3 mb-1 font-orange-400 font-semibold">
                <a href="#" className="text-orange-500">
                  Need for <span className="span">Speed</span>
                </a>
              </h3>
              <span className="card-meta">
                <span className="span">Playstation 5, Xbox</span>
              </span>
            </div>
          </li>

          <li className="">
            <div className="featured-game-card">
              <figure className="hover:opacity-75">
                <img
                  src="./images/featured-game-3.jpg"
                  width="450"
                  height="600"
                  loading="lazy"
                  alt="Egypt Hunting Gamers"
                  className="img-cover"
                />
              </figure>

              <h3 className="text-xl mt-3 mb-1 font-orange-400 font-semibold">
                <a href="#" className="text-orange-500">
                  Egypt Hunting <span className="span">Gamers</span>
                </a>
              </h3>
              <span className="card-meta">
                <span className="span">Playstation 5, Xbox</span>
              </span>
            </div>
          </li>

          <li className="">
            <div className="featured-game-card">
              <figure className="hover:opacity-75">
                <img
                  src="./images/featured-game-4.jpg"
                  width="450"
                  height="600"
                  loading="lazy"
                  alt="Just for Gamers"
                  className="img-cover"
                />
              </figure>
              <h3 className="text-xl mt-3 mb-1 font-orange-400 font-semibold">
                <a href="#" className="text-orange-500">
                  Just for <span className="span">Gamers</span>
                </a>
              </h3>
              <span className="card-meta">
                <span className="span">Playstation 5, Xbox</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
