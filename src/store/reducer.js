import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.RESET:
            return {
                ...state,
                counter: 0
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            /*first method to delete
            const id = 2;
            const newArray = [...state.results];
            newArray.splice(id, 1);
            return {
                ...state,
                results: newArray
            } */
            const updatedArray = state.results.filter(result => result.id !== action.resultEleId);
            return { 
                ...state,
                results: updatedArray
            }
    
    }
    return state;
}

export default reducer;