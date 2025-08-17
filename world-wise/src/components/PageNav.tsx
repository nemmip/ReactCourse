import {NavLink} from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo.tsx";

const PageNav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <Logo/>
                <li key="pricing">
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li key="product">
                    <NavLink to="/product">Product</NavLink>
                </li><li key="login">
                <NavLink to="/login" className={styles.ctaLink}>Login</NavLink>
            </li>
            </ul>
        </nav>
    );
};

export default PageNav;