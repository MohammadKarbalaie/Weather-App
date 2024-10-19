import React from "react";  
import { IWheather } from "../types";  
import { MapContainer, TileLayer, Marker } from 'react-leaflet';  

interface IWheatherUIProps extends IWheather {  
    city: string; // برای دریافت city  
    setCity: React.Dispatch<React.SetStateAction<string>>; // برای بروزرسانی city  
    windSpeed: number;  
    temperature: number;  
    humidity: number;  
    visibility: number;  
    weatherIcon: string;  
    population: number;  
    capital: string;  
    region: string;  
    languages: string;  
    timezones: string;  
    callingCode: number;  
    name:string
    coordinates: { lat: number; lon: number };  
}  

export const IWheatherUI: React.FC<IWheatherUIProps> = ({  
    sys: { country },  
    city,  
    setCity,  
    windSpeed,  
    temperature,  
    humidity,  
    visibility,  
    weatherIcon,  
    population,  
    capital,  
    region,  
    languages,  
    timezones,  
    callingCode,  
    coordinates,   
    name,
}) => {  
  return (  
    <div className="flex flex-col gap-2">  
      <div className="bg-slate-700 py-2">  
        <p className="text-yellow-500 py-2 text-2xl font-semibold">  
          Learning how to work with APIs  
        </p>  
        <input  
            type="text"  
            value={city}  
            onChange={(e) => setCity(e.target.value)} // بروزرسانی city  
            placeholder="Enter city..."  
            className="w-96 px-4 uppercase py-1 rounded-md text-start "  
        />  
      </div>  
      <div className="grid grid-cols-3 gap-4">  
        <div className="flex flex-col bg-slate-600 text-white items-start justify-start px-2 py-2">  
          <h1 className="font-semibold text-2xl py-3 ">{country}</h1>  
          <p className="text-lg">Native Name :{name}</p>  
          <p className="text-lg">Capital : {capital}</p>  
          <p className="text-lg">Region : {region}</p>  
          <p className="text-lg">Population : {population}</p>  
          <p className="text-lg">Languages : {languages}</p>  
          <p className="text-lg">Time Zone :{timezones}</p>  
        </div>  
        <div className="flex flex-col justify-center items-center ">  
          <span className="uppercase text-3xl bg-slate-800 text-white py-4 w-full">  
            Calling code  
          </span>  
          <span className="text-3xl bg-yellow-500 text-white py-[70px] w-full h-full">  
           {callingCode}   
          </span>  
        </div>  
        <div className="w-full border">  
          <img src={`https://flagcdn.com//w160/${country.toLowerCase()}.png`} alt={`${country} flag`} className="mr-2 w-full h-full" style={{ width: "400px", height: "295px" }} />  
        </div>  
      </div>  

      <div className="flex gap-6">  
        <div className="w-2/6 flex flex-col border items-start justify-start">  
          <span className="w-full uppercase text-yellow-400 bg-slate-600">  
            <p className="font-semibold text-2xl py-3 px-3">  
              Capital Weather Report  
            </p>  
          </span>  

          <span className="px-2 py-4 flex flex-col items-start justify-start">  
            <img src={weatherIcon} alt="" className="w-3/6 ml-36 -mr-2 mb-5" />  
            <p className="text-lg">Wind Speed: {windSpeed} m/s</p>  
            <p className="text-lg">Temperature: {temperature} °C</p>  
            <p className="text-lg">Humidity: {humidity} %</p>  
            <p className="text-lg">Visibility: {visibility} m</p>  
          </span>  
        </div>  
        <div className="w-4/6 border" id="map">  
          <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={7} style={{ height: "400px", width: "100%" }}>  
              <TileLayer  
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  
                  attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"  
              />  
              <Marker position={[coordinates.lat, coordinates.lon]} />  
          </MapContainer>  
        </div>  
      </div>  
    </div>  
  );  
};