import { createStore, applyMiddleware } from "redux"; //soporta las acciones asincronas
import thunk from 'redux-thunk'; //es una funcion que nos da un paquete, acepta el metodo dispatch para poder manejar las funciones asincronas
import rootReducer from "./reducer";
import {composeWithDevTools} from 'redux-devtools-extension';

const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;