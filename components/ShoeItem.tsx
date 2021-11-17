import React from 'react';
import { View, Text } from 'react-native';

const ShoeItem = ({ item }) => {
    return (
        <View>
            <Text>Modelo: {item.modelo}</Text>
            <Text>Marca: {item.marca}</Text>
            <Text>Descripción: {item.descripcion}</Text>
            <Text>Precio: $ {item.precio}</Text>
            <Text>Stock: {item.stock}</Text>
        </View>
    );
};

export default ShoeItem;