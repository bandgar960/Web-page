import React from "react";

import {  BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            {/* <div className="header_top__icon_wrapper">
              <BsFacebook />
            </div> */}
            <div className="header_top__icon_wrapper">
              <a href="https://twitter.com/pravin___08">
              <BsTwitter />
              </a>
            </div>
            
              <div className="header_top__icon_wrapper" >
              <a href="https://www.instagram.com/pravin___official___08/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1">
              <BsInstagram />
              </a>
            </div>
            
            <div className="header_top__icon_wrapper">
              <a href="https://www.linkedin.com/in/bandgar-pravin-bhaskar-8b22b921b/">
              <BsLinkedin />
              </a>
            </div>
          </div>

          <div className="text-red-500 text-[12px]">
            <b>FREE SHIPPING</b> Contact Me
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="INR">INR</option>
            </select>

            <select
              className="text-blue-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
