import CityItem from "./CityItem";
import styles from "./CityList.module.css"
import Message from "./Message";
import Spinner from "./Spinner";

export interface City {
   cityName: string,
      country: string,
      emoji: string,
      date: string,
      notes: string,
      position: {
        lat: number,
        lng: number
      },
      id: number
}

type CityListProps = {
    cities: City[];
    isLoading: boolean;
}

function CityList({ cities, isLoading }: CityListProps) {
    if (isLoading) {
        return <Spinner/>;  
    }

    if(!cities.length) return <Message message="Add your first city by clicking a city on the map"/>;
    
    return (
        <ul className={styles.cityList}>
            {cities.map(city => <CityItem key={city.id} city={city}/>)}
        </ul>
    );
}

export default CityList;