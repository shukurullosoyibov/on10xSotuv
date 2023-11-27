import React, { useState, useEffect }from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'


const RootLayout = ({isAuth}) => {

// const userProfil_API = 'https://shark.brim.uz/api/profile-manager/profile/index';
// const token = localStorage.getItem('token');
// const [isLoading, setLoading] = useState(false);
// const [data, setData] = useState('');
// const [error, setError] = useState('');
// const fetchUserProfil = async (api, token) => {
//   if (token) {
//     setLoading(true);
//     try {
//       const res = await fetch(api, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await res.json(); // JSON ma'lumotini o'qish
//       setLoading(false);
//       setData(data);
//     } catch (error) {
//       setLoading(false);
//       console.error('Ma\'lumotni olishda xatolik yuz berdi:', error);
//     }
//   }
// };

// useEffect(() => {
//   fetchUserProfil(userProfil_API, token);
// }, [token]); // token o'zgarishida useEffectni qayta ishga tushurish

// useEffect(() => {
//   if (data) {
//     console.log(data);
//   }
// }, [data]); // data o'zgarishida useEffectni qayta ishga tushurish





  return (
    <>
    <Navbar  />
    <Outlet  />
    <Footer/>
    </>
  )
}

export default RootLayout