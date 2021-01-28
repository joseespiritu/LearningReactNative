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

  //Elimina los paciente del state
  const eliminarPaciente = id => {
    setCitas( (citasActuales) => {
       return citasActuales.filter( cita => cita.id !== id );
    });
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <Text style={styles.titulo}>{ citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}</Text>
      <FlatList
        data={citas}
        renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente} /> }
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
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
