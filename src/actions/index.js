export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }

    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const editTodo = (id,data) => {
    
    return {
        type: "Edit_TODO",
        payload: {
            id:id,
            data:data
        }

    }
}
