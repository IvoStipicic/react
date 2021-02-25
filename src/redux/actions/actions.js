import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionsType"

export const add_product_action = (producto) => {
    return {
        type: ADD_PRODUCT,
        payload: producto
    }
}

export const remove_product_action = (producto) => {
    return {
        type: REMOVE_PRODUCT,
        payload: producto
    }
}