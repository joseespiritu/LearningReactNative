
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

const App = () => {

  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  });

  const [ consultar, guardarConsultar ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});
  const [ bgcolor, guardarBgcolor ] = useState('rgb(71,149,212)');
  const { ciudad, pais } = busqueda;

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  }

  const bgColorApp = {
    backgroundColor: bgcolor
  }

  const mostrarAlerta = () => {
    Alert.alert(
        'Error',
        'No hay resultados intenta con otra ciudad o país',
        [{text: 'Ok'}]
    )
  }

  useEffect(() => {
    const consultarClima = async () => {
      if(consultar) {
        const appId = 'f284687897f1ddfeb17e468592eb0107'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarResultado(resultado);
          guardarConsultar(false);

          // Modifica los colores de fondo basado en la temperatura
          const Kelvin = 273.15;
          const {main} = resultado;
          const actual = main.temp -Kelvin;

          if(actual < 10) {
            guardarBgcolor('rgb(105,108,149)');
          } else if( actual >= 10 && actual < 25){
            guardarBgcolor('rgb(71,149,212)');
          } else {
            guardarBgcolor('rgb(178,28,61)');
          }

        } catch (error) {
          mostrarAlerta();
        }
      }
    }
    consultarClima();
  }, [consultar]);

  return (
    <>
    <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
      <View style={[styles.app, bgColorApp]}>
        <View style={styles.contenido}>
          <Clima 
            resultado={resultado}
          />
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
    justifyContent: 'center'
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});

export default App;