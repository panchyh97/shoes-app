import React from 'react';
import { FlatList, Text } from 'react-native';

import ShoeItem from './ShoeItem';

const ShoeList = ({ shoes }) => {

    const renderItem = ({ item }) => {
        return <ShoeItem item={item} />
    };

    return (
        <FlatList 
            style={{ width: '100%' }}
            data={shoes}
            renderItem={renderItem}
        />
    );
};

export default ShoeList;