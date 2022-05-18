const InitialData = {
    list: []
}

const todoReducers = (state = InitialData, action) => {
    switch (action.type) {
        case "ADD_TODO":

            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DELETE_TODO":

            const newList = state.list.filter((item) => item.id != action.id)
            console.log("newList", newList);

            return {
                ...state,
                list: newList
            }
        case "Edit_TODO":
            const newData = state.list.map((item) => item.id == action.payload.id ? action.payload : item)
            return {
                ...state,
                list: newData
            }
        default: return state;
    }

}

export default todoReducers;