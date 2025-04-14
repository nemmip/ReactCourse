import FriendsList from "./components/Friend/FriendsList.tsx";
import FormAddFriend from "./components/Friend/FormAddFriend.tsx";
import Button from "./components/Button.tsx";
import FormSplitBill from "./components/FormSplitBill.tsx";
import {useState} from "react";
import {IFriend} from "./components/Friend/Friend.tsx";

const App = () => {
    const [friends, setFriends] = useState<IFriend[]>([
        {
            id: 118836,
            name: "Clark",
            image: "https://i.pravatar.cc/48?u=118836",
            balance: -7,
        },
        {
            id: 933372,
            name: "Sarah",
            image: "https://i.pravatar.cc/48?u=933372",
            balance: 20,
        },
        {
            id: 499476,
            name: "Anthony",
            image: "https://i.pravatar.cc/48?u=499476",
            balance: 0,
        },
    ])
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState<IFriend | null>(null);

    const handleSetShowAddFriend = () => {
        setShowAddFriend(show=> !show);
    }
    const handleAddFriend = (friend: IFriend) => {
        setFriends(prevState => [...prevState, friend])
        setShowAddFriend(false);
    }
    const handleSelectFriend = (friend: IFriend | null) => {
        setSelectedFriend(current => current?.id === friend?.id ? null : friend);
        setShowAddFriend(false);
    }
    const handleSplitBill = (value:number)=>{
        setFriends(friends => friends.map(friend=>
            friend.id === selectedFriend?.id ?
                {...friend, balance: friend.balance + value} :
                friend))

        setSelectedFriend(null);
    }


    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    onFriendSelect={handleSelectFriend}
                    selectedFriend={selectedFriend}/>
                {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
                <Button onClick={handleSetShowAddFriend}>
                    {showAddFriend ? 'Close':  'Add friend'}
                </Button>
            </div>
            {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
        </div>
    );
};

export default App;
