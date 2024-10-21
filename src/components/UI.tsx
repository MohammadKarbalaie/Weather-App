import React from "react";
import { IWheatherUIProps } from "../types";
import { Flag } from "./FlagCountry";
import { Callcode } from "./Callcode";
import { Weatherbox } from "./Weatherbox";
import { CountryInfo } from "./Countryinfo";
import { Map } from "./Showmap";

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
    onMapClick,
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
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city..."
                    className="w-96 px-4 uppercase py-1 rounded-md text-start "
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <CountryInfo city={city} name={name} population={population} capital={capital} region={region} languages={languages} timezones={timezones}/>
               <Callcode callingCode={callingCode}/>
               <Flag country={country}/>
            </div>

            <div className="flex gap-6">
             <Weatherbox windSpeed={windSpeed} temperature={temperature} humidity={humidity} visibility={visibility} weatherIcon={weatherIcon}/>
            <Map coordinates={coordinates} onMapClick={onMapClick}/>      
            </div>
        </div>
    );
};
