import { createStore, combineReducers } from 'redux'

import numerosReducer from './reducers/numeros'

const redurcers = combineReducers({
    numeros: numerosReducer
})

function storeConfig() {
    return createStore(redurcers)
}

export default storeConfig