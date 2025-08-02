import type {IQuestion} from "./IQuestion.ts";

export enum ActionType {
    DATA_FAILED = 'DATA_FAILED',
    START = 'START',
    NEXT_QUESTION = 'NEXT_QUESTION',
    FINISH = 'FINISH',
    RESTART = 'RESTART',
    TICK = 'TICK',
}

export enum ActionPayloadType {
    DATA_RECEIVED = 'DATA_RECEIVED',
    NEW_ANSWER = 'NEW_ANSWER',
}

export interface IAction {
    type: ActionType;
}

export interface IActionWithPayload {
    type: ActionPayloadType;
    payload: IQuestion[] | number;
}