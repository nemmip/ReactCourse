import Button from "../Button.tsx";
import React, {useState} from "react";
import {IFriend} from "./Friend.tsx";

const FormAddFriend: React.FC<{
    onAddFriend: (friend: IFriend) => void;
}> = ({onAddFriend}) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');

    const handleSetName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleSetImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!(name && image)) return;
        const id=crypto.randomUUID()
        const newFriend: IFriend = {
            name,
            image: `${image}?${id}`,
            balance: 0,
            id
        }
        onAddFriend(newFriend);

        setName('')
        setImage('https://i.pravatar.cc/48')
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>🧑‍🤝‍🧑Friend name</label>
            <input type="text" value={name} onChange={handleSetName}/>

            <label>🖼️Image URL</label>
            <input type="text" value={image} onChange={handleSetImage}/>

            <Button>Add</Button>
        </form>
    );
};

export default FormAddFriend;