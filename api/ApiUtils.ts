export const isOk = (response: Response) =>
    response.ok 
        ? response.json() 
        : Promise.reject(response.statusText)

export const getDrinksOrEmpty = (data) => 
    (data.drinks === null || data.drinks.lenght <= 0) ? [] : data.drinks

