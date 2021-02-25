import {ADD_PRODUCT, REMOVE_PRODUCT} from '../actions/actionsType';

const initialState = {
    product: [], //sea array con un objeto con los 3 campos para inicializar
};

const product_store = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT:{
            return{
                ...state,
                product: [...state.product, action.payload]
            }
        }
        
        case REMOVE_PRODUCT:{
            return{
                ...state,
                product: state.product - action.payload
            }
        }

        default: return state
    }
}

export default product_store;