import styles from "./CountryItem.module.css"
import * as React from "react";

interface ICountry {
    emoji: string;
    country: string;
}
const CountryItem: React.FC<{
    country: ICountry;
}> = ({country}) => {
    return (
        <li className={styles.countryItem}>
            <span>{country.emoji}</span>
            <span>{country.country}</span>
        </li>
    );
};

export default CountryItem;