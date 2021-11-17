import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { getShoes } from '../api';
import ShoesList from '../components/ShoeList';

const HomeScreen = () => {

    const [shoes, setShoes] = useState([]);

    const loadShoes = async () => {
        const data = await getShoes();
        setShoes(data);
    };

    useEffect(() => {
        loadShoes();
    }, []);

    return (
        <View>
            <ShoesList shoes={shoes} />
        </View>
    );
};

export default HomeScreen;