import { ShoppingItem } from "../models/shopping-item.model";
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
    {
        id: "1",
        name: "Diet Coke"
    }
];

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {

    switch(action.type) {
        default:
            return state;
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload]
        case ShoppingActionTypes.REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload);
        case ShoppingActionTypes.RESET:
            return [...initialState];
    }
}