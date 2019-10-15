import { NavigationNavigatorProps } from 'react-navigation';
import { getCocktailsErrorSelector, getCocktailsSelector, getCocktailsLoadingSelector } from '../../redux/selectors';
import { bindActionCreators } from 'redux';
import { getCocktails, clearCocktails } from '../../redux/actions';
import { NavigationStackOptions } from 'react-navigation-stack';

export interface ICocktailScreenProps extends NavigationNavigatorProps {
    cocktails: any[];
    loading: boolean;
    error: string;
    navigationOptions: NavigationStackOptions;
    getCocktails: (criteria: string) => void;
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
