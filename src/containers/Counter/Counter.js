import React from 'react';
import { connect } from 'react-redux'; 
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

function Counter(props){
    return(
        <div>
            <CounterOutput value={props.ctr} ></CounterOutput>
            <CounterControl label="increment" value={props.ctr} clicked={props.onIncrementCounter} ></CounterControl>
            <CounterControl label="decrement" value={props.ctr} clicked={props.onDecrementCounter} ></CounterControl>
            <CounterControl label="reset" value={props.ctr} clicked={props.onResetCounter} ></CounterControl>
            <CounterControl label="add" value={props.ctr} clicked={props.onAddCounter} ></CounterControl>
            <CounterControl label="substract" value={props.ctr} clicked={props.onSubtractCounter} ></CounterControl>
            <hr/>
            <button onClick={props.onStoreResult} >STORE RESULT</button>
            <ul>
                { props.storedResults && props.storedResults.map(result=>(
                    <li key={result.id} onClick={() => props.onDeleteResult(result.id)}>{result.value}</li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onResetCounter: () => dispatch({type: actionTypes.RESET}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 10, name: 'sachin'}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultEleId: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);