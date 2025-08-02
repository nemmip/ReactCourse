import type {ActionDispatch} from "react";
import {ActionType, type IAction, type IActionWithPayload} from "../interfaces/IAction.ts";

function FinishScreen({points, maxPossiblePoints, highscore, dispatch} :{
    points: number,
    maxPossiblePoints: number,
    highscore: number,
    dispatch: ActionDispatch<[action: IAction | IActionWithPayload]>
}) {
    const percentage = (points/maxPossiblePoints) * 100;
    let emoji;
    if (percentage === 100) emoji = '🏅'
    if (percentage >= 80 && percentage < 100) emoji = '🎉'
    if (percentage >= 50 && percentage < 80) emoji = '😸'
    if (percentage >= 0 && percentage < 50) emoji = '🤔'
    if (percentage === 0) emoji = '🤦'
    return (
        <>
            <p className="result">
                <span>{emoji}</span>
                You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.round(percentage)}%)
            </p>
            <p className='highscore'>(Highscore: {highscore} points)</p>
            <button className='btn btn-ui' onClick={()=> dispatch({type: ActionType.RESTART})}>
                Restart Quiz
            </button>
        </>
    );
}

export default FinishScreen;