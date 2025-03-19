import React, {ChangeEvent, useState} from 'react';
import Button from "./Button.tsx";
import {IFriend} from "./Friend/Friend.tsx";

const FormSplitBill: React.FC<{
    selectedFriend: IFriend;
}> = ({selectedFriend}) => {
    const [bill, setBill] = useState<number|string>('');
    const [paidByUser, setPaidByUser] = useState<number|string>('');
    const [whoIsPaying, setWhoIsPaying] = useState('user');
    const paidByFriend = bill ? Number(bill) - Number(paidByUser) : '';

    const handleSetPaidByUser = (event: ChangeEvent<HTMLInputElement>)=> {
        if (event.target.value > bill){
            setPaidByUser(paidByUser);
        }else {
            setPaidByUser(Number(event.target.value))
        }
    }
    return (
        <form className="form-split-bill">
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input
                type="text"
                value={bill}
                onChange={e => setBill(Number(e.target.value))}/>

            <label>🧍‍♀️ Your expense</label>
            <input
                type="text"
                value={paidByUser}
                onChange={handleSetPaidByUser}/>

            <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
            <input type="text" disabled  value={paidByFriend}/>

            <label>🤑 Who is paying the bill</label>
            <select
            value={whoIsPaying}
            onChange={e => setWhoIsPaying(e.target.value)}>
                <option value='user'>You</option>
                <option value='friend'>{selectedFriend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
};

export default FormSplitBill;