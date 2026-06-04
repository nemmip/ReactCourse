import type { City } from "./CityList";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css"
import Message from "./Message";
import Spinner from "./Spinner";



type CityListProps = {
    cities: City[];
    isLoading: boolean;
}

interface Country {
    country: string;
    emoji: string;
}

function CountryList({ cities, isLoading }: CityListProps) {
    if (isLoading) {
        return <Spinner/>;  
    }

    if(!cities.length) return <Message message="Add your first city by clicking a city on the map"/>;
    
    const countries = cities.reduce<Country[]>((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country)) {
            return [...arr, { country: city.country, emoji: city.emoji }];
        } else {
            return arr;
        }
    }, []);

    return (
        <ul className={styles.countryList}>
            {countries.map(country => <CountryItem key={country.country} country={country}/>)}
        </ul>
    );
}

export default CountryList;