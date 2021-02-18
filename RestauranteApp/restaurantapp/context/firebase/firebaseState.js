import React, { useReducer } from 'react';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import firebase from '../../firebase/index';

const FirebaseState = props => {

    console.log(firebase);

    // Crear state inicial
    const initialState = {
        menu: []
    }

    // useReducer con dispatch para ejecutar las funciones
    const [ state, dispatch ] = useReducer(FirebaseReducer, initialState);

    return (
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebase
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseState;