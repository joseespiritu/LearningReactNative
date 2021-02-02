import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>child #1</Text>
            <Text style={styles.textTwoStyle}>child #2</Text>
            <Text style={styles.textThreeStyle}>child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textOneStyle: {
        backgroundColor: 'red',
        color: '#FFF',
        borderWidth: 3,
        borderColor: 'red',
        height: 100,
        width: 100
    },
    textTwoStyle: {
        backgroundColor: 'green',
        borderWidth: 3,
        borderColor: 'green',
        height: 100,
        width: 100,
        top: 100
    },
    textThreeStyle: {
        backgroundColor: 'purple',
        borderWidth: 3,
        borderColor: 'purple',
        height: 100,
        width: 100
    }
});

export default BoxScreen;