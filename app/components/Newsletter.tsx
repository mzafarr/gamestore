import React from "react";
import { AiOutlineSend } from "react-icons/ai";

export const Newsletter = () => {
  return (
    <section className="bg-white -mb-14" aria-label="newsletter">
        <div className="bg-gray-900 sm:w-[80vw] py-8 px-2 sm:px-8 mx-auto rounded-full flex justify-between">
          <h2 className="text-3xl font-bold">
            OUR <span className="text-orange-400">NEWSLETTER</span>
          </h2>
          <form action="" className="flex">
            <div className="">
              <div className="flex justify-center items-center">
                <input
                  type="email"
                  name="email_address"
                  aria-label="email"
                  placeholder="Enter your email"
                  required
                  className="border bg-gray-900 border-gray-700 text-white transform outline-none p-2"
                />
              </div>
            </div>
            <button type="submit" className="flex justify-center items-center p-2 bg-orange-400">
              <span className="span">Subscribe</span>
              <AiOutlineSend />
            </button>
          </form>
        </div>
    </section>
  );
};
