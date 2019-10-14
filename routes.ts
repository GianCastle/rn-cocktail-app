import { HomeScreen } from './screens/home/HomeScreen';
import { CocktailsScreen } from './screens/cocktails/CocktailsScreen';

type Screen = {
    [key: string]: { screen: any }
}

export const routes: Screen = {
    Home: { screen: HomeScreen },
    Cocktails: { screen: CocktailsScreen }
}
