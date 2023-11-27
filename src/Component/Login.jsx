import React, { useState } from 'react';
import { svg_reg } from '../svg/sgv';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../redux/authSlice';
import { loginUser } from '../redux/userSlice';
import { motion, AnimatePresence } from 'framer-motion';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  
  const {loading, data, error} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
   
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    let params = {
      username,
      password,
    }
    dispatch(loginUser(params)).then((result) => {
      if(result.payload.message === 'success'){
        localStorage.setItem('token', result.payload.data.token);
        setTimeout(()=> {
        
          navigate('/');
          window.location.reload();
          toast.success(`Assalomu alaykum `, {
            position: toast.POSITION.TOP_RIGHT,
          })
        },500)
        
       }
       else if(result.payload.message === 'Incorrect phone number or password'){
        toast.error(`Login yoki parol xato, iltimos qayta urinib ko'ring`, {
          position: toast.POSITION.TOP_RIGHT,
        })
       }
       else{
        toast.error(`Nomalum xatolik, iltimos qayta urinib ko'ring`, {
          position: toast.POSITION.TOP_RIGHT,
        })
       }
      }
    )
    .catch((err) => {
      console.log(err);
    }
    )  
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
    return (
      
        <div
        id="authentication-modal"
        aria-hidden="true"
        className=" overflow-x-hidden  bg-[#0F1F2C80]  flex   fixed h-screen md:h-full top-0 left-0 right-0 bottom-0 sm:align-bottom z-50 justify-center mx-auto items-center"
        >
        <div className="relative w-full container  mx-auto grid place-items-center   md:h-auto">
        <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -100, scale:0.7 }} // Boshlang'ich holat
          animate={{ opacity: 1, y: 0, scale:1 }}
          exit={{ opacity: 0, scale: 0.7 }} // Animatsiya davomida
          transition={{ duration: 0.5 }} // Animatsiya davomiyligi
            >
          <div className="bg-white md:w-[467px]  w-[85%] rounded-3xl shadow relative dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={() =>navigate("/") }
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
            
              <form
                className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
                onSubmit={handleSubmit}
              >
                <h3 className="title_24_600 leading-8">
                  Tizimga <span>kirish</span>
                </h3>
                <div>
                  <label
                    htmlFor="number"
                    className="title_14_400_black leading-4 text-black block mb-2 dark:text-gray-300"
                  >
                    Telefon raqamingiz
                  </label>

                  <input
                    type="tel"
                    name="number"
                    id="number"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder=""
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="title_14_400_black leading-4 text-black block mb-2 dark:text-gray-300"
                  >
                    Parol 
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="***********"
                      required
                    />
                    <span
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                    {showPassword ? (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12.0023 15.5769C13.1354 15.5769 14.0977 15.1803 14.8894 14.3871C15.6811 13.5939 16.0769 12.6308 16.0769 11.4977C16.0769 10.3646 15.6803 9.40224 14.8872 8.61058C14.094 7.81891 13.1308 7.42308 11.9977 7.42308C10.8646 7.42308 9.90227 7.81966 9.1106 8.61282C8.31893 9.40601 7.9231 10.3692 7.9231 11.5023C7.9231 12.6353 8.31968 13.5977 9.11285 14.3894C9.90603 15.181 10.8692 15.5769 12.0023 15.5769ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.58748C10.6125 9.06248 11.25 8.79998 12 8.79998C12.75 8.79998 13.3875 9.06248 13.9125 9.58748C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 18.5C9.81155 18.5 7.80547 17.9243 5.98175 16.773C4.15805 15.6217 2.76735 14.0653 1.80965 12.1038C1.76607 12.0269 1.73594 11.9353 1.71927 11.8292C1.70261 11.723 1.69427 11.6132 1.69427 11.5C1.69427 11.3867 1.70261 11.277 1.71927 11.1708C1.73594 11.0646 1.76607 10.9731 1.80965 10.8961C2.76735 8.93461 4.15805 7.37821 5.98175 6.22693C7.80547 5.07564 9.81155 4.5 12 4.5C14.1884 4.5 16.1945 5.07564 18.0182 6.22693C19.8419 7.37821 21.2327 8.93461 22.1904 10.8961C22.2339 10.9731 22.2641 11.0646 22.2807 11.1708C22.2974 11.277 22.3057 11.3867 22.3057 11.5C22.3057 11.6132 22.2974 11.723 22.2807 11.8292C22.2641 11.9353 22.2339 12.0269 22.1904 12.1038C21.2327 14.0653 19.8419 15.6217 18.0182 16.773C16.1945 17.9243 14.1884 18.5 12 18.5ZM12 17C13.8833 17 15.6125 16.5041 17.1875 15.5125C18.7625 14.5208 19.9667 13.1833 20.8 11.5C19.9667 9.81664 18.7625 8.47914 17.1875 7.48748C15.6125 6.49581 13.8833 5.99998 12 5.99998C10.1167 5.99998 8.3875 6.49581 6.8125 7.48748C5.2375 8.47914 4.03333 9.81664 3.2 11.5C4.03333 13.1833 5.2375 14.5208 6.8125 15.5125C8.3875 16.5041 10.1167 17 12 17Z"
                              fill="black"
                              fill-opacity="0.8"
                            />
                          </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M15.7731 12.9729L14.65 11.8499C14.8 11.0217 14.5638 10.2771 13.9413 9.61624C13.3189 8.95534 12.5551 8.69989 11.65 8.84989L10.5269 7.72684C10.7526 7.62556 10.984 7.5496 11.2212 7.49897C11.4583 7.44832 11.7179 7.42299 12 7.42299C13.1346 7.42299 14.0977 7.81882 14.8894 8.61049C15.6811 9.40216 16.0769 10.3653 16.0769 11.4999C16.0769 11.7819 16.0516 12.0448 16.0009 12.2883C15.9503 12.5319 15.8743 12.7601 15.7731 12.9729ZM18.9538 16.0845L17.85 15.0499C18.4833 14.5666 19.0458 14.0374 19.5375 13.4624C20.0292 12.8874 20.45 12.2332 20.8 11.4999C19.9667 9.81656 18.7708 8.47906 17.2125 7.48739C15.6542 6.49572 13.9167 5.99989 12 5.99989C11.5167 5.99989 11.0417 6.03322 10.575 6.09989C10.1083 6.16656 9.65 6.26656 9.2 6.39989L8.03465 5.23454C8.6667 4.98326 9.31221 4.798 9.97118 4.67877C10.6301 4.55953 11.3064 4.49991 12 4.49991C14.2231 4.49991 16.2461 5.08902 18.0692 6.26722C19.8923 7.44542 21.266 8.98836 22.1904 10.896C22.2339 10.973 22.2641 11.0643 22.2807 11.1701C22.2974 11.2759 22.3057 11.3858 22.3057 11.4999C22.3057 11.614 22.2948 11.7239 22.2731 11.8297C22.2512 11.9355 22.2237 12.0268 22.1904 12.1037C21.8198 12.8832 21.3631 13.6072 20.8202 14.2758C20.2772 14.9444 19.6551 15.5473 18.9538 16.0845ZM19.2346 21.3422L15.7154 17.8537C15.2026 18.0434 14.6343 18.1986 14.0106 18.3191C13.3869 18.4396 12.7167 18.4999 12 18.4999C9.76412 18.4999 7.73944 17.9108 5.92598 16.7326C4.11252 15.5544 2.74042 14.0114 1.80965 12.1037C1.76607 12.0268 1.73594 11.9355 1.71927 11.8297C1.70261 11.7239 1.69427 11.614 1.69427 11.4999C1.69427 11.3858 1.70261 11.2784 1.71927 11.1778C1.73594 11.0771 1.76607 10.9884 1.80965 10.9114C2.1853 10.1422 2.64043 9.43131 3.17505 8.77874C3.70967 8.12617 4.28467 7.54605 4.90005 7.03837L2.64235 4.76526C2.50388 4.6268 2.43305 4.45533 2.42985 4.25087C2.42665 4.04638 2.50261 3.86657 2.65772 3.71144C2.80259 3.56657 2.97823 3.49414 3.18465 3.49414C3.39105 3.49414 3.56668 3.56657 3.71155 3.71144L20.2885 20.2883C20.4269 20.4268 20.5003 20.5983 20.5086 20.8027C20.517 21.0072 20.4436 21.187 20.2885 21.3422C20.1436 21.487 19.9679 21.5595 19.7615 21.5595C19.5551 21.5595 19.3795 21.487 19.2346 21.3422ZM5.95388 8.09216C5.42567 8.51268 4.91189 9.01814 4.41252 9.60854C3.91316 10.1989 3.50898 10.8294 3.2 11.4999C4.03333 13.1832 5.22917 14.5207 6.7875 15.5124C8.34583 16.5041 10.0833 16.9999 12 16.9999C12.4551 16.9999 12.9083 16.9614 13.3596 16.8845C13.8109 16.8076 14.1936 16.7281 14.5077 16.646L13.2423 15.3499C13.0718 15.4191 12.8744 15.4742 12.65 15.5152C12.4257 15.5563 12.209 15.5768 12 15.5768C10.8654 15.5768 9.90227 15.181 9.1106 14.3893C8.31893 13.5976 7.9231 12.6345 7.9231 11.4999C7.9231 11.2973 7.94362 11.0855 7.98465 10.8643C8.02568 10.6431 8.08081 10.4409 8.15003 10.2576L5.95388 8.09216Z"
                                fill="black"
                                fill-opacity="0.8"
                              />
                            </svg>
                          )}
                    </span>
                  </div>
                </div>
              
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="text-sm ml-3">
                      <label
                        htmlFor="remember"
                        className="font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Parolni unutdingizmi?
                  </a>
                
                </div>
                {  error && <h1 className='text-red-700 font-semibold'>{error}</h1>}
                {
                
              
                <button
                  type='submit'
                
                  // onClick={()=>handelLogin()}
                  className="w-full btn text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4  title_16_400_white leading-5 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <i className={`  fas ${loading ? 'fa-circle-notch' : ''} ${data ? 'checked fa-check' : ''} text-white`}></i>
                    
                    <span className="btn-text text-white "> Tizimga kirish </span>
                </button>
                }
                <Link
                  to='/autho'
                
                  className="w-full btnNOTGREEN gap-x-4  flex flex-nowrap justify-center hover:bg-[#F2F8FB;] focus:ring-4  title_16_400 leading-5 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {svg_reg} Ro'yxatdan o'tish

                </Link>
              </form>
            
          </div>
          </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
  )
}

export default Login
