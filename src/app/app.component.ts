import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';
import { Observable } from 'rxjs';
import { AddItemAction, RemoveItemAction, ResetStateAction } from './store/actions/shopping.actions';
import { FormGroup, FormControl } from '@angular/forms';
import { EnderecoSegurado } from './models/endereco-segurado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'ngrx-shopping-list';
  shoppingItems: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: `${Math.random()}`, name: "" };

  enderecoSegurado: EnderecoSegurado = {
    cep: '',
    logradouro: '',
    numeroLogradouro: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  };

  constructor(private store: Store<AppState>) {
    console.log(this.enderecoSegurado);
  }

  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping);
  }

  addItem() {
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: `${Math.random()}`, name: ''};
  }

  deleteItem(id: string) {
    this.store.dispatch(new RemoveItemAction(id));
  }

  resetState() {
    this.store.dispatch(new ResetStateAction());
  }

  updateEndereco() {
    console.log(this.enderecoSegurado);
  }
}
