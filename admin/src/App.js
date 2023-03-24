import{Admin, Resource } from 'react-admin'


import {listProducts, editProduct, createProduct} from './components/Products'
import {listUsers, editUser} from './components/Users'

import {listOrders } from './components/Orders'
import React from 'react';

import { authProvider } from '../src/authProvider.ts'
import { dataProvider1 } from './network/dataProvider'

function App() {



  return (
    <div className="App">
      <Admin authProvider={authProvider} dataProvider={dataProvider1}>
        <Resource
        name="product"
        list={listProducts}
        edit={editProduct}
        hasEdit={true}
        create={createProduct}
        >
           </Resource>
        <Resource
        name='customer'
        list={listUsers}
        edit={editUser} >

        </Resource>
        <Resource
        name='order'
        list={listOrders}
       >
        </Resource>
      </Admin>
      <Admin>

      </Admin>
    </div>
  );

  }
export default App;
