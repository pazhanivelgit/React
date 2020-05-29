import React, { Component } from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    state = {
        name:'',
        age:''
    };

    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    onNameChangeHandler=(event)=>
    {
        this.setState({name:event.target.value});
    }

    onAgeChangeHandler = (event) => {
        this.setState({age: event.target.value});

    }

    render () {
        return (
            <div>
                <input type='text' onChange={this.onNameChangeHandler} value={this.state.name}></input>
                <input type='text' onChange={this.onAgeChangeHandler}></input>
                <AddPerson personAdded={()=>this.props.personAddHandler(this.state.name, this.state.age)} />
                {this.props.ctr.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personRemoveHandler(person.id)}/>
                ))}
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
    ctr:state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        personAddHandler: (name, age)=>dispatch({type:'ADDPERSON',val:{id:Math.random(),name:name, age:age}}),
        personRemoveHandler: (id) => dispatch({type:'REMOVE', val:id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);