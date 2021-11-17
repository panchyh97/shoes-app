import React from 'react';
import { 
    View, 
    Text,
    StyleSheet 
} from 'react-native';

const ShoeItem = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>Modelo: {item.modelo}</Text>
            <Text style={styles.itemTitle}>Marca: {item.marca}</Text>
            <Text style={styles.itemTitle}>Descripción: {item.descripcion}</Text>
            <Text style={styles.itemTitle}>Precio: $ {item.precio}</Text>
            <Text style={styles.itemTitle}>Stock: {item.stock}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10
    },
    itemTitle: {
        color: '#FFF'
    }
});


export default ShoeItem;