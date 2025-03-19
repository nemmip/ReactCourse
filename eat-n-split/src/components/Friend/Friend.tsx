import React from "react";
import Button from "../Button.tsx";

export interface IFriend {
    id: number|string;
    name: string;
    image: string;
    balance: number;
}

const Friend: React.FC<{
    friend: IFriend,
    onFriendSelect: (friend: IFriend | null) => void;
    selectedFriend: IFriend | null;
}> = ({friend, onFriendSelect, selectedFriend}) => {
    const isSelected = friend.id === selectedFriend?.id;

    return (
        <li className={isSelected ? 'selected' : ''}>
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

            <Button onClick={()=>onFriendSelect(friend)}>{isSelected ? "Close" : "Select"}</Button>
        </li>
    );
};

export default Friend;