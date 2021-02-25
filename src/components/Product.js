import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {add_product_action, remove_product_action} from '../redux/actions/actions'
import { Button, Popconfirm } from 'antd';
import { List, Card } from 'antd';

const Product = ({producto}) => {
console.log("producto", producto)
const [id, setId] = React.useState("")
const [nombre, setNombre] = React.useState("")
const [precio, setPrecio] = React.useState("")
const dispatch = useDispatch();
const product_store = useSelector((state) => state.product_store);
const deleteProduct = () =>{
    //product_store.product  0 ? dispatch(remove_product_action(1))
}
    return (
        <React.Fragment>
            {/* <h1>{product_store.product}</h1> */}
            <Card title={producto.nombre}>{`Precio: ${producto.precio}`}</Card>
            <Button onClick={() => {
                dispatch(add_product_action(producto));
            }}>Agregar Producto</Button>
            <Popconfirm
                title="Estas seguro de querer eliminar el producto?"
                okText="Si"
                cancelText="No"
            >
                <Button danger onClick={() => {
                    dispatch(remove_product_action(1));
                }}>Eliminar producto</Button>
            </Popconfirm>
        </React.Fragment>
    )
}

export default Product
