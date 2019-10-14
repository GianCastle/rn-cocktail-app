import React, { FC } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { HomeScreenProps } from './HomeScreenProps';

import { HomeScreenStyles } from './HomeScreenStyles';

import { useNavigation } from 'react-navigation-hooks';

export const HomeScreen: FC<HomeScreenProps> = (props) => {
    const { navigate } = useNavigation();
    const goToCocktails = () => navigate('Cocktails');
    
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Button
                    title="Search your favorite cocktails"
                    onPress={goToCocktails}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create<HomeScreenStyles>({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#555'
    },

    innerContainer: {
        height: '100%',
        padding: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },

    heading: {
        fontSize: 26,
        textAlign: 'center',
    }

});

