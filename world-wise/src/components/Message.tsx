import styles from "./Message.module.css"
import * as React from "react";
const Message: React.FC<{
    message: string;
}> = ({message}) => {
    return (
        <p className={styles.message}>
            <span role="img">👋</span> {message}
        </p>
    );
};

export default Message;