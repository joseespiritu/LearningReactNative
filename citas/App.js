import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const App = () => {
  console.log("Desde consola");
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#aa076b',
    flex: 1
  },
  titulo: {
    color: '#ffffff',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
