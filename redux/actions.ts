import { getCocktailsSuggestions } from '../api/cocktailsApi';
import { IActionData } from '../domain/IActionCreator';
import { IDrink } from '../domain/ICocktail';
import { IError } from '../domain/IError';


export const GET_COCKTAILS = 'GET_COCKTAILS';
export const fetchData = (bool: boolean): IActionData<typeof GET_COCKTAILS, boolean> => ({
    type: GET_COCKTAILS,
    payload: bool,
});

export const GET_COCKTAILS_SUCCESS = 'GET_COCKTAILS_SUCCESS';
export const fetchDataSuccess = (data: any): IActionData<typeof GET_COCKTAILS_SUCCESS, IDrink> => ({
    type: GET_COCKTAILS_SUCCESS,
    payload: { drinks: data },
});

export const GET_COCKTAILS_REJECTED = 'GET_COCKTAILS_REJECTED';
export const fetchDataRejected = (error: string): IActionData<typeof GET_COCKTAILS_REJECTED, IError> => ({
    type: GET_COCKTAILS_REJECTED,
    payload: { error },
});

export const CLEAR_COCKTAILS = 'CLEAR_COCKTAILS';
export const clearCocktails = (): IActionData<typeof CLEAR_COCKTAILS, IDrink> => ({
    type: CLEAR_COCKTAILS,
    payload: { drinks: [], },
});

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
