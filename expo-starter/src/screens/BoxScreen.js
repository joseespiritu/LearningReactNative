import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOne}/>
            <View style={styles.viewTwo}/>
            <View style={styles.viewThree}/>
        </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOne: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwo: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThree: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;