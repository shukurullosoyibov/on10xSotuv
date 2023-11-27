import axios from 'axios';
// export const login_API = 'https://shark.brim.uz/api/auth/register/login';
export const courses_API = 'https://shark.brim.uz/api/course-manager/course/bestseller';
export const login_API = 'https://shark.brim.uz/api/auth/register/login';
export const courses_Slug_API = 'https://shark.brim.uz/api/course-manager/course/detail?key=';
export const fetchData = async () => {
    const { data } = await axios.get(login_API);
    return data;
  };
export const fetchCourses = async () => {
    const { data } = await axios.post(courses_API);
    return data;
  };
//   export  async function fetchBesteller() {
   
//     const {todo} = await fetch(courses_API )
//     .then(res => res.json);
//     return todo;
    
// }
export async function fetchBesteller() {
  try {
    const response = await fetch(courses_API);
    if (!response.ok) {
      throw new Error('HTTP xato: ' + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ma'lumotlarni olishda xatolik yuz berdi: ", error);
    throw error;
  }
}

export async function fetchPost(api, username, password) {
  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ // Ma'lumotlarni JSON ko'rinishida yuborish uchun JSON.stringify ishlatiladi
        username: username,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    return await response.json(); // JSON formatidagi ma'lumotlarni olish
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
}

