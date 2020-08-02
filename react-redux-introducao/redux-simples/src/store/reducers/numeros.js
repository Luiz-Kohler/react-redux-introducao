import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from '../actions/actionsType'

const initialState = {
    min: 1,
    max: 100
}

export default function(state = initialState, action) {

    console.log('$combineReducers')

    switch (action.type) {
        case NUM_MIN_ALTERADO:
            console.log('$NUM_MIN_ALTERADO')
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERADO:
            console.log('$NUM_MAX_ALTERADO')
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}