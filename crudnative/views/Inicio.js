import React, { useState, useEffect } from 'react';
import { Text, Platform, FlatList, View, StyleSheet } from "react-native";
import axios from 'axios';
import { List, Headline, Button, FAB } from "react-native-paper";
import globalStyles from '../styles/global';

const Inicio = ({navigation}) => {

    // state de la APP
    const [ clientes, guardarClientes ] = useState([]);
    const [ constultarAPI, guardarConsultarAPI ] = useState(true);

    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                if(Platform.OS === 'ios'){
                    // para IOS
                    const resultado = await axios.get('http://localhost:3000/clientes')
                    guardarClientes(resultado.data);
                    guardarConsultarAPI(false);
                } else {
                    // para Android
                    const resultado = await axios.get('http://10.0.2.2:3000/clientes')
                    guardarClientes(resultado.data);
                    guardarConsultarAPI(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
        if(constultarAPI){
            obtenerClientesApi();
        }
    }, [constultarAPI]);

    return (
        <View style={globalStyles.contenedor}>

            <Button icon="plus-circle"
                onPress={() => navigation.navigate("NuevoCliente", { guardarConsultarAPI })}
            >
                Nuevo Cliente
            </Button>

            <Headline style={globalStyles.titulo}>{clientes.length > 0 ? "Clientes" : "Aún no hay Clientes"}</Headline>

            <FlatList
                data={clientes}
                keyExtractor={ cliente => (cliente.id).toString()}
                renderItem={({item}) => (
                    <List.Item
                        title={item.nombre}
                        description={item.empresa}
                        onPress={() => navigation.navigate("DetallesCliente", { item, guardarConsultarAPI })}
                    />
                )}
            />

            <FAB 
                icon="plus"
                style={styles.fab}
                onPress={() => navigation.navigate("NuevoCliente", { guardarConsultarAPI })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 20
    }
})

export default Inicio;
