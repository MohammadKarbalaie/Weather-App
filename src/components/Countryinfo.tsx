interface ICountryinfo {
    city: string;
    name: string;
    population: number;
    capital: string;
    region: string;
    languages: string;
    timezones: string;
}

export const CountryInfo: React.FC<ICountryinfo> = ({
    city,
    name,
    population,
    capital,
    region,
    languages,
    timezones,
})=> {
   return(
    <div className="flex flex-col bg-slate-600 text-white items-start justify-start px-2 py-2">
        <h1 className="font-semibold text-2xl py-3 ">{name}</h1> {/* نام کشور */}
        <p className="text-lg">Native Name: {city}</p>
        <p className="text-lg">Capital: {capital}</p>
        <p className="text-lg">Region: {region}</p>
        <p className="text-lg">Population: {population}</p>
        <p className="text-lg">Languages: {languages}</p>
        <p className="text-lg">Time Zone: {timezones}</p>
    </div>
   )
}