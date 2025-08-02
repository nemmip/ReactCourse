import {type ActionDispatch, useEffect} from "react";
import {ActionType, type IAction, type IActionWithPayload} from "../interfaces/IAction.ts";

function Timer({dispatch, secondsRemaining}:
               {
                   dispatch: ActionDispatch<[action: IAction | IActionWithPayload]>,
                   secondsRemaining: number
               }) {
    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    useEffect(function () {
        const id = setInterval(function () {
            dispatch({type: ActionType.TICK})
        }, 1000)
        return () => clearInterval(id)
    } , [dispatch]);
    return (
        <div className='timer'>
            {mins < 10 && '0'}{mins}:
            {seconds < 10 && '0'}{seconds}
        </div>
    );
}

export default Timer;