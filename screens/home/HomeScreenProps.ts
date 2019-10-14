import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface HomeScreenProps {
    headingTitle: string;
    searchButtonStyle?: StyleProp<ViewStyle>;
    headingTitleStyle?: StyleProp<TextStyle>;
}

export const homeScreenOptions = {
    title: 'Cocktail Search'
}