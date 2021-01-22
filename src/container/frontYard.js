import React from 'react'
import { connect } from 'react-redux'
import { getTodos, addTodo, deleteTodo } from '../actions'
import ToDo from '../component/organisms/ToDo'


const FrontYard = (props) => {
    const {todos, getTodos, addTodo, deleteTodo } = props

    return (
        <div>
            <div>
                <ToDo 
                    todos={todos}
                    getTodos={getTodos}
                    addTodo={addTodo}
                    deleteTodo={deleteTodo}
                />
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    todos: state.toDo.allTodos
})

const mapDispatchToProps = {
    getTodos, addTodo, deleteTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontYard)