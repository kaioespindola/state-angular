import { ShoppingItem } from './shopping-item.model';
import { EnderecoSegurado } from 'src/app/models/endereco-segurado';

export interface AppState {
    readonly shopping: Array<ShoppingItem>;
    readonly endereco: EnderecoSegurado;
}