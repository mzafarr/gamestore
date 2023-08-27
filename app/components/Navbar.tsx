import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="bg-gray-800 px-4 sm:px-14 text-lg py-5 flex justify-between gap-x-3 w-screen">
      <a className="text-orange-400 text-2xl mr-3 sm:mr-8 font-bold" href="#">GAMICS</a>
      <nav className="flex w-screen  gap-x-3">
        <a className="hidden sm:block hover:text-orange-400 transform px-3" href="#">
          HOME
        </a>
        <a className="hidden sm:block hover:text-orange-400 transform px-3" href="#shop">
          SHOP
        </a>
        <a className="hidden sm:block hover:text-orange-400 transform px-3" href="#blog">
          BLOG
        </a>
        <a className="hidden sm:block hover:text-orange-400 transform px-3" href="#contact">
          CONTACT
        </a>
      </nav>
      <button className="px-3 cursor-pointer">
        <AiOutlineShoppingCart size={30}/>
      </button>
      <button className="cursor-pointer">
        <BsSearch size={25}/>
      </button>
    </div>
  );
};

export default Navbar;
