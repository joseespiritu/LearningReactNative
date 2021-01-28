import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableHighlight, Alert } from "react-native";

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;

    return (
        <View style={styles.resultado}>
            <Text style={styles.texto}>
                <Text style={styles.span}>{resultado.PRICE}</Text>
            </Text>
            <Text style={styles.texto}>Precio más alto del día: { ' ' }
                <Text style={styles.span}>{resultado.HIGHDAY}</Text>
            </Text>
            <Text style={styles.texto}>Precio más bajo del día: { ' ' }
                <Text style={styles.span}>{resultado.LOWDAY}</Text>
            </Text>
            <Text style={styles.texto}>Variación las últimas 24 horas: { ' ' }
                <Text style={styles.span}>{resultado.CHANGEPCT24HOUR} %</Text>
            </Text>
            <Text style={styles.texto}>Última actualización: { ' ' }
                <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    resultado: {

    },
    texto:{

    },
    precio:{

    },
    span: {

    }
});

export default Cotizacion;