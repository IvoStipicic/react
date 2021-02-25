import React from 'react'
import { List, Card } from 'antd';
import Product from '../components/Product';
import {useSelector} from 'react-redux';
const CarritoDeCompras = () => {
  /* const data = [
    {
      title: 'Pruducto 1',
    },
  ]; */
  const product_store = useSelector((state) => state.product);

  console.log("Productos: ", product_store);
return (
/*   {/* <List
    grid={{ column: 1 }}
    dataSource={data}
    renderItem={item => (
    <List.Item>
      <Card title={item.title}>Precio: $100 - Cantidad: 0</Card>
      <Product/>
    </List.Item> 
    
  )}
/> */
    <>
      <h1>Carrito de compras</h1>
      <List
        grid={{ column: 1 }}
        dataSource={product_store}
        renderItem={item => (
      <List.Item>
        <Card title={item.nombre}>{`Precio: ${item.precio}`}</Card>
        <Product/>
      </List.Item> 
      )}
      />
    </>
)
}

export default CarritoDeCompras
