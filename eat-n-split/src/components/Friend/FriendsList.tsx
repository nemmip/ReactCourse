import Friend, {IFriend} from "./Friend.tsx";
import React from "react";

const FriendsList: React.FC<{
    friends: IFriend[]
    onFriendSelect: (friend: IFriend | null) => void;
    selectedFriend: IFriend | null;
}> = ({friends, onFriendSelect, selectedFriend}) => {

    return (
        <ul>
            {friends.map(friend =>
               <Friend
                   friend={friend}
                   key={friend.id}
                   onFriendSelect={onFriendSelect}
                   selectedFriend={selectedFriend}
               />
            )}
        </ul>
    );
};

export default FriendsList;