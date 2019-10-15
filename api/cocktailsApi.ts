import {isOk, getDrinksOrEmpty} from './ApiUtils'

const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?`;

export const getCocktailsSuggestions = (criteria?: string ): Promise<any[]>  =>  {
 return fetch(`${API_URL}${(criteria) ? `s=${criteria}` : ``}`)
        .then(isOk)
        .then(getDrinksOrEmpty)
}
    