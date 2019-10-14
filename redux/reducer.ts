import { GET_COCKTAILS, GET_COCKTAILS_SUCCESS, GET_COCKTAILS_REJECTED, IActionCreator } from "./actions";

interface ICocktailsState {
    cocktails: any[];
    loading: boolean;
    errorMessage: string;
}


const initialState: ICocktailsState = {
    cocktails: [],
    loading: true,
    errorMessage: '',
}

export const cocktailsReducer = (state = initialState, action: IActionCreator) => {
    switch (action.type) {
        case GET_COCKTAILS:
            return { ...state, loading: action.payload };
        case GET_COCKTAILS_SUCCESS:
            return { ...state, cocktails: action.payload, loading: action.loading };
        case GET_COCKTAILS_REJECTED:
            return { ...state, errorMessage: action.payload, loading: action.loading };
        default:
            return state;
    }
}

