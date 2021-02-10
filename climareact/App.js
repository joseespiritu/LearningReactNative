
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Formulario from './components/Formulario';

const App = () => {

  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  });

  const [ consultar, guardarConsultar ] = useState(false);

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  }

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    if(consultar) {
      const appId = 'f284687897f1ddfeb17e468592eb0107'
      const url = `api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      console.log(url);
    }
  }, [consultar]);

  return (
    <>
    <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
      <View style={styles.app}>
        <View style={styles.contenido}>
        <Formulario 
          busqueda={busqueda}
          guardarBusqueda={guardarBusqueda}
          guardarConsultar={guardarConsultar}
        />
        </View>
      </View>
    </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center'
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});

export default App;
