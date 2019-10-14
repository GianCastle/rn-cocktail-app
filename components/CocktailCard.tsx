import React from 'react';
import { View, Image, Text } from 'react-native';

export const CocktailCard = (props) => (
    <View>
        <View style={{ flexDirection: 'row', margin: 24, width: 200 }}>
            <View style={{ width: 100 }}>
                <Image
                    style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
                    source={{ uri: props.strDrinkThumb }}
                />
            </View>
            
            <View style={{ padding: 10, width: 100 }}>
                <Text style={{ justifyContent: 'center', fontSize: 22, textAlign: 'center' }}>{props.strDrink}</Text>
            </View>
        </View>
    </View>

)