import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const PRac = () => {
    const userProfil_API = 'https://shark.brim.uz/api/profile-manager/profile/index';
//   const Api = "https://jsonplaceholder.typicode.com/todos/1";
//   const { isLoading, error, data } = useQuery("repoData", () =>
//     fetch(Api).then((response) => response.json())
//   );
const token = 'Zcw0eAP6gFm6hM9RZYg-8-PLoYqLCLdu_1700117006';
  const userInfoFetch = async (api, token) => {
    try {
      if (token) {
        const response = await axios.get(api, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (response.status !== 200) {
          throw new Error('Network response was not ok.');
        }
  

        
      }
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      throw error; // Throw error to handle at a higher level if needed
    }
  };
//   userInfoFetch(userProfil_API, token)
  const { isLoading, data, error, isFetching } = useQuery('info', async () => await fetch(userProfil_API, { headers: { Authorization: `Bearer ${token}` },}).then((response) => response.json()) , {retry: 8, });

  if (isLoading) return <p>Загрузка...</p>;

  if (error) return <p>Ошибка: {error.message}</p>;
  if(isFetching){
    return <h1>
        fetching
    </h1>
  }
  if(data){
    console.log(data.data);
  }
  return <div>salom</div>;
};

export default PRac;
