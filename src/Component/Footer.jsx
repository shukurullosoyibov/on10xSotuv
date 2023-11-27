import React, { useState } from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const [activeItem, setActiveItem] = useState("Asosiy");
  const menuItems = [
    { to: "hero", text: "Asosiy" },
    { to: "courses", text: "Kurslar" },
    { to: "aboute", text: "Biz haqimizda" },
    { to: "freecourse", text: "Bepul darslar" },
    { to: "partner", text: "Hamkorlar" },
    { to: "readers", text: "Fikrlar" },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <section className="navBG">
      <navbar className="container  justify-between cont mx-auto flex flex-wrap  flex-col py-5 md:flex-col">
        <div className="flex flex-row justify-start  ">
          <a
            href="/"
            className="flex title-font font-medium md:mx-0 mx-auto mb-3 items-center w-32 xl:w-40 logoBG text-gray-900   md:mb-0"
          >
            <span className="title_16_600 mx-auto sm:text-[16px] text-[14px] ">
              LOGO
            </span>
          </a>
          <nav className=" footer_nav hidden  md:flex flex-nowrap items-center justify-center">
            {menuItems?.map((menuItem, index) => (
              <Link
                key={index}
                to={menuItem.to}
                spy={true}
                smooth={true}
                offset={-20}
                duration={1000}
                className={` ${
                  index !== menuItems.length - 1 ? "mr-5" : "mr-0"
                }   hover:text-gray-900 cursor-pointer title_16_400 menuColor ${
                  activeItem === menuItem.text ? "active" : ""
                }`}
                onClick={() => handleItemClick(menuItem.text)}
              >
                {menuItem.text}
              </Link>
            ))}
          </nav>
        </div>

        <p className="title_14_400 leading-4 mx-auto">
          Copyright InSoft Software Group © 2023. All Rights Reserved.
        </p>
      </navbar>
    </section>
  );
};

export default Footer;
