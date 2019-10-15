import {
    GET_COCKTAILS,
    GET_COCKTAILS_SUCCESS,
    GET_COCKTAILS_REJECTED,
    CLEAR_COCKTAILS
} from "./actions";

import { ICocktailsState } from '../domain/ICocktailState';
import { IActionCreator } from "../domain/IActionCreator";

const initialState: ICocktailsState = {
    cocktails: [],
    loading: false,
    errorMessage: '',
}

export const cocktailsReducer = (state = initialState, action: IActionCreator) => {
    switch (action.type) {
        case GET_COCKTAILS:
            return { ...state, loading: action.payload, cocktails: [] };
        case GET_COCKTAILS_SUCCESS:
            return { ...state, cocktails: action.payload, loading: action.loading };
        case GET_COCKTAILS_REJECTED:
            return { ...state, errorMessage: action.payload, loading: action.loading, cocktails: [] };
        case CLEAR_COCKTAILS:
            return { ...state, loading: false }

        default:
            return state;
    }
}

