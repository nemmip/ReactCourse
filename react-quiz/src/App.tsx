import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import {useEffect, useReducer} from "react";
import Loader from "./components/Loader.tsx";
import ErrorCmp from "./components/ErrorCmp.tsx";
import StartScreen from "./components/StartScreen.tsx";
import Question from "./components/Question.tsx";
import type {IQuestion} from "./interfaces/IQuestion.ts";
import {ActionPayloadType, ActionType, type IAction, type IActionWithPayload} from "./interfaces/IAction.ts";
import NextButton from "./components/NextButton.tsx";
import Progress from "./components/Progress.tsx";
import FinishScreen from "./components/FinishScreen.tsx";
import Footer from "./components/Footer.tsx";
import Timer from "./components/Timer.tsx";

const SECONDS_PER_QUESTION = 30

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
    points: number,
    highscore: number,
    secondsRemaining: number | null,
}

const initialState = {
    questions: [] as IQuestion[],
    status: Status.LOADING,
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null
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
            return {
                ...prevState,
                status: Status.ACTIVE,
                secondsRemaining: prevState.questions.length * SECONDS_PER_QUESTION,
            }
        case (ActionPayloadType.NEW_ANSWER):
            {
                const question = prevState.questions.at(prevState.index) as IQuestion;
                return {
                    ...prevState,
                    answer: action.payload as number,
                    points: question.correctOption === action.payload ?
                        prevState.points + question.points : prevState.points,}
            }
        case (ActionType.NEXT_QUESTION):
        return {
            ...prevState,
            index: prevState.index + 1,
            answer: null,
        }
        case (ActionType.FINISH):
            return {
                ...prevState,
                status: Status.FINISHED,
                highscore: prevState.points > prevState.highscore ? prevState.points : prevState.highscore,
            }
        case (ActionType.RESTART):
            return {
                ...initialState,
                highscore: prevState.highscore,
                status: Status.READY,
                questions: prevState.questions as IQuestion[],
            }
        case (ActionType.TICK):
            return {
                ...prevState,
                secondsRemaining: prevState.secondsRemaining! - 1,
                status: prevState.secondsRemaining === 0 ? Status.FINISHED : prevState.status,
            }
        default:
            throw new Error('Unknown action type');
    }
}

function App() {
    const [{questions, status, index, answer, points, highscore, secondsRemaining}, dispatch] = useReducer(reducer, initialState)

    const numQuestions = questions.length
    const maxPossiblePoints = questions.map(q=> q.points).reduce((previousValue, currentValue)=> previousValue + currentValue, 0)
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
                {status === Status.ACTIVE && (<>
                    <Progress index={index}
                              numQuestions={numQuestions}
                              points={points}
                              maxPossiblePoints={maxPossiblePoints}
                              answer={answer}/>
                    <Question question={questions[index]}
                              dispatch={dispatch}
                              answer={answer}/>
                    <Footer>
                        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining!}/>
                        <NextButton dispatch={dispatch}
                                    answer={answer}
                                    numQuestions={numQuestions}
                                    index={index}/>
                    </Footer>

                </>)
                }
                {status === Status.FINISHED &&
                    <FinishScreen
                        points={points}
                        maxPossiblePoints={maxPossiblePoints}
                        highscore={highscore}
                        dispatch={dispatch}/>}
            </Main>
        </div>
    );
}

export default App;