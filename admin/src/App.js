import{Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'

import {listProducts, editProduct, createProduct} from './components/Products'

import {listUsers, editUser, createUser} from './components/Users'

import {listOrders } from './components/Orders'

function App() {
  return (
    <div className="App">
      <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
        <Resource
        name="products"
        list={listProducts}
        edit={editProduct}
        create={createProduct}
        >

        </Resource>
        <Resource
        name='users'
        list={listUsers}
        edit={editUser}
        create={createUser} >

        </Resource>
        <Resource
        name='orders'
        list={listOrders}>
        </Resource>
      </Admin>
    </div>
  );
}

export default App;
