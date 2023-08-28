import React from "react";
import { BlogCard } from "./BlogCard";

function Blog() {
  return (
    <section className="py-20 mx-auto bg-white text-gray-900" id="blog" aria-label="blog">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center text-5xl font-bold py-3">
        LATEST NEWS & <span className="text-orange-400">ARTICLES</span>
        </h2>
        <p className="text-center mx-auto pb-8 sm:w-[40vw]">
          Compete With 100 Players On A Remote Island For Winner Takes Showdown
          Known Issue Where Certain Skin Strategic
        </p>

        <div className="gap-x-4 w-screen flex justify-center items-center">
          <BlogCard
            imgSrc="./images/blog-1.jpg"
            altText="Shooter Action Video"
            title="Shooter Action Video"
            date="September 19, 2022"
          />
          <BlogCard
            imgSrc="./images/blog-2.jpg"
            altText="The Walking Dead"
            title="The Walking Dead"
            date="September 19, 2022"
          />
          <BlogCard
            imgSrc="./images/blog-3.jpg"
            altText="Defense Of The Ancients"
            title="Defense Of The Ancients"
            date="September 19, 2022"
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
