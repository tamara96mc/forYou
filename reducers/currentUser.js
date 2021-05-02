import {
    CREAR_USUARIO,
    CREAR_USUARIO_EXITO,
    CREAR_USUARIO_ERROR

} from '../types';

// cada reducer tiene su propio state
var initialState = {
    usuario: '',
    error: false,
    loading: false
}

//const initialState = user ? { loggedIn: true, user } : {};

export default function(state = initialState, action) {

    switch(action.type) {
        case CREAR_USUARIO: 
            return {
                ...state,
                loading: action.payload
            }
        case CREAR_USUARIO_EXITO:
            debugger
            return {
                ...state,
                usuario: action.payload
            }
        case CREAR_USUARIO_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
        
        return state;
    }
}