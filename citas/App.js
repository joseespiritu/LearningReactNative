import React, {useState} from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Cita from "./componentes/Cita";


const App = () => {
  console.log("Desde consola");

  // definir el state de citas
  const [citas, setCitas] = useState([
    { id: "1", paciente: "Hook", propietario: 'Juan', sintomas: "No come" },
    { id: "2", paciente: "Redux", propietario: 'Iztel', sintomas: "No Duerme" },
    { id: "3", paciente: "Native", propietario: 'Josue', sintomas: "No Canta" }
  ]);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas</Text>

      <FlatList
        data={citas}
        renderItem={ ({item}) => <Cita item={item}/> }
        keyExtractor={ cita => cita.id }
      />
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
