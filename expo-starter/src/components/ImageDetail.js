import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ imageSource,title,scoreImage }) => {
    /* console.log(props); */
    return (
    <View>
        <Image source={imageSource} />
        <Text>{title}</Text>
        <Text>Image Score - {scoreImage}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail