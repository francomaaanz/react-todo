import  React from 'react';
import {TodoForm} from './components/todo/TodoForm'
import {TodoList} from './components/todo/TodoList'
import {addTodo,generateId} from './lib/TodoHelper'
import './App.css';


class App extends React.Component {
    
    state = {
        todos: [
            {id: 1, name: 'Wake up', isComplete: true},
            {id: 2, name: 'Have breakfast', isComplete: false}
        ],
        currentTodo: '',
        errorMessage: ''
    };
         
    handleSubmit = (evt) => {

        evt.preventDefault();
        const newId = generateId()
        const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false }
        const updatedTodos = addTodo(this.state.todos, newTodo)
        this.setState({
            todos: updatedTodos,
            currentTodo: '',
            errorMessage: ''
        })
    }

    handleEmptySubmit = (evt) => {
        evt.preventDefault();
        this.setState({
            errorMessage: 'Please, supply a name!'
        })
    }

    handleInputChange = (evt) => {
        this.setState({
            currentTodo: evt.target.value
        })
    }


    render() {


        const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
        return (
            <section className="main-section">
                <div className="form-container">
                    <h2>Todos</h2>
                    


                <TodoForm handleSubmit={submitHandler}
                          handleInputChange={this.handleInputChange}
                          currentTodo={this.state.currentTodo}/>
                </div>
                { this.state.errorMessage && <span className="error-msg">{this.state.errorMessage}</span> }
                <TodoList  todos={this.state.todos} />
            </section>
        )
    }
}

export default App;
