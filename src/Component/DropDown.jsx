
import React,{ useState } from 'react'



const DropDown = ({files}) => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

 
  return (
    <div className="">
                <h2 className="title_18_600 leading-normal opacity-80 text-left mb-4">
                  Videodars yozma variantini yuklab olish
                </h2>
                <div className="group flex justify-start gap-x-5 mb-8">
                  <div className="relative" data-te-dropdown-ref>
                    <button
                      onClick={()=>setActive2(!active2)}
                      className="flex border enabled:hover:border-gray-400 disabled:opacity-75  items-center gap-x-4 whitespace-nowrap rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
                      type="button"
                      id="dropdownMenuButton2tx"
                      data-te-dropdown-toggle-ref
                      aria-expanded="false"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <span className=" pr-4 w-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      PDF
                    </button>
                    <ul
                      className={ ` ${active2 ? '' : 'hidden' }  absolute z-[1000] float-left m-0  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg  [&[data-te-dropdown-show]]:block `   }  
                      aria-labelledby="dropdownMenuButton2tx"
                      data-te-dropdown-menu-ref
                    >
                      <span className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 dark:text-neutral-200">
                        Tanlang
                      </span>
                      {
                        files && files?.map((item) =>(
                          <li key={item.id}>
                        <a
                          className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 "
                          href="#"
                          data-te-dropdown-item-ref
                        >
                          {item.extension}
                        </a>
                      </li>
                        ))
                      }
                     
                    </ul>
                  </div>
                  <div className="relative" data-te-dropdown-ref>
                        <button
                        onClick={()=>setActive(!active)}
                          className="flex border enabled:hover:border-gray-400 disabled:opacity-75 items-center gap-x-4 whitespace-nowrap rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
                          type="button"
                          id="dropdownMenuButton1tx"
                          data-te-dropdown-toggle-ref
                          aria-expanded="false"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <span className="pr-4 w-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          PDF
                        </button>
                        <ul className={` ${active ? '' : 'hidden'}    absolute z-[1000] float-left m-0  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg  [&[data-te-dropdown-show]]:block`} aria-labelledby="dropdownMenuButton1tx" data-te-dropdown-menu-ref>
                          <span className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 dark:text-neutral-200">
                            Tanlang
                          </span>
                          {files &&
                            files.map((item) => (
                              <li key={item.id} className=''>
                                <a
                                  className="block  w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                  href={item.srcUrl}
                                  onClick={()=>setActive(!active)}
                                  // Fayl URL-sini ko'rsatish
                                  target="_blank" // Yangi oynada ochish uchun
                                  rel="noopener noreferrer" // Tabiiy sekretlik uchun
                                  data-te-dropdown-item-ref
                                >
                                  {item.title} {/* Fayl nomi */}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                  {/* <div className="relative" data-te-dropdown-ref>
                    <a
                      href={files[0].srcUrl}
                      target='_blank'
                      className="flex items-center gap-x-4 whitespace-nowrap rounded bg-[#00AE30] px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      type="button"
                      id="dropdownMenuButton2tx"
                      data-te-dropdown-toggle-ref
                      aria-expanded="false"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <span className=" pr-4 w-2">{svg_download}</span>
                      Yuklab olish
                    </a>
                    <ul
                      className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                      aria-labelledby="dropdownMenuButton2tx"
                      data-te-dropdown-menu-ref
                    >
                      <span className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 dark:text-neutral-200">
                        Dropdown item text
                      </span>
                      <li>
                        <a
                          className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                          href="#"
                          data-te-dropdown-item-ref
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                          href="#"
                          data-te-dropdown-item-ref
                        >
                          Another action
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
                
              </div>
    


  )
}

export default DropDown

// function EditInactiveIcon(props) {
// return (
// <svg
// {...props}
// viewBox="0 0 20 20"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path
//   d="M4 13V16H7L16 7L13 4L4 13Z"
//   fill="#EDE9FE"
//   stroke="#A78BFA"
//   strokeWidth="2"
// />
// </svg>
// )
// }

// function EditActiveIcon(props) {
// return (
// <svg
// {...props}
// viewBox="0 0 20 20"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path
//   d="M4 13V16H7L16 7L13 4L4 13Z"
//   fill="#8B5CF6"
//   stroke="#C4B5FD"
//   strokeWidth="2"
// />
// </svg>
// )
// }

// function DuplicateInactiveIcon(props) {
// return (
// <svg
// {...props}
// viewBox="0 0 20 20"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path
//   d="M4 4H12V12H4V4Z"
//   fill="#EDE9FE"
//   stroke="#A78BFA"
//   strokeWidth="2"
// />
// <path
//   d="M8 8H16V16H8V8Z"
//   fill="#EDE9FE"
//   stroke="#A78BFA"
//   strokeWidth="2"
// />
// </svg>
// )
// }

// function DuplicateActiveIcon(props) {
// return (
// <svg
// {...props}
// viewBox="0 0 20 20"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path
//   d="M4 4H12V12H4V4Z"
//   fill="#8B5CF6"
//   stroke="#C4B5FD"
//   strokeWidth="2"
// />
// <path
//   d="M8 8H16V16H8V8Z"
//   fill="#8B5CF6"
//   stroke="#C4B5FD"
//   strokeWidth="2"
// />
// </svg>
// )
// }

// function ArchiveInactiveIcon(props) {
// return (
// <svg
// {...props}
// viewBox="0 0 20 20"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <rect
//   x="5"
//   y="8"
//   width="10"
//   height="8"
//   fill="#EDE9FE"
//   stroke="#A78BFA"
//   strokeWidth="2"
// />
// <rect
//   x="4"
//   y="4"
//   width="12"
//   height="4"
//   fill="#EDE9FE"
//   stroke="#A78BFA"
//   strokeWidth="2"
// />
// <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
// </svg>
// )
// }

// function ArchiveActiveIcon(props) {
// return (
// <svg
// {...props}
// viewBox="0 0 20 20"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <rect
//   x="5"
//   y="8"
//   width="10"
//   height="8"
//   fill="#8B5CF6"
//   stroke="#C4B5FD"
//   strokeWidth="2"
// />
// <rect
//   x="4"
//   y="4"
//   width="12"
//   height="4"
//   fill="#8B5CF6"
//   stroke="#C4B5FD"
//   strokeWidth="2"
// />
// <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
// </svg>
// )
// }

// function MoveInactiveIcon(props) {
// return (
// <svg
// {...props}
// viewBox="0 0 20 20"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
// <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
// <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
// </svg>
// )
// }

// function MoveActiveIcon(props) {
// return (
// <svg
// {...props}
// viewBox="0 0 20 20"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
// <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
// <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
// </svg>
// )
// }

// function DeleteInactiveIcon(props) {
// return (
// <svg
// {...props}
// viewBox="0 0 20 20"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <rect
//   x="5"
//   y="6"
//   width="10"
//   height="10"
//   fill="#EDE9FE"
//   stroke="#A78BFA"
//   strokeWidth="2"
// />
// <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
// <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
// </svg>
// )
// }

// function DeleteActiveIcon(props) {
// return (
// <svg
// {...props}
// viewBox="0 0 20 20"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <rect
//   x="5"
//   y="6"
//   width="10"
//   height="10"
//   fill="#8B5CF6"
//   stroke="#C4B5FD"
//   strokeWidth="2"
// />
// <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
// <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
// </svg>
// )
// }