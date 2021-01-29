import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newText) => setPassword(newText)}
            />
            { password.length < 5
            ? ( <Text>Password must be longer than 5 characters</Text> )
            : ( <Text>My Password is {password }</Text> )
            }
            
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        height: 40
    }
});

export default TextScreen;