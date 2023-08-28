import { AiOutlineShoppingCart } from "react-icons/ai";
export const ProductCard = ({ imgSrc, altText, category, title, price }) => {
  return (
    <div className="flex flex-col relative cursor-pointer hover:scale-105 duration-200">
      <figure className="card-banner img-holder">
        <img
          src={imgSrc}
          width="300"
          height="260"
          loading="lazy"
          alt={altText}
          className="img-cover"
        />
      </figure>

      <a className="absolute bottom-20 left-1 ml-1 px-2 py-1 bg-orange-400">
        {category}
      </a>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start py-2">
          <h3 className="">{title}</h3>
          <p className="text-orange-300">${price}</p>
        </div>
        <div className="p-2 rounded hover:bg-orange-400 duration-200">
          <AiOutlineShoppingCart size={25} className="" />
        </div>
      </div>
    </div>
  );
};
