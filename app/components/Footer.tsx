import React from "react";
import {
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";
function Footer() {
  return (
    <footer className="py-14 bg-gray-900">
      <div className="flex">
        <div className="flex sm:w-[78vw] justify-between mx-auto">
          <div className="flex flex-col">
            <a
              className="text-orange-400 text-2xl mr-3 sm:mr-8 font-bold py-2 px-4"
              href="#"
            >
              GAMICS
            </a>
            <p className="px-4">Gamics is the go-to marketplace for games.</p>
            <ul className="flex flex-col px-4">
              <address className="item-text">
                Address : MM Alam Gulberg III
              </address>
              <a href="tel:+921245654235" className="item-text">
                Phone : +92 1245 654 235
              </a>
              <a href="mailto:info@exemple.com" className="item-text">
                Email : info@exemple.com
              </a>
            </ul>
          </div>
          <ul className="flex flex-col px-4">
            <p className="text-2xl text-orange-400 font-semibold py-2">Products</p>
            <a href="#" className="footer-link">
              Graphics (26)
            </a>
            <a href="#" className="footer-link">
              Backgrounds (11)
            </a>
            <a href="#" className="footer-link">
              Fonts (9)
            </a>
            <a href="#" className="footer-link">
              Music (3)
            </a>
            <a href="#" className="footer-link">
              Photography (3)
            </a>
          </ul>
          <ul className="flex flex-col">
            <p className="text-orange-400 font-semibold text-2xl py-2">Need Help?</p>
            <a href="#" className="footer-link">
              Terms & Conditions
            </a>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Refund Policy
            </a>
            <a href="#" className="footer-link">
              Affiliate
            </a>
            <a href="#" className="footer-link">
              Use Cases
            </a>
          </ul>
          <div className="footer-wrapper">
            <div className="flex flex-col">
              <p className="text-2xl font-semibold text-orange-400 py-1 -mr-4">
                Follow Us
              </p>
              <ul className="flex cursor-pointer justify-center items-center">
                <SlSocialInstagram size={40} className="pr-3" />
                <SlSocialTwitter size={40} className="pr-3" />
                <SlSocialYoutube size={40} className="" />
              </ul>
            </div>
          </div>
        </div>
      </div>
          <img
            src="./images/footer-bottom-img.png"
            width="340"
            height="21"
            loading="lazy"
            alt=""
            className="sm:ml-[11vw]"
          />
    </footer>
  );
}

export default Footer;
