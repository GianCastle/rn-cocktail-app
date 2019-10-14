import { isOk, isEmptySearch } from '../utils/ApiUtils';
import { API_URL } from '../utils/ApiUtils';

export interface IActionCreator {
    type: string;
    payload: any;
    loading?: boolean;
}

export const GET_COCKTAILS = 'GET_COCKTAILS';
export const GET_COCKTAILS_SUCCESS = 'GET_COCKTAILS_SUCCESS';
export const GET_COCKTAILS_REJECTED = 'GET_COCKTAILS_REJECTED';

export const fetchData = (bool: boolean): IActionCreator => ({
    type: GET_COCKTAILS,
    payload: bool,
})

export const fetchDataSuccess = (data: any): IActionCreator => {
    return {
        type: GET_COCKTAILS_SUCCESS,
        payload: { drinks: data },
        loading: false,
    }
}


export const fetchDataRejected = (error: any): IActionCreator => {
    return {
        type: GET_COCKTAILS_REJECTED,
        payload: error,
        loading: false,
    }
};

export const getCocktails = (criteria?: string) => {
    return (dispatch) => {
        dispatch(fetchData(true));
        fetch(`${API_URL}${(criteria) ? `s=${criteria}` : ``}`)
            .then(isOk)
            .then((data) => {
                (isEmptySearch(data.drinks))
                    ? dispatch(fetchDataRejected('Not found'))
                    : dispatch(fetchDataSuccess(data.drinks))

                console.log(data.drinks);
                return data.drinks;

            }).catch(error => dispatch(fetchDataRejected(error)))
    }
}