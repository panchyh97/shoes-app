import React from 'react';
import { 
    Button, 
    Alert, 
    View 
} from 'react-native';

const ButtonScreen = () => {
    return (
        <View>
            <Button
                title="Hola mundo, soy un botón"
                onPress= {() => Alert.alert('Soy un mensaje')}
                color= 'black'
            />
        </View>
    );
};

export default ButtonScreen;