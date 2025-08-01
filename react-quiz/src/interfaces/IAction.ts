import type {IQuestion} from "./IQuestion.ts";

export enum ActionType {
    DATA_FAILED = 'DATA_FAILED',
    START = 'START',
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