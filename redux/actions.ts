import { getCocktailsSuggestions } from '../api/cocktailsApi';

export interface IActionCreator {
    type: string;
    payload: any;
    loading?: boolean;
    drinks?: any[];
}

export const GET_COCKTAILS = 'GET_COCKTAILS';
export const GET_COCKTAILS_SUCCESS = 'GET_COCKTAILS_SUCCESS';
export const GET_COCKTAILS_REJECTED = 'GET_COCKTAILS_REJECTED';
export const CLEAR_COCKTAILS = 'CLEAR_COCKTAILS';

export const fetchData = (bool: boolean): IActionCreator => ({
    type: GET_COCKTAILS,
    payload: bool,
    drinks: [],
})

export const fetchDataSuccess = (data: any): IActionCreator => {
    return {
        type: GET_COCKTAILS_SUCCESS,
        payload: { drinks: data },
        loading: false,
    }
}

export const fetchDataRejected = (error: string): IActionCreator => {
    return {
        type: GET_COCKTAILS_REJECTED,
        payload: {drinks: [], error},
        loading: false,
        drinks: [],
    }
};


export const clearCocktails = (): IActionCreator => {
    return {
        type: CLEAR_COCKTAILS,
        payload: { drinks: [],},
        loading: false,
        drinks: [],
    }
};

export const getCocktails = (criteria?: string) => {
    return (dispatch) => {
        dispatch(fetchData(true));
        const suggestions = getCocktailsSuggestions(criteria)
            .then((drinks) => {
                dispatch(drinks.length <= 0 
                    ? fetchDataRejected('not found')
                    : fetchDataSuccess(drinks)
                );
            });

        return suggestions;
    }
}

export const cleanCocktails = () => (dispatch) => dispatch(clearCocktails)
