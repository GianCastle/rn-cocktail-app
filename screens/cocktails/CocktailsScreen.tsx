import React, { } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import Constants from 'expo-constants';

import { CocktailCard } from '../../components/CocktailCard';

import {
    ICocktailScreenProps,
    mapStateToProps,
    mapDispatchToProps,
    ICockTailScreenState
} from './CocktailsScreenProps';

import { TextInput } from 'react-native-gesture-handler';

interface ICocktailScreenState {
    criteria: string;
}
class Screen extends React.Component<ICocktailScreenProps, ICocktailScreenState> {

    readonly state = { cocktails: [], criteria: '' }

    static navigationOptions = {
        header: null
    }

    goBack = () => this.props.navigation.goBack();

    onChangeInput = (value) => {
        this.setState({ criteria: value })

        if (this.state.criteria.length >= 3)
            this.props.getCocktails(value);
    }

    clearText = () => {
        this.onChangeInput('')
        this.props.clearCocktails();
    }

    render() {
        const { cocktails, loading, error } = this.props;
        console.log(loading);
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                        <Text style={styles.iconBack}>{' < '}</Text>
                        <Text onPress={() => this.goBack()}>Back</Text>
                    </View>
                    <View style={styles.appTitle}>
                        <Text>Cocktails Search</Text>
                    </View>
                    <View style={styles.cancelButton}>
                        <Text onPress={this.clearText}>Cancel</Text>
                    </View>
                </View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.onChangeInput}
                    value={this.state.criteria}
                />

                <SafeAreaView style={styles.container}>
                    {(loading)
                        ? <ActivityIndicator size="large" color="#5bcbea" />
                        : <FlatList
                            data={cocktails}
                            renderItem={({ item }) => <CocktailCard {...item} />}
                            keyExtractor={(item) => item.idDrink}
                        />
                    }
                    <Text style={{ fontSize: 20, color: 'red' }}>
                        {error.error}
                    </Text>
                    
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },

    header: {
        flexDirection: 'row'
    },

    iconBack: {
        fontSize: 25,
        color: 'blue',
        alignItems: 'center'
    },

    appTitle: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },

    textInput: {
        alignItems: 'center',
        backgroundColor: '#E6E8E9',
        borderRadius: 10,
        color: '#8E8E93',
        flexDirection: 'row',
        fontSize: 17,
        height: 43,
        margin: 8,
        marginVertical: 10,
        paddingHorizontal: 10
    },

    cancelButton: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export const CocktailsScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Screen);



