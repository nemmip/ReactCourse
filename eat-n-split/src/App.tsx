import FriendsList from "./components/Friend/FriendsList.tsx";
import FormAddFriend from "./components/Friend/FormAddFriend.tsx";
import Button from "./components/Button.tsx";
import FormSplitBill from "./components/FormSplitBill.tsx";

const App = () => {
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList/>
                <FormAddFriend/>
                <Button>Add friend</Button>
            </div>
            <FormSplitBill/>
        </div>
    );
};

export default App;
