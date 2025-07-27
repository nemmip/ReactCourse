import { useReducer } from "react";
import * as React from "react";

interface IDateCounterState {
    count: number;
    step: number;
}

enum DateActionType {
    INCREASE = "INCREASE",
    DECREASE = "DECREASE",
    RESET = "RESET",
    
}
enum DatePayloadActionType {
    SET_COUNTER = "SET_COUNTER",
    SET_STEP = "SET_STEP",
}

interface IDateCountActions {
    type: DateActionType;
}

interface IDateStepActions {
    type: DatePayloadActionType;
    payload: number;
}

function reducer(prevState: IDateCounterState, arg: IDateCountActions | IDateStepActions) {
    console.log(prevState, arg);
    switch (arg.type) {
        case DateActionType.DECREASE:
            return { ...prevState, count: prevState.count - 1 };
        case DateActionType.INCREASE:
            return { ...prevState, count: prevState.count + 1 };
        case DatePayloadActionType.SET_COUNTER:
            return {...prevState, count: arg.payload };
        case DatePayloadActionType.SET_STEP:
            return {...prevState, step: arg.payload };
        case DateActionType.RESET:
            return initialState;
    }
}

const initialState: IDateCounterState = { count: 0, step: 1};


function DateCounter  () {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {count, step} = state;

    // This mutates the date object.
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);

    const dec = function () {
        dispatch({ type: DateActionType.DECREASE })
    };

    const inc = function () {
        dispatch({ type: DateActionType.INCREASE });
    };

    const defineCount = function (e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({type: DatePayloadActionType.SET_COUNTER, payload: Number(e.target.value)});
    };

    const defineStep = function (e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({type: DatePayloadActionType.SET_STEP, payload: Number(e.target.value)});
    };

    const reset = function () {
        dispatch({ type:DateActionType.RESET });
    };

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
export default DateCounter;