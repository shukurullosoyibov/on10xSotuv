import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import CoursesSection from "./pages/CoursesSection";


import "./App.css";
import "./style/style.css";
import "./style/media.css";

import Login from "./Component/Login";
import MainLayout from "./RootLayout/MainLayout";
import CourseAbout from "./pages/CourseAbout";

import Registr from "./Component/Registr";
import RootLayout from "./RootLayout/RootLayout";
import VerifyCode from "./Component/VerifyCode";
import { useState } from "react";
import { useEffect } from "react";
import IsLoader from "./loader/IsLoader";


import MyCourse from "./pages/MyCourse";
import LessonWatch from "./Component/LessonWatch";

import CourseMain from "./pages/CourseMain";


function App() {
  const [isloading, setLoading] = useState(false);


useEffect(()=>{
 


   setLoading(true);
   setTimeout(()=>{
     setLoading(false);
    
   }, 1000)
},[])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<MainLayout  />}>
        <Route path="/login" element={<Login />} />
        <Route path="/autho" element={<Registr />} />
        <Route path="/verify/:phone" element={<VerifyCode />}></Route>
        {/* <Route path='/resetpassword' element={<ResetPaspord />} /> */}
      </Route>

      <Route path="/courses" element={<CoursesSection />}></Route>
      {/* <Route path="/courseAbout" element={<CourseAbout />}></Route> */}
      <Route path="/courseAbout/:slug" element={<CourseAbout />}></Route>
      <Route path="/courseMain/:slug" element={<CourseMain />}>
         
         <Route path='/courseMain/:slug/:id' element={<LessonWatch/>} />
      </Route>
      <Route path="/my-courses" element={<MyCourse />}></Route>
      

    </Route>
  )
);
  return (
    <>
    {
       isloading ? <IsLoader /> : <RouterProvider router={router} />

    }
      
    </>
  );
}

export default App;
