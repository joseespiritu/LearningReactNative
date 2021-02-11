import React, { useState, useEffect } from 'react';
import { Text, Platform, FlatList, View } from "react-native";
import axios from 'axios';
import { List } from "react-native-paper";

const Inicio = () => {

    // state de la APP
    const [ clientes, guardarClientes ] = useState([]);

    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                if(Platform.OS === 'ios'){
                    // para IOS
                    const resultado = await axios.get('http://localhost:3000/clientes')
                    guardarClientes(resultado.data);
                } else {
                    // para Android
                    const resultado = await axios.get('http://10.0.2.2:3000/clientes')
                    guardarClientes(resultado.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        obtenerClientesApi();
    }, []);

    return (
        <View>
            <FlatList
                data={clientes}
                keyExtractor={ cliente => (cliente.id).toString()}
                renderItem={({item}) => (
                    <List.Item
                        title={item.nombre}
                        description={item.empresa}
                    />
                )}
            />
        </View>
    );
}

export default Inicio;
