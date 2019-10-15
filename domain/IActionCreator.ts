import { ICocktail } from "./ICocktail";
import { Action } from "redux";

export interface IActionData<T, P> extends Action<T> {
    payload: P
}