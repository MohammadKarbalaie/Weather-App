import React from "react";
import { IWheatherUIProps } from "../types";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Flag } from "./FlagCountry";
import { Callcode } from "./Callcode";
import { Weatherbox } from "./Weatherbox";
import { CountryInfo } from "./Countryinfo";

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
