import { ICocktail } from "./ICocktail";

export interface IActionCreator {
    type: string;
    payload: any;
    loading?: boolean;
    drinks?: ICocktail[];
}