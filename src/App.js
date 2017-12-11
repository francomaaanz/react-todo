import  React from 'react';
import {TodoForm} from './components/todo/TodoForm'
import {TodoList} from './components/todo/TodoList'
import {Footer} from './components/todo/Footer'
import {addTodo,generateId, findById, toggleToDo, updateTodo, removeTodo} from './lib/TodoHelper'
import {pipe, partial} from './lib/utils'
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

    handleRemove = (id, evt) => {
        evt.preventDefault();
        const updatedTodos = removeTodo(this.state.todos, id)
        this.setState({
            todos: updatedTodos
        })
    } 

    handleToggle = (id) => {
        const getUpdatesTodos = pipe(findById, toggleToDo, partial(updateTodo, this.state.todos))
        
        const updatedTodos = getUpdatesTodos(id, this.state.todos)        
        this.setState({
            todos: updatedTodos
        })
    }
         
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
                <TodoList 
                    handleRemove={this.handleRemove}
                    handleToggle={this.handleToggle} 
                    todos={this.state.todos} />
                    <Footer />
            </section>
        )
    }
}

export default App;
