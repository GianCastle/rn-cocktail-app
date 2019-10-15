export const getCocktailsSelector = (state) => state.cocktails.drinks;
export const getCocktailsLoadingSelector = (state) => { console.log(state); return state.loading};
export const getCocktailsErrorSelector = (state) => state.errorMessage;
