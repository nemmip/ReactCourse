export interface IFriend {
    id: number;
    name: string;
    image: string;
    balance: number;
}

const Friend = (friend: IFriend) => {
    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

            {
                friend.balance < 0 &&
                <p className="red"> You owe {friend.name} {Math.abs(friend.balance)}$</p>
            }
            {
                friend.balance > 0 &&
                <p className="green">{friend.name} owes you {Math.abs(friend.balance)}$</p>
            }
            {
                friend.balance === 0 &&
                <p> You and {friend.name} are even</p>
            }

            <button className="button">Select</button>
        </li>
    );
};

export default Friend;