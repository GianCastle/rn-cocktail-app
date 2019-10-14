export const isOk = (response: Response) =>
    response.ok 
        ? response.json() 
        : Promise.reject(response.statusText)

export const isEmptySearch = (data) => 
    data === null || data.lenght <= 0;

export const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?`;
