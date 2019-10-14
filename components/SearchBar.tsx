import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export const SearchBar = (props) => {

    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                <Text style={styles.iconBack}>{' < '}</Text>
                <Text>Back</Text>
            </View>
            <View style={styles.appTitle}>
                <Text>Cocktails Search</Text>
            </View>
            <View style={styles.cancelButton}>
                <Text>Cancel</Text>
            </View>
            <TextInput
                style={styles.textInput}
                onChangeText={props.onChangeInput}
            />
        </View>

    )
}

const styles = StyleSheet.create({
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