import { ICocktailsState } from "../domain/ICocktailState";

export const getCocktailsSelector = (state: ICocktailsState) =>  state.cocktails.drinks;
export const getCocktailsLoadingSelector = (state) => state.loading;
export const getCocktailsErrorSelector = (state) => state.errorMessage;
