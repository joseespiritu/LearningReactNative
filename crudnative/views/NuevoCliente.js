import React, { useState } from 'react';
import { View, StyleSheet, Platform } from "react-native";
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from "react-native-paper";
import globalStyles from '../styles/global';
import axios from 'axios';

const NuevoCliente = ({navigation, route}) => {

    const { guardarConsultarAPI } = route.params;

    // Campos Formulario
    const [nombre, guardarNombre] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [correo, guardarCorreo] = useState('');
    const [empresa, guardarEmpresa] = useState('');
    const [alerta, guardarAlerta] = useState(false);

    // Almacena el cliente en la BD
    const guardarCliente = async () => {
        // Validar
        if(nombre === '' || telefono === '' || correo === '' || empresa === ''){
            guardarAlerta(true);
            return;
        }

        //Generar el cliente
        const cliente = {nombre, telefono, empresa, correo};
        console.log(cliente);

        // Guardar el cliente en la API
        try {
            if(Platform.OS === 'ios'){
                // para IOS
                await axios.post('http://localhost:3000/clientes', cliente)
            } else {
                // para Android
                await axios.post('http://10.0.2.2:3000/clientes',cliente)
            }
            
        } catch (error) {
            console.log(erro);
        }

        // Redireccionar
        navigation.navigate('Inicio');

        // LImpiar el Form (opcional)
        guardarNombre('');
        guardarTelefono('');
        guardarCorreo('');
        guardarEmpresa('');

        // Cambiar a True para traernos el nuevoCliente
        guardarConsultarAPI(true);
    }

    return (
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
            <TextInput
                style={styles.input}
                label="Nombre"
                placeholder="Jose"
                value={nombre}
                onChangeText={ texto => guardarNombre(texto)}
            />
            <TextInput
                style={styles.input}
                label="Telefono"
                placeholder="32112123"
                value={telefono}
                onChangeText={texto => guardarTelefono(texto)}
            />
            <TextInput
                style={styles.input}
                label="Correo"
                placeholder="correo@correo.com"
                value={correo}
                onChangeText={texto => guardarCorreo(texto)}
            />
            <TextInput
                style={styles.input}
                label="Empresa"
                placeholder="Nombre Empresa"
                value={empresa}
                onChangeText={texto => guardarEmpresa(texto)}
            />

            <Button icon="pencil-circle" mode="contained"
                onPress={() => guardarCliente()}    
            >
                Guardar Cliente
            </Button>

            <Portal>
                <Dialog
                    visible={alerta}
                    onDismiss={() => guardarAlerta(false)}
                >
                    <Dialog.Title>Error</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Todos los campos son obligatorios</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => guardarAlerta(false)}>OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: 'transparent'
    }
})

export default NuevoCliente;
