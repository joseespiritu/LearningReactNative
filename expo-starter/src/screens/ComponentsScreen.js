import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {

    const name = 'Jose';

    return (
    <View>
        <Text style={styles.titleStyle}>Getting Starter with React Native!</Text>
        <Text style={styles.nameStyle}>My name is { name }</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 30
    }
});


export default ComponentsScreen;