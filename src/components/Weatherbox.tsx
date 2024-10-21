interface weatherbox{
    windSpeed: number;
    temperature: number;
    humidity: number;
    visibility: number;
    weatherIcon: string;
}




export const Weatherbox: React.FC<weatherbox> = ({
    windSpeed,
    temperature,
    humidity,
    visibility,
    weatherIcon,
})=> {
    return(
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
    )
}