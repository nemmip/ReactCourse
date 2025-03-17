import FriendsList from "./components/Friend/FriendsList.tsx";
import FormAddFriend from "./components/Friend/FormAddFriend.tsx";
import Button from "./components/Button.tsx";
import FormSplitBill from "./components/FormSplitBill.tsx";
import {useState} from "react";

const App = () => {
    const [showAddFriend, setShowAddFriend] = useState(false);

    const handleSetShowAddFriend = () => {
        setShowAddFriend(show=> !show);
    }
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList/>
                {showAddFriend && <FormAddFriend/>}
                <Button onClick={handleSetShowAddFriend}>
                    {showAddFriend ? 'Close':  'Add friend'}
                </Button>
            </div>
            <FormSplitBill/>
        </div>
    );
};

export default App;
