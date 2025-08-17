import styles from "./Logo.module.css"
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <img src="/logo.png" className={styles.logo} alt="WorldWise logo" />
        </Link>
    );
};

export default Logo;