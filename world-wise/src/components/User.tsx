import styles from "./User.module.css"

interface IUser {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

const FAKE_USER: IUser = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
}

const User = () => {
    const user = FAKE_USER;
    function handleClick() {}
    return (
        <div className={styles.user}>
            <img src={user.avatar} alt={user.name} />
            <span>Welcome, {user.name}</span>
            <button onClick={handleClick}></button>
        </div>
    );
};

export default User;