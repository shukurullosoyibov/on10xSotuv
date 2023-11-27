import React, { useState, useEffect, useRef, createRef } from "react";
import { svg_person2, svg_reply } from "../svg/sgv";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useSound from "use-sound";
import mySound from "../sound/click.mp3";
import mySoundRemove from "../sound/remove.mp3";
import "../style/IzohCard.css";
const IzohCard = ({ usename, data, user_izoh, javob_izohlar, id, item }) => {
  const [reply, setReply] = useState(false);
  const [commentEnd, setCommentEnd] = useState(false);
  const [coment, setComent] = useState("");
  const btnRef = useRef(null);
  const btnEditRef = useRef(null);
  const nodeRef = useRef(null);
  const textAreaRef = useRef(null);
  const [playSound] = useSound(mySound);
  const [playSoundRemove] = useSound(mySoundRemove);
  function format12HourTime(date) {
    const years = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // 0 soati 12 ga o'zgardi.
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${day}:${month}:${years} ${formattedHours}:${formattedMinutes} ${ampm}`;
  }
  const inputDate = new Date();
  const formattedDate = format12HourTime(inputDate);
  const handleBtn = () => {
    setReply((prew) => !prew);

    setCommentEnd(true);
    playSound();
  };
  const handleEditBtn = () => {
    setComent("");
    setCommentEnd(false);
    playSoundRemove();
  };

  useEffect(() => {}, []);
  useEffect(() => {
    if (coment.length > 3) {
      btnRef.current.classList.remove("hidden");
    } else if (coment.length < 3) {
      if (!btnRef.current.classList.contains("hidden")) {
        btnRef.current.classList.add("hidden");
      }
    }
  }, [coment]);

  const clicker = () => {
    // alert('clicer');
    setReply(!reply);
  };

  return (
    <>
      <div>
        <div className="izohlar rounded-2xl mb-5 bg-[#F8FAFC] gap-x-[18px] p-5 flex flex-nowrap  ">
          <div className=" bg-[#E8F1F8] w-[60px] h-[52px] grid place-items-center mx-auto rounded-full">
            {svg_person2}
          </div>
          <div className="flex  w-full flex-col justify-between">
            <div className="flex items-center w-full  justify-between">
              <h2 className="title_20_600 opacity-80  inline-block leading-normal">
                {usename}
              </h2>
              <p className="title_16_400 ">{data}</p>
            </div>
            <p className=" text-left title_16_400 opacity-70 mb-3">
              {user_izoh}
            </p>

            {reply && (
              <textarea
                className={`  
                  border-[#206732] outline-[#F8FAFC] resize-none p-2 text-[14px] rounded-xl  `}
                placeholder="izoh ..."
                ref={textAreaRef}
                name=""
                id={id}
                cols="40"
                rows="4"
                onChange={(e) => setComent(e.target.value)}
                value={coment}
                autoFocus
              ></textarea>
            )}

            <button
              ref={btnRef}
              onClick={handleBtn}
              className="hidden remove-btn px-4 py-2 bg-slate-800 active:opacity-50 hover:opacity-70 rounded-full text-white ml-auto"
            >
              {commentEnd ? "edit" : "send"}
            </button>

            <div
              onClick={() => clicker()}
              className="cursor-pointer hover:opacity-50 active:opacity-75 self-end flex flex-row gap-x-4"
            >
              {svg_reply}
              <span className="title_16_500_green"> Javob berish</span>
            </div>
          </div>
        </div>
        {javob_izohlar[0].izoh?.length > 0 && (
          <div className="izohlar  rounded-2xl mb-5 javob__izohlar  mr-0 gap-x-[18px] p-5 flex flex-nowrap  ">
            <div className=" bg-[#cee7f9] w-[60px] h-[52px] grid place-items-center mx-auto rounded-full">
              {svg_person2}
            </div>
            <div className="flex w-full flex-col justify-between">
              <div className="flex items-center w-full  text-black opacity-80 justify-between">
                <h2 className="text-[20px] font-semibold   inline-block leading-normal">
                  {javob_izohlar[0]?.usename}
                </h2>
                <p className="text-[16px]  ">{javob_izohlar[0]?.data}</p>
              </div>
              <p className=" text-left text-[16px]  opacity-70 mb-3">
                {javob_izohlar[0]?.izoh}
              </p>
            </div>
          </div>
        )}

        <CSSTransition
          in={commentEnd}
          nodeRef={nodeRef}
          timeout={300}
          classNames="alert"
          unmountOnExit
          //  onEnter={() => handleBtn(false)}
          //  onExited={() => handleEditBtn(true)}
        >
          <div
            ref={nodeRef}
            className="izohlar javob__izohlar rounded-2xl mb-5  mr-0 gap-x-[18px] p-5 flex flex-nowrap  "
          >
            <div className=" bg-[#E8F1F8] w-[60px] h-[52px] grid place-items-center mx-auto rounded-full">
              {svg_person2}
            </div>
            <div className="flex  w-full flex-col justify-between">
              <div className="flex items-center text-black opacity-80  w-full  justify-between">
                <h2 className=" text-[20px] font-semibold   inline-block leading-normal">
                  Mehmon
                </h2>
                <p className="text-[16px]  ">{formattedDate}</p>
              </div>
              <p className=" text-left font-extralight text-[16px]   mb-3">
                {coment}
              </p>
              <button
                ref={btnEditRef}
                onClick={() => handleEditBtn()}
                className=" px-4 py-2 bg-slate-800 active:opacity-50 hover:opacity-70 rounded-full text-white ml-auto"
              >
                delete
              </button>
            </div>
          </div>
        </CSSTransition>
      </div>
      
    </>
  );
};

export default IzohCard;
