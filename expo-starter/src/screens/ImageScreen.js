import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" scoreImage={10} imageSource={require('../../assets/forest.jpg')} />
            <ImageDetail title="Beach" scoreImage={8} imageSource={require('../../assets/beach.jpg')} />
            <ImageDetail title="Mountain" scoreImage={7} imageSource={require('../../assets/mountain.jpg')} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen