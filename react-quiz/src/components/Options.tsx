import type {IQuestion} from "../interfaces/IQuestion.ts";
import type {ActionDispatch} from "react";
import {ActionPayloadType, type IAction, type IActionWithPayload} from "../interfaces/IAction.ts";

function Options({question, answer, dispatch}: {
    question: IQuestion,
    answer: number | null,
    dispatch: ActionDispatch<[action: IAction | IActionWithPayload]>
}) {
    const hasAnswered = answer !== null;
    return (
        <div className='options'>
            {question.options.map((option, index) => (
            <button
                key={option}
                disabled={hasAnswered}
                className={`btn btn-option ${index === answer ? 
                    "answer" : ""} ${hasAnswered && (index === question.correctOption ? "correct" : "wrong")}`}
                onClick={() => dispatch({type: ActionPayloadType.NEW_ANSWER, payload: index})}
            >{option}</button> ))}
        </div>
    )
}

export default Options;