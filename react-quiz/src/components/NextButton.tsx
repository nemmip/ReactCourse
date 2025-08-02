import type {ActionDispatch} from "react";
import {ActionType, type IAction, type IActionWithPayload} from "../interfaces/IAction.ts";

function NextButton({dispatch, answer, index, numQuestions}: {
    dispatch: ActionDispatch<[action: IAction | IActionWithPayload]>,
    answer: number | null,
    index: number,
    numQuestions: number,
}) {
    if (answer === null) return null;
    if (index < numQuestions - 1)
    return (
        <button className="btn btn-ui" onClick={()=> dispatch({type: ActionType.NEXT_QUESTION})}>
            Next
        </button>
    );
    if (index === numQuestions - 1){
        return (
            <button className="btn btn-ui" onClick={()=> dispatch({type: ActionType.FINISH})}>
                Finish
            </button>
        )
    }
}

export default NextButton;