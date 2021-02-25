import React from 'react'
import { List, Card } from 'antd';
import Product from '../components/Product';


const ProductList = () => {

  const productos = [ 
    {
        id: 1,
        nombre: 'Caja',
        precio: 100,
        },
        {
        id: 2,
        nombre: 'Mesa',
        precio: 400,
        }
  ]

    return (
        <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={productos}
            renderItem={(item) => (
            <List.Item>
                <Product producto={item}/>
            </List.Item>
            )}
        />
    )
}

export default ProductList
