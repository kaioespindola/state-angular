import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';
import { Observable } from 'rxjs';
import { AddItemAction, RemoveItemAction } from './store/actions/shopping.actions';
import { FormGroup, FormControl } from '@angular/forms';
import { EnderecoSegurado } from './models/endereco-segurado';
import { AddEnderecoAction, ResetStateAction } from './store/actions/endereco.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'ngrx-shopping-list';
  shoppingItems: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: `${Math.random()}`, name: "" };

  enderecoSegurado: EnderecoSegurado;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping);
    let endereco = this.store.select(store => store.endereco);
    endereco.subscribe(endereco => {
      this.enderecoSegurado = endereco;

      this.enderecoSegurado = {
        cep: '79013-000',
        logradouro: '',
        numeroLogradouro: '',
        complemento: '',
        bairro: 'Liberdade',
        cidade: '',
        estado: 'São Paulo'
      }

    })
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

  updateFormItem() {
    console.log(this.enderecoSegurado);
    this.store.dispatch(new AddEnderecoAction(this.enderecoSegurado));
  }

  updateEndereco() {
    console.log(this.enderecoSegurado);
  }

  resetForm() {
    this.store.dispatch(new ResetStateAction())
  }

  updateEnderecoBloco() {
    let endereco = this.store.select(store => store.endereco);
    endereco.subscribe(endereco => {
      console.log('Enviando para servidor endereço:', endereco);
    })
  }
}
