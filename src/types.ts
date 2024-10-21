export interface IWheather {
    coord: {
        lon: number;
        lat: number;
    };
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface IWheatherUIProps extends IWheather {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
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
    callingCode: string;
    name: string;   
    coordinates: { lat: number; lon: number };
    onMapClick: (lat: number, lon: number) => Promise<void>; 
}


export interface Country {
    cca2: string;
    capital: string[];
    population: number;
    region: string;
    languages: { [key: string]: string };
    timezones: string[];
    idd: {
        root: string;
        suffixes: string[];
    };
    translations: {
        per: {
            official: string;
        };
    };
    name: {
        nativeName: {
            fas: {
                official: string;
            };
        };
    };
}
