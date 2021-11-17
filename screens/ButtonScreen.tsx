import React from 'react';
import { Button, Alert } from 'react-native';
import Layout from '../components/Layout';

const ButtonScreen = () => {

    const message: string = "Muy buen día :)"

    return (
        <Layout>
            <Button
                title="Mostrar mensaje"
                onPress= {() => Alert.alert(message)}
            />
        </Layout>
    );
};

export default ButtonScreen;