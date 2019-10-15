import {ICocktail} from './ICocktail';

export interface ICocktailsState {
    cocktails: { drinks: ICocktail[]};
    loading: boolean;
    errorMessage: string;
}