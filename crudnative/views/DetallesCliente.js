import React from 'react';
import { Headline, Text, Subheading, Button } from "react-native-paper";
import { View, StyleSheet, Alert, Platform } from "react-native";
import globalStyles from '../styles/global';
import axios from 'axios';

const DetallesCliente = ({navigation, route}) => {
    const { guardarConsultarAPI } = route.params;
    const { nombre, telefono, correo, empresa, id } = route.params.item;

    const mostrarConfirmacion = () => {
        Alert.alert(
            '¿Deseas eliminar este cliente?',
            'Un contacto eliminado no se puede recuperar',
            [
                { text: 'Si Eliminar', onPress: () => eliminarContacto()},
                { text: 'Cancelar', style: 'cancel'}
            ]
        )
    }

    const eliminarContacto = async () => {
        if(Platform.OS === 'ios'){
            // para IOS
            const url = `http://localhost:3000/clientes/${id}`;
            try {
                await axios.delete(url);
            } catch (error) {
                console.log(error);
            }
        } else {
            // para Android
            const url = `http://10.0.2.2:3000/clientes/${id}`;
            try {
                await axios.delete(url);
            } catch (error) {
                console.log(error);
            }
        }
        
        // Redireccionar
        navigation.navigate('Inicio');

        // Volver a consultar
        guardarConsultarAPI(true);
    }

    return (
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>{nombre}</Headline>
            <Text style={styles.texto}>Empresa: <Subheading>{empresa}</Subheading></Text>
            <Text style={styles.texto}>Correo: <Subheading>{correo}</Subheading></Text>
            <Text style={styles.texto}>Telefono: <Subheading>{telefono}</Subheading></Text>

            <Button
                mode="contained"
                icon="cancel"
                style={styles.boton}
                onPress={() => mostrarConfirmacion()}
            >
                Eliminar Cliente
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        marginBottom: 20,
        fontSize: 18
    },
    boton: {
        marginTop: 100,
        backgroundColor: 'red'
    }
});

export default DetallesCliente;
