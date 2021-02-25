import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import ProductList from './pages/ProductList';
import CarritoDeCompras from './pages/CarritoDeCompras';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ProductList/>
      <CarritoDeCompras/>
    </div>
    </Provider>
  );
}

export default App;
