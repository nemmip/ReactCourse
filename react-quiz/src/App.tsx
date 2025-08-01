import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import {useEffect, useReducer} from "react";
import Loader from "./components/Loader.tsx";
import ErrorCmp  from "./components/ErrorCmp.tsx";
import StartScreen from "./components/StartScreen.tsx";
import Question from "./components/Question.tsx";
import type {IQuestion} from "./interfaces/IQuestion.ts";
import {ActionPayloadType, ActionType, type IAction, type IActionWithPayload} from "./interfaces/IAction.ts";

enum Status {
    LOADING= 'LOADING',
    ERROR = 'ERROR',
    READY = 'READY',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

interface IState {
    questions: IQuestion[],
    status: Status,
    index: number,
    answer: number | null,
    points: number
}

const initialState = {
    questions: [] as IQuestion[],
    status: Status.LOADING,
    index: 0,
    answer: null,
    points: 0,
}

function reducer(prevState: IState, action:IAction | IActionWithPayload) {
    switch (action.type) {
        case (ActionPayloadType.DATA_RECEIVED):
            return {
                ...prevState,
                questions: action.payload as IQuestion[],
                status: Status.READY,
            }
        case (ActionType.DATA_FAILED):
            return {
                ...prevState,
                status: Status.ERROR
            }
        case (ActionType.START):
            return {...prevState, status: Status.ACTIVE}
        case (ActionPayloadType.NEW_ANSWER):
            {
                const question = prevState.questions.at(prevState.index) as IQuestion;
                return {
                    ...prevState,
                    answer: action.payload as number,
                    points: question.correctOption === action.payload ?
                        prevState.points + question.points : prevState.points,}
            }

        default:
            throw new Error('Unknown action type');
    }
}

function App() {
    const [{questions, status, index, answer}, dispatch] = useReducer(reducer, initialState)

    const numQuestions = questions.length
    useEffect(function () {
        fetch('http://localhost:8000/questions')
            .then(res => res.json())
            .then(data=> dispatch({type: ActionPayloadType.DATA_RECEIVED, payload: data}))
            .catch(() => dispatch({type: ActionType.DATA_FAILED}));
    }, []);

    return (
        <div className='app'>
            <Header />
            <Main>
                {status === Status.LOADING  && <Loader/>}
                {status === Status.ERROR && <ErrorCmp/>}
                {status === Status.READY && <StartScreen numQuestions={numQuestions} dispatch={()=>dispatch({type: ActionType.START})}/>}
                {status === Status.ACTIVE && <Question question={questions[index]}
                                                       dispatch={dispatch}
                                                       answer={answer}/>
                }
            </Main>
        </div>
    );
}

export default App;