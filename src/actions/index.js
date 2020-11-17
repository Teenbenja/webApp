export const getTodos = () => ({
    type: "GET_TODOS"
})

export const setTodos = (payload) => ({
    type: "SET_TODOS",
    payload
})

export default {
    getTodos,
    setTodos
}