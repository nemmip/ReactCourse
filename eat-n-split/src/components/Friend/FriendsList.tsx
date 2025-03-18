import Friend, {IFriend} from "./Friend.tsx";
import React from "react";

const FriendsList: React.FC<{
    friends: IFriend[]
}> = ({friends}) => {

    return (
        <ul>
            {friends.map(friend =>
               <Friend friend={friend} key={friend.id}/>
            )}
        </ul>
    );
};

export default FriendsList;