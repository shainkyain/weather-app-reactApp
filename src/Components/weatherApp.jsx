//  import React from 'react'
//  import { TiWeatherCloudy } from "react-icons/ti";

//  const weatherApp = () => {
//    return (
//     <>
//     <div className='flex-col'>
//       <div className=''>
//         <h1 className='text-4xl font-semibold'>Weather App</h1>
//           <p className='mt-2'>Now</p>
//         <span className='flex justify-center '>
//       <TiWeatherCloudy className='h-40 w-28 ' />
//         </span>
//         <div className='flex-col justify-center items-center'>
//         <h1 className='  text-8xl font-bold'> 23&deg;</h1>
//         <p>---mostly cloudy---</p>
//         </div>
//       </div>

//     </div>
//     </>
//    )
//  }

//  export default weatherApp

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { TiWeatherCloudy } from "react-icons/ti";

// const WeatherApp = () => {
//   const [city, setCity] = useState('Bengaluru');
//   const [temperature, setTemperature] = useState(null);
//   const [weatherDescription, setWeatherDescription] = useState('');
//   const [loading, setLoading] = useState(true);

//   const apiKey = '98ab1040e0794c2a8d2180545240108'; // Replace with your WeatherAPI key

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
//         const data = response.data;
//         setTemperature(data.current.temp_c);
//         setWeatherDescription(data.current.condition.text);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//         setLoading(false);
//       }
//     };

//     fetchWeather();
//   }, [city, apiKey]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       <div className='flex-col'>
//         <div className=''>
//           <h1 className='text-4xl font-semibold'>{city},</h1>
//           <p className='mt-2'>Now</p>
//           <span className='flex justify-center '>
//             <TiWeatherCloudy className='h-40 w-28 ' />
//           </span>
//           <div className='flex-col justify-center items-center'>
//             <h1 className='text-8xl font-bold'>{temperature}&deg;C</h1>
//             <p>---{weatherDescription}---</p>
//           </div>
//         </div>
//         <form action="">
//          <input type="text"  className='bg-red-100'  />

//           <button type="submit" onClick={() => setCity('Bengaluru')}>
//             Update Weather for <input type="text" />
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default WeatherApp;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TiWeatherCloudy } from "react-icons/ti";

const WeatherApp = () => {
  const [city, setCity] = useState("Bengaluru");
  const [temperature, setTemperature] = useState(null);
  const [weatherDescription, setWeatherDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [changeCity, setChangeCity] = useState("");
  const apiKey = "98ab1040e0794c2a8d2180545240108"; // Replace with your WeatherAPI key

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return;

      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );
        const data = response.data;
        console.log(data);
        setTemperature(data.current.temp_c);
        setWeatherDescription(data.current.condition.text);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputValue);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex justify-center item-center h-screen lg:p-10 pt-20 bg-black text-white">
        <div className="">
          <h1 className="text-4xl font-semibold text-center"> {city}</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter city name"
              className="border p-2 mt-4 text-center text-black"
            />
            <button type="submit" className="bg-blue-500 text-center text-white p-2">
              Update Weather
            </button>
          </form>

          <p className="mt-2 text-center ">Now</p>
          <span className="flex justify-center">
            <TiWeatherCloudy className="h-40 w-28 items-center " />
          </span>
          <div className=" ">
            <h1 className="text-8xl font-bold text-center">{temperature}&deg;C</h1>
            <p className="text-center">---{weatherDescription}---</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
