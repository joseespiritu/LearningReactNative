import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  /* console.log(props.navigation); */

  return (
  <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to components demo"
    />
    <Button
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
    />
    <Button
      title="Go to Image Screen"
      onPress={() => navigation.navigate('Image')}
    />
    <Button
      title="Go to Counter"
      onPress={() => navigation.navigate('Counter')}
    />
    <Button
      title="Go to Color"
      onPress={() => navigation.navigate('Color')}
    />
    <Button
      title="Go to Square Screen"
      onPress={() => navigation.navigate('Square')}
    />
    {/* <TouchableOpacity>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> */}
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;