import { EnderecoSegurado } from '../../models/endereco-segurado';
import { EnderecoAction, EnderecoActionTypes } from '../actions/endereco.actions';

const initialState: EnderecoSegurado = {
    cep: '',
    logradouro: '',
    numeroLogradouro: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
}

export function EnderecoReducer(state: EnderecoSegurado = initialState, action: EnderecoAction) {

    switch(action.type) {
        default:
            return state;
        case EnderecoActionTypes.ADD_ITEM:
            return action.payload
        case EnderecoActionTypes.RESET:
            return [initialState];
    }

}