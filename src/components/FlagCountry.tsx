interface ICountry {
     country:string
}

export const Flag: React.FC<ICountry> = ({
    country,
})=> {
    return(
        <div className="w-full border">
            <img src={`https://flagcdn.com/${country.toLowerCase()}.svg`} alt={`${country} flag`} className="mr-2 w-full h-full" style={{ width: "400px", height: "295px" }} />
        </div>
    )
}