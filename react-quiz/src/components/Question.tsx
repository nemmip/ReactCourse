import type {IQuestion} from "../interfaces/IQuestion.ts";
import Options from "./Options.tsx";
import type {ActionDispatch} from "react";
import type {IAction, IActionWithPayload} from "../interfaces/IAction.ts";


function Question({question, answer, dispatch}: {
    question: IQuestion,
    answer: number | null,
    dispatch: ActionDispatch<[action: IAction | IActionWithPayload]>
}) {
    return (
        <div>
            <h4>{question.question}</h4>
            <Options question={question} answer={answer} dispatch={dispatch}/>
        </div>
    );
}

export default Question;