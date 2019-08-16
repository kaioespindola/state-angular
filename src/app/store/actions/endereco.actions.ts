import { Action } from '@ngrx/store';
import { EnderecoSegurado } from '../../models/endereco-segurado';

export enum EnderecoActionTypes {
    ADD_ITEM = '[Endereco] Add Item',
    RESET = '[Endereco] Reset State'
}

export class AddEnderecoAction implements Action {
    readonly type = EnderecoActionTypes.ADD_ITEM;
    constructor(public payload: EnderecoSegurado) {}
}

export class ResetStateAction implements Action {
    readonly type = EnderecoActionTypes.RESET;
    constructor() {}
}

export type EnderecoAction = AddEnderecoAction | ResetStateAction;