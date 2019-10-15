import { NavigationNavigatorProps } from 'react-navigation';
import { getCocktailsErrorSelector, getCocktailsSelector, getCocktailsLoadingSelector } from '../../redux/selectors';
import { bindActionCreators } from 'redux';
import { getCocktails, clearCocktails } from '../../redux/actions';
import { NavigationStackOptions } from 'react-navigation-stack';

export interface ICocktailScreenProps extends NavigationNavigatorProps {
    cocktails: any[];
    loading: boolean;
    error: any;
    navigation: any; //let's keep as `any` for now to avoid linting errors
    navigationOptions: NavigationStackOptions;
    getCocktails: (criteria: string) => any;
    clearCocktails: () => void;
}

export const mapStateToProps = (state) => ({
    error: getCocktailsErrorSelector(state),
    cocktails: getCocktailsSelector(state),
    loading: getCocktailsLoadingSelector(state)
})


export interface ICockTailScreenState {
    cocktails: any[];
    criteria: string;
}

export const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCocktails: getCocktails,
    clearCocktails: clearCocktails
}, dispatch)
