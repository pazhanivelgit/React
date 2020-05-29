const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
    counter:0
};

//Reducer
const Reducer = (state=intialState, action)=>{
     if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter+1
        };
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter+10
        };
    }

    return state;
};

const store = createStore(Reducer);

console.log(store.getState());

store.subscribe(()=>{
    console.log('[subscription]', store.getState());
});

store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER', value:10});
console.log(store.getState());

