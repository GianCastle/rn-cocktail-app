import { NavigationNavigatorProps } from 'react-navigation';
import { getCocktailsErrorSelector, getCocktailsSelector, getCocktailsLoadingSelector } from '../../redux/selectors';
import { bindActionCreators } from 'redux';
import { getCocktails } from '../../redux/actions';

export interface ICocktailScreenProps extends NavigationNavigatorProps {
    cocktails: any[];
    loading: boolean;
    error: string;
    navigation: any; //let's keep as `any` for now to avoid linting errors

    getCocktails: (criteria: string) => any;
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
    getCocktails: getCocktails
}, dispatch)
