// GameCard.js

import React from "react";

const GameCard = ({ imageSrc, altText, genre, title, price }: any) => {
  return (
    <div className="hover:scale-105 duration-200 flex flex-col relative px-3">
      <figure>
        <img
          className="transition cursor-pointer"
          src={imageSrc}
          width="320"
          loading="lazy"
          alt={altText}
        />
      </figure>

      <div>
        <a
          href=""
          className="absolute top-3 left-6 p-2 bg-orange-500 text-white rounded"
        >
          {genre}
        </a>

        <h3 className="mt-4 my-2">
          <a href="#" className="font-medium text-xl">
            {title.toUpperCase()}
          </a>
        </h3>

        <p className="text-lg">
          Entry Fee: <span className="text-orange-400">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default GameCard;
