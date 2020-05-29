
const initialState={
    persons: []
};

const reducer = (state = initialState, action) =>{

    if(action.type === 'ADDPERSON')
    {
        // const newPerson = {
        //     id: Math.random(), // not really unique but good enough here!
        //     name: 'Max',
        //     age: Math.floor( Math.random() * 40 )
        // }

        return {
            ...state,
            persons: state.persons.concat(action.val)};
    }
    if(action.type === 'REMOVE')
    {
        return {
            ...state,
            persons: state.persons.filter(p => p.id !== action.val)
        }
    }

    return state;
};

export default reducer;