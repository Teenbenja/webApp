import React, { useEffect, useState } from 'react'
import TodoHeader from '../molecules/TodoHeader'
import NewTodo from '../molecules/NewTodo'
import TodoList from '../molecules/TodoList'


export default function ToDo(props) {
    const {todos, getTodos, addTodo, deleteTodo } = props
    const [newTodo, setNewTodo] = useState(false)

    const onCreate = values => {
        console.log('Received values of form: ', addTodo)
        setNewTodo(false)
        addTodo(values)
    }

    useEffect(() => {
        getTodos()
    }, [getTodos])

    return (
        <div>
            <div>
                <TodoHeader 
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                />
            </div>
            <div>
                <NewTodo
                    visible={newTodo}
                    onCancel={() => {
                        setNewTodo(false)
                    }}
                    submitNewTodo={onCreate}
                />
            </div>
            <div>
                <TodoList 
                    todos={todos}
                    deleteTodo={deleteTodo}
                />
            </div>
        </div>
    )
}