import React, { useEffect, useRef, useState } from "react";
import "../style/Verify.css";
import frame from "../svg/Frame.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";

import {  useNavigate } from "react-router-dom";

const VerifyCode = (props) => {
  const [code, setVerificationCode] = useState("");
  const { phone } = useParams();


  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const [time, setTime] = useState(60);
  const verify_API = "https://shark.brim.uz/api/auth/register/verify";
  const btn = document.querySelector("button"),
    spinner = document.querySelector(".fa-circle-notch"),
    icon = document.querySelector("i"),
    btnText = document.querySelector(".btgn-text");
  const navigate = useNavigate();
  async function fetchPost() {
    setLoading(true);
    try {
      const response = await fetch(verify_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phone?.slice(1),
          code: code,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json(); // Extracting data from the response
      setLoading(false);
      setData(data);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.error("Error fetching data:", error);
      throw new Error("Error fetching data");
    }
  }
  const showSuccessToast = () => {
    toast.success("Hush kelinsiz, Muoffaqiyatli amalga oshirilda!");
  };

  const showErrorToast = () => {
    toast.error("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
  };
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()]; // Inputlar uchun ref lar

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    console.log(value);

    if (/^\d+$/.test(value)) {
      // Ensure the entered value is a digit

      setVerificationCode((prevCode) => {
        const updatedCode = [...prevCode]; // Create a copy of the code
        updatedCode[index] = value;
        return updatedCode.join(""); // Join all digits
      });

      // Handle moving to the next input
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    } else if (value === "") {
      // Handle backspace or deleting a value
      setVerificationCode((prevCode) => {
        const updatedCode = [...prevCode];
        updatedCode[index] = "";
        return updatedCode.join("");
      });

      // Move to the previous input (if available) when backspacing an empty input
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };
  const verify = () => {
    toast.success("Hush kelibsiz", {
      position: "top-right",
      autoClose: 3000, // in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    navigate("/");
  };

  // Timer qo'shish uchun useEffect
  const handleTimer = () => {
    setTime(60);
  };

  useEffect(() => {
    let intervalId;

    if (time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalId); // Timer tugagan
    }

    return () => {
      clearInterval(intervalId); // Component o'chib ketganda intervalni to'xtatish
    };
  }, [time]);

 
  const handleVery = () => {
   
    fetchPost();
    btn.disabled = false;

    btn.style.cursor = "wait";
 
    icon.classList.replace("fa-check", "fa-circle-notch");
    setTimeout(() => {
      btn.style.pointerEvents = "none";
    
      icon.classList.replace("fa-circle-notch", "fa-check");
      icon.classList.add(".checked");
      btn.disabled = true;
    }, 2000);
    setTimeout(() => {
   
    }, 3000);
  }
  useEffect(()=>{
     if(data.status === 200){
      setIsVerified(true);
     }
     if(data.status === 403){
      setVerificationError(data.message)
     }
     
  },[data])
 return (
    <>
      <div
        id="authentication-modal"
        aria-hidden="true"
        className=" overflow-x-hidden  bg-[#0F1F2C80] overflow-y-auto flex sm:h-full  fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 sm:align-bottom z-50 justify-center mx-auto items-center"
      >
        <div className="relative w-full  mx-auto max-w-md   sm:py-10   grid place-items-center   md:h-auto">
          <div className="bg-white md:w-[467px] sm:w-[400px] w-[90%] rounded-3xl shadow relative dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-gray-400 bg-transparent hover:bg-gray-200 cursor-pointer hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {!isVerified ? (
              <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
                <div className=" flex items-center justify-start gap-x-20">
                  <svg
                    className="cursor-pointer"
                    onClick={() => navigate(-1)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M4.24612 16.0001L14.2897 26.0437C14.5547 26.3086 14.6837 26.6206 14.6769 26.9796C14.67 27.3385 14.5341 27.6505 14.2692 27.9154C14.0043 28.1804 13.6923 28.3129 13.3333 28.3129C12.9743 28.3129 12.6624 28.1804 12.3975 27.9154L2.16925 17.7078C1.92818 17.4667 1.74954 17.1966 1.63332 16.8975C1.5171 16.5984 1.45898 16.2992 1.45898 16.0001C1.45898 15.7009 1.5171 15.4018 1.63332 15.1026C1.74956 14.8035 1.92821 14.5334 2.16925 14.2924L12.3975 4.06422C12.6624 3.79926 12.9778 3.67019 13.3436 3.67701C13.7094 3.68386 14.0248 3.81976 14.2897 4.08472C14.5547 4.34967 14.6872 4.66163 14.6872 5.02058C14.6872 5.37956 14.5547 5.69153 14.2897 5.95648L4.24612 16.0001Z"
                      fill="black"
                    />
                  </svg>
                  <h2 className="title_24_600 leading-8">Kodni kiriting</h2>
                </div>
                <h1 className="flex text-center justify-center title_16_600 items-center leading-normal">
                  {phone} telefon raqamiga kod yuborildi, ushbu kodni kiriting
                </h1>
                <p className="title_16_400 text-[#6D7983] text-center">
                  Kodni kiriting
                </p>
                <div className=" code__enter flex flex-nowrap items-center justify-evenly py-4 ">
                  {inputRefs.map((inputRef, index) => (
                    <input
                      className=""
                      key={index}
                      ref={inputRef}
                      type="text"
                      value={code[index] || ""}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  ))}
                </div>
                {time ? (
                  <span className="text-center mx-auto block">0:{time}</span>
                ) : (
                  <p
                    onClick={handleTimer}
                    className="text-center text-[#00AE30] "
                  >
                    Qayta yuborish
                  </p>
                )}
                {verificationError && (
                  <p className="flex justify-center items-center">
                    {verificationError}
                  </p>
                )}
                {isVerified ? (
                  <p>Tasdiq qilindi! Endi sahifaga kirishingiz mumkin.</p>
                ) : (
                  <button
                    onClick={() => handleVery()}
                    className="  mx-auto block w-2/3 bg-[#00AE30] outline-[#00ae3152]  hover:opacity-70 active:opacity-90 title_17_500 text-white text-center hover px-14 py-3  rounded-lg"
                  >
                    <i className="fas fa-check text-white"></i>
                
                    <span className="btn-text text-white "> Tasdiqlash </span>
                  </button>
                )}
              </div>
            ) : (
              <div className=" px-10 py-4 flex justify-center items-center gap-y-7  flex-col ">
                <div className="w-[90px] h-[90px]">
                  <img src={frame} alt="succes" />
                </div>
                <div className="title_24_600 leading-8 text-center">
                  Muvaffaqiyatli ro’yxatdan o’tdingiz!
                </div>
                <Link
                  onClick={() => verify()}
                  className=" mb-4  mx-auto block w-2/3 bg-[#00AE30] outline-[#00ae3152]  hover:opacity-70 active:opacity-90 title_17_500 text-white text-center hover px-14 py-3  rounded-lg"
                >
                  Tizimga kirish
                </Link>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyCode;
