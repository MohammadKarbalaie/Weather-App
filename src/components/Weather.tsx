import React, { useState, useEffect, useCallback } from "react";  
import axios from "axios";  
import { IWheatherUI } from "../components/UI";   
import { IWheather } from "../types";    
import useDebounce from "../Hooks/useDebounce";  
import "leaflet/dist/leaflet.css";  

interface Country {  
    cca2: string;  
    capital: string[];  
    population: number;  
    region: string;  
    languages: { [key: string]: string };   
    timezones: string[];     
}  

const WeatherApp: React.FC = () => {  
    const [weatherData, setWeatherData] = useState<IWheather | null>(null);  
    const [city, setCity] = useState<string>("Tehran");  
    const [coordinates, setCoordinates] = useState<{ lat: number; lon: number }>({ lat: 35.6892, lon: 51.3890 });  
    const [countryInfo, setCountryInfo] = useState<{   
        capital: string;   
        population: number;   
        region: string;   
        languages: string;  
        timezones: string;  
        callingCode: string;      
    } | null>(null);  

    const debouncedCity = useDebounce(city, 300);  

    const fetchWeatherData = useCallback(async (cityName: string) => {  
        const apiKey = '6640f904052d9b03f1efd12fce643e70';   
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);  
        setWeatherData(response.data);  

        const countryCode = response.data.sys.country;  
        fetchCountryInfo(countryCode);  
        setCoordinates({ lat: response.data.coord.lat, lon: response.data.coord.lon });  
    }, []);  

    const fetchCountryInfo = async (countryCode: string) => {  
        const response = await axios.get(`https://restcountries.com/v3.1/all`);  
        const countryData = response.data.find((country: Country) => country.cca2 === countryCode);  
        if (countryData) {  
            setCountryInfo({  
                capital: countryData.capital ? countryData.capital[0] : "",  
                population: countryData.population,  
                region: countryData.region,   
                languages: Object.values(countryData.languages || {}).join(", "),   
                timezones: countryData.timezones.join(", "),   
                callingCode: `+${countryData.cca2}`   
            });  
        }  
    };  

    useEffect(() => {  
        if (debouncedCity) {  
            fetchWeatherData(debouncedCity);  
        }  
    }, [debouncedCity, fetchWeatherData]);  

    return (  
        <div>  
            {weatherData && countryInfo && (  
                <IWheatherUI  
                    city={city}   
                    setCity={setCity}   
                    coordinates={coordinates}   
                    {...weatherData}  
                    windSpeed={weatherData.wind.speed}  
                    temperature={weatherData.main.temp}  
                    humidity={weatherData.main.humidity}  
                    visibility={weatherData.visibility}  
                    weatherIcon={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}  
                    population={countryInfo.population}  
                    capital={countryInfo.capital}  
                    region={countryInfo.region}  
                    languages={countryInfo.languages}  
                    timezones={countryInfo.timezones}  
                    callingCode={countryInfo.callingCode}  
                />  
            )}  
        </div>  
    );  
};  

export default WeatherApp;