import Spinner from "./Spinner.tsx";
import styles from "./SpinnerFullPage.module.css"

const SpinnerFullPage = () => {
    return (
        <div className={styles.spinnerFullPage}>
            <Spinner/>
        </div>
    );
};

export default SpinnerFullPage;