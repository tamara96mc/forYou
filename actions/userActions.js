import firebase from '../firebase/config';

import {
    CREAR_USUARIO,
    CREAR_USUARIO_EXITO,
    CREAR_USUARIO_ERROR

} from '../types';


export function crearNuevoUsuarioAction(usuario) {

    return async (dispatch) => {

        try {
            debugger
            dispatch(crearUsuario());

            // crear usuario en firebase
            const nuevoUsuario = await firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password);

            debugger
            console.log(nuevoUsuario.user.displayName);
            await nuevoUsuario.user.updateProfile({
                displayName: usuario.nombre
            })

            console.log('usuario creado', nuevoUsuario.user.displayName)
            // Si todo sale bien, actualizar el state
            dispatch(crearUsuarioExito(nuevoUsuario.user.displayName));
            


        } catch (error) {
            console.log(error);
            // si hay un error cambiar el state
            dispatch(crearUsuarioError(true));

        }

    }

}

    const crearUsuario = () => ({
        type: CREAR_USUARIO,
        payload: true
    });

    // si el producto se guarda en la base de datos
    const crearUsuarioExito = usuario => ({
        type: CREAR_USUARIO_EXITO,
        payload: usuario
    })

    // si hubo un error
    const crearUsuarioError = estado => ({
        type: CREAR_USUARIO_ERROR,
        payload: estado
    });

/*
    export function crearNuevoUsuarioAction(usuario) {  
        return async dispatch => {
          function onSuccess(user) {
            dispatch({
                type: CREAR_USUARIO_EXITO,
                payload: user
            });
            return user;
          }
          function onError(error) {
            dispatch({
                type: CREAR_USUARIO_ERROR,
                payload: error
            });
            return true;
          }
          try {
            const nuevoUsuario = await firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password);

            await nuevoUsuario.user.updateProfile({
                displayName: usuario.nombre
            })

            let user = {
                id: nuevoUsuario.user.uid,
                email: nuevoUsuario.user.email,
                displayName: nuevoUsuario.user.displayName
            }
            return onSuccess(user);
          } catch (error) {
            return onError(true);
          }
        }
      }

      */