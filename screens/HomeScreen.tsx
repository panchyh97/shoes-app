import React, { useState, useEffect } from 'react';

import { getShoes } from '../api';
import Layout from '../components/Layout';
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
        <Layout>
            <ShoesList shoes={shoes} />
        </Layout>
    );
};

export default HomeScreen;