import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {



    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [sintomas, guardarSintomas] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    // Fecha
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmaFecha = (date) => {
        const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
        guardarFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };

    //Hora
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmaHora = (hora) => {
        const opciones = { hour: 'numeric', minute: '2-digit', hour12: false };
        guardarHora(hora.toLocaleString('en-US', opciones));
        hideTimePicker();
    };

    //Crear nueva cita
    const crearNuevaCita = () => {
        
    };

    return (
        <>
        <View style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ texto => guardarPaciente(texto)}
                />
            </View>

            <View>
                <Text style={styles.label}>Dueño:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ texto => guardarPropietario(texto)}
                />
            </View>

            <View>
                <Text style={styles.label}>Teléfono Contacto:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ texto => guardarTelefono(texto)}
                    keyboardType='numeric'
                />
            </View>

            <View>
                <Text style={styles.label}>Fecha:</Text>
                <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmaFecha}
                    onCancel={hideDatePicker}
                    locale='es_ES'
                    headerTextIOS="Elige la fecha"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="confirmar"
                />
                <Text>{ fecha }</Text>
            </View>

            <View>
                <Text style={styles.label}>Hora:</Text>
                <Button title="Seleccionar Hora" onPress={showTimePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmaHora}
                    onCancel={hideTimePicker}
                    locale='es_ES'
                    headerTextIOS="Elige una hora"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="confirmar"
                    is24Hour
                />
                <Text>{ hora }</Text>
            </View>

            <View>
                <Text style={styles.label}>Síntomas:</Text>
                <TextInput
                    multiline
                    style={styles.input}
                    onChangeText={ texto => guardarSintomas(texto)}
                />
            </View>

            <View>
                <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btnSubmit}>
                    <Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
                </TouchableHighlight>
            </View>

        </View>
        </>
    );
};

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#fff',
        marginHorizontal: '2.5%',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        borderColor: '#e1e1e1',
        borderWidth: 1,
        height: 50,
        borderStyle: 'solid',
        marginTop: 10
    },
    btnSubmit: {
        padding:10,
        backgroundColor: '#7d024d',
        marginVertical: 10
    },
    textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    }
});

export default Formulario;