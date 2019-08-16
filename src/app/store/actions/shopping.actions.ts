import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
    ADD_ITEM = '[Shopping] Add Item',
    REMOVE_ITEM = '[Shopping] Remove Item',
    RESET = '[Shopping] Reset State',
    UPDATE_ITEM = '[]'
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;
    constructor(public payload: ShoppingItem) {}
}

export class UpdateItemAction implements Action {
    readonly type = ShoppingActionTypes.UPDATE_ITEM;
}

export class RemoveItemAction implements Action {
    readonly type = ShoppingActionTypes.REMOVE_ITEM;
    constructor(public payload: string) {}
}

export class ResetStateAction implements Action {
    readonly type = ShoppingActionTypes.RESET;
    constructor() {};
}

export type ShoppingAction = AddItemAction | RemoveItemAction | ResetStateAction;
