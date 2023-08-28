export const BlogCard = ({ imgSrc, altText, title, date }) => {
  return (
    <div className="flex flex-col hover:scale-105 duration-200 cursor-pointer">
      <figure className="card-banner img-holder">
        <img
          src={imgSrc}
          width="400"
          loading="lazy"
          alt={altText}
          className="img-cover"
        />
      </figure>
      <div className="">
        <ul className="card-meta-list">
          <h3 className="pt-2 text-gray-800 text-2xl font-semibold">{title}</h3>
          <time dateTime="2022-09-19" className=" py-2">
            {date}
          </time>
        </ul>
        <button className="py-2 my-2 font-semibold hover:bg-orange-400  duration-200 border text-gray-700 hover:text-white p-2">
          Read More
        </button>
      </div>
    </div>
  );
};
