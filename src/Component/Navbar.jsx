import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { svg_menu, svg_person } from "../svg/sgv";
import "../style/media.css";
import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";
import "../style/navbar.css";




function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
}
const userProfil_API =
  "https://shark.brim.uz/api/profile-manager/profile/index";
const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [clicked, setClick] = useState(false);
  const [activeItem, setActiveItem] = useState("Asosiy");
  const [user, setUser] = useState(getUser());
 const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    if (user) {
      console.log(user);
      console.log(user?.data?.firstname);
    }
    function handleScroll() {
          if (window.scrollY > 100) {
            setNavClass(
              " sticky w-full top-0 duration-400 ease-in transition-all z-40 scrol"
            );
          }
          if (window.scrollY > 400){
            setHidden(false);
          }
           else {
            setNavClass(
              "navBG sticky w-full top-0 duration-400 ease-in transition-all z-40"
              );
          }
        }
        
        // Event tinglovchisini qo'shish
        window.addEventListener("scroll", handleScroll);
    
        // Event tinglovchisini o'chirish (komponent qayta yuklanda)
        return () => {
       
          setVisible(!isVisible);
          window.removeEventListener("scroll", handleScroll);
        };
  }, []);

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");

    document.querySelector("menu").classList.toggle("profile-anim");
    setTimeout(() => {
      setHidden(!hidden);
    }, 900);
  };
  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);

    document.querySelector("menu").classList.toggle("profile-anim");
    setTimeout(() => {
      setHidden(!hidden);
    }, 300);
    setTimeout(() => {
      navigate('/')
      window.location.reload(true);
    }, 500);
  };
  const handleAutho = () => {
    navigate("/autho");
    document.querySelector("menu").classList.toggle("profile-anim");
    setTimeout(() => {
      setHidden(!hidden);
    }, 900);

    localStorage.clear();
  };
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const clicker = () => {
    setClick(!clicked);
  };

  const menuItems = [
    // { to: "/", text: "Asosiy" },
    { to: "courses", text: "Kurslar" },
    { to: "aboute", text: "Biz haqimizda" },
    { to: "freecourse", text: "Bepul darslar" },
    { to: "partner", text: "Hamkorlar" },
    { to: "readers", text: "Fikrlar" },
  ];
  const Asosiy = () => {
    navigate("/");
    window.scrollTo(0, 0);
    // scroll.scrollToTop();
    setActiveItem("Asosiy");
  };
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const [navClass, setNavClass] = useState(
    "navBG sticky top-0 w-full transition-all z-40"
  );

  
  return (
    <>
      <section className={navClass}>
        <div className="  container  mx-auto flex flex-1 flex-wrap flex-row justify-between py-5 md:flex-row items-center">
          <span onClick={clicker} className=" md:hidden block mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.25 17.6347C4.0375 17.6347 3.85938 17.5628 3.71563 17.419C3.57188 17.2751 3.5 17.0969 3.5 16.8844C3.5 16.6718 3.57188 16.4937 3.71563 16.3501C3.85938 16.2065 4.0375 16.1347 4.25 16.1347H19.75C19.9625 16.1347 20.1406 16.2066 20.2843 16.3504C20.4281 16.4942 20.5 16.6724 20.5 16.885C20.5 17.0976 20.4281 17.2757 20.2843 17.4193C20.1406 17.5629 19.9625 17.6347 19.75 17.6347H4.25ZM4.25 12.7501C4.0375 12.7501 3.85938 12.6782 3.71563 12.5344C3.57188 12.3905 3.5 12.2123 3.5 11.9998C3.5 11.7872 3.57188 11.6091 3.71563 11.4655C3.85938 11.3219 4.0375 11.2501 4.25 11.2501H19.75C19.9625 11.2501 20.1406 11.322 20.2843 11.4658C20.4281 11.6096 20.5 11.7878 20.5 12.0004C20.5 12.213 20.4281 12.3911 20.2843 12.5347C20.1406 12.6783 19.9625 12.7501 19.75 12.7501H4.25ZM4.25 7.86545C4.0375 7.86545 3.85938 7.79355 3.71563 7.64973C3.57188 7.50593 3.5 7.32773 3.5 7.11513C3.5 6.90254 3.57188 6.72446 3.71563 6.58088C3.85938 6.43728 4.0375 6.36548 4.25 6.36548H19.75C19.9625 6.36548 20.1406 6.43739 20.2843 6.5812C20.4281 6.72502 20.5 6.90322 20.5 7.1158C20.5 7.3284 20.4281 7.50649 20.2843 7.65008C20.1406 7.79366 19.9625 7.86545 19.75 7.86545H4.25Z"
                fill="black"
              />
            </svg>
          </span>
          <a
            href="/"
            className="flex title-font font-medium items-center w-32 xl:w-40 logoBG text-gray-900   md:mb-0"
          >
            <span className="title_16_600 mx-auto sm:text-[16px] text-[14px] ">
              LOGO
            </span>
          </a>

          <nav className=" navbar flex flex-nowrap items-center justify-center">
            <span onClick={()=>Asosiy()} className={` 
                   mr-5 
                   hover:text-gray-900 cursor-pointer title_16_400 menuColor active`} > Asosiy</span>
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

          <span className=" relative cursor-pointer  inline-flex  items-center   rounded-3xl">
            <span
              onClick={() => setHidden(!hidden)}
              className=" transition-all  ease-out duration-300 relative logoBG inline-flex items-center px-5 munesec hover:bg-indigo-600 rounded-3xl"
            >
              {" "}
              {svg_person}
              {svg_menu}
            </span>

            {hidden ? (
              <>
                {user?.data ? (
                  <menu
                    className={`    absolute top-[100%] mt-2 right-0  bg-[#FFF] w-[275px] h-[187px] rounded-xl grid place-items-center p-6 shadow-[0px 9px 18px 0px rgba(0, 0, 0, 0.10)]`}
                  >
                    <p className="title_16_400 text-black opacity-50">salom</p>

                    <h2 className="title_18_600 leading-5">
                      
                      {user.data.firstname} {user.data.lastname}
                    </h2>
                    <button
                      onClick={() => {
                        document
                          .querySelector("menu")
                          .classList.toggle("profile-anim");
                        setTimeout(() => {
                          setHidden(!hidden);
                        }, 900);

                        navigate("/my-courses");
                      }}
                      className="title_16_400  text-[#000] leading-4 flex gap-x-2 justify-center items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.88537 18.7959C8.47398 19.053 8.05691 19.0672 7.63414 18.8384C7.21138 18.6096 7 18.2598 7 17.7889V6.21114C7 5.74021 7.21138 5.39035 7.63414 5.16156C8.05691 4.93278 8.47398 4.94698 8.88537 5.20415L18.4381 11.0056C18.8127 11.241 19 11.5725 19 12C19 12.4275 18.8127 12.759 18.4381 12.9944L8.88537 18.7959ZM9.04813 16.3636L16.2429 12L9.04813 7.63638V16.3636Z"
                          fill="#098BED"
                        />
                      </svg>
                      Mening kurslarim
                    </button>
                    <a
                      onClick={() => handleLogOut()}
                      className="title_16_400  text-[#E53131] leading-4 inline-flex gap-x-2 justify-center items-center "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5.3077 20.5C4.80257 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.1974 3.5 18.6923V5.3077C3.5 4.80257 3.675 4.375 4.025 4.025C4.375 3.675 4.80257 3.5 5.3077 3.5H11.2596C11.4724 3.5 11.6506 3.5718 11.7942 3.7154C11.9378 3.85898 12.0096 4.03718 12.0096 4.25C12.0096 4.46282 11.9378 4.64102 11.7942 4.7846C11.6506 4.92818 11.4724 4.99998 11.2596 4.99998H5.3077C5.23077 4.99998 5.16024 5.03203 5.09612 5.09613C5.03202 5.16024 4.99997 5.23077 4.99997 5.3077V18.6923C4.99997 18.7692 5.03202 18.8397 5.09612 18.9038C5.16024 18.9679 5.23077 19 5.3077 19H11.2596C11.4724 19 11.6506 19.0718 11.7942 19.2154C11.9378 19.3589 12.0096 19.5371 12.0096 19.75C12.0096 19.9628 11.9378 20.141 11.7942 20.2846C11.6506 20.4282 11.4724 20.5 11.2596 20.5H5.3077ZM17.6173 12.75H9.84612C9.63331 12.75 9.45511 12.6782 9.31152 12.5346C9.16792 12.391 9.09612 12.2128 9.09612 12C9.09612 11.7872 9.16792 11.609 9.31152 11.4654C9.45511 11.3218 9.63331 11.25 9.84612 11.25H17.6173L15.6942 9.32693C15.5558 9.18846 15.4849 9.01955 15.4817 8.8202C15.4785 8.62085 15.5494 8.44361 15.6942 8.28848C15.8391 8.13336 16.0147 8.05323 16.2211 8.0481C16.4275 8.04297 16.6083 8.11797 16.7634 8.2731L19.8576 11.3673C20.0384 11.5481 20.1288 11.759 20.1288 12C20.1288 12.241 20.0384 12.4519 19.8576 12.6327L16.7634 15.7269C16.6147 15.8756 16.4381 15.949 16.2336 15.9471C16.0292 15.9451 15.8494 15.8666 15.6942 15.7115C15.5494 15.5563 15.4795 15.3781 15.4846 15.1769C15.4898 14.9756 15.5648 14.8025 15.7096 14.6577L17.6173 12.75Z"
                          fill="#E53131"
                        />
                      </svg>
                      <span className="inline-block text-[#E53131]  ">
                        Tizimdan chiqish
                      </span>
                    </a>
                  </menu>
                ) : (
                  <menu className="  absolute top-[100%] mt-2 right-0  bg-[#FFF] w-[275px] h-[160px]   rounded-xl grid place-items-center p-6 shadow-[0px 9px 18px 0px rgba(0, 0, 0, 0.10)]  ">
                    <a
                      onClick={() => handleLogin()}
                      className=" sm:w-[220px] title_16_500 bg-[#00AE30] hover:opacity-70 active:opacity-90 text-[#fff] rounded-lg px-10 py-2 leading-4 flex gap-x-2 justify-center items-center"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M11 16L15 12M15 12L11 8M15 12H3"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      <span className="text-white"> Tizimga kirish</span>
                    </a>
                    <a
                      onClick={() => handleAutho()}
                      className=" sm:w-[220px] title_16_500 hover:opacity-70 active:opacity-90 rounded-lg px-4 py-2 leading-4 flex gap-x-2 justify-center items-center "
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            className="hover:fill-[#00ae318e]"
                            clip-rule="evenodd"
                            d="m6.75001 7c0-1.79493 1.45508-3.25 3.24999-3.25 1.7949 0 3.25 1.45507 3.25 3.25s-1.4551 3.25-3.25 3.25c-1.79491 0-3.24999-1.45507-3.24999-3.25zm3.24999-4.75c-2.62334 0-4.74999 2.12665-4.74999 4.75s2.12665 4.75 4.74999 4.75c2.6234 0 4.75-2.12665 4.75-4.75s-2.1266-4.75-4.75-4.75zm-5.6865 16.1524c.98693-2.1566 3.16283-3.6524 5.6865-3.6524 2.5237 0 4.6996 1.4958 5.6865 3.6524.2078.4542.1134.8704-.1871 1.2142-.3195.3656-.873.6334-1.4994.6334h-7.99999c-.6264 0-1.17984-.2678-1.49941-.6334-.30047-.3438-.39492-.76-.1871-1.2142zm5.6865-5.1524c-3.13193 0-5.82838 1.8578-7.05046 4.5282-.48164 1.0525-.22026 2.0911.42167 2.8255.62282.7126 1.59835 1.1463 2.6288 1.1463h7.99999c1.0305 0 2.006-.4337 2.6288-1.1463.642-.7344.9033-1.773.4217-2.8255-1.2221-2.6704-3.9185-4.5282-7.0505-4.5282zm8-5c.4142 0 .75.33579.75.75v2.25h2.25c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-2.25v2.25c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-2.25h-2.25c-.4142 0-.75-.3358-.75-.75s.3358-.75.75-.75h2.25v-2.25c0-.41421.3358-.75.75-.75z"
                            fill="#00AE30"
                            fill-rule="evenodd"
                          ></path>
                        </g>
                      </svg>
                      <span className="block  text-[#00AE30]  ">
                        Ro'yxatdan o'tish
                      </span>
                    </a>
                  </menu>
                )}
              </>
            ) : null}
          </span>
        </div>

        <div>
          <CSSTransition
            in={clicked}
            timeout={500}
            classNames="sidebar"
            unmountOnExit
          >
            <div className=" sidebar w-[90%] bg-white p-3  fixed left-0 top-0 h-screen ">
              <div className="flex justify-between items-center">
                <a
                  href="/"
                  className="flex title-font font-medium items-center w-32 xl:w-40 logoBG text-gray-900   md:mb-0"
                >
                  <span className="title_16_600 mx-auto sm:text-[16px] text-[14px] ">
                    LOGO
                  </span>
                </a>
                <span
                  onClick={clicker}
                  className="right-0 cursor-pointer hover:drop-shadow-2xl hover:scale-125 active:scale-125 transition-all ease-in-out duration-300  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M12 12.9966L7.20216 17.7945C7.07122 17.9254 6.90663 17.9924 6.70838 17.9954C6.51016 17.9985 6.34254 17.9315 6.20553 17.7945C6.06851 17.6575 6 17.4914 6 17.2962C6 17.101 6.06851 16.9349 6.20553 16.7978L11.0034 12L6.20553 7.20216C6.07458 7.07122 6.00759 6.90663 6.00456 6.70838C6.00152 6.51016 6.06851 6.34254 6.20553 6.20553C6.34254 6.06851 6.50864 6 6.70384 6C6.89905 6 7.06515 6.06851 7.20216 6.20553L12 11.0034L16.7978 6.20553C16.9288 6.07458 17.0934 6.00759 17.2916 6.00456C17.4898 6.00152 17.6575 6.06851 17.7945 6.20553C17.9315 6.34254 18 6.50864 18 6.70384C18 6.89905 17.9315 7.06515 17.7945 7.20216L12.9966 12L17.7945 16.7978C17.9254 16.9288 17.9924 17.0934 17.9954 17.2916C17.9985 17.4898 17.9315 17.6575 17.7945 17.7945C17.6575 17.9315 17.4914 18 17.2962 18C17.101 18 16.9349 17.9315 16.7978 17.7945L12 12.9966Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
              <nav className=" p-3  flex flex-col flex-nowrap    items-start ">
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
                    }   hover:text-gray-900 cursor-pointer text-[16px] py-3 leading-[17px] text-black font-normal text-bl menuColor ${
                      activeItem === menuItem.text ? "active" : ""
                    }`}
                    onClick={() => handleItemClick(menuItem.text)}
                  >
                    {menuItem.text}
                  </Link>
                ))}
              </nav>
            </div>
          </CSSTransition>
        </div>
      </section>
    </>
  );
};

export default Navbar;
